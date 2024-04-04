"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "../database/connection/mongoose";
import { handleError } from "../utils";
import User from "../database/models/users.model";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import { CreateUserParams, UpdateUserParams } from "@/types";

import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { welcomeTemplate } from "../templates/welcome";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    // const checkAffiliateUser = await User.findOne({
    //   accountId: user.affiliateId,
    // });

    const existingUser = await User.findOne({ email: user.email });

    // const existingUserId = await User.findOne({ accountId: user.accountId });

    // if (!checkAffiliateUser) {
    //   handleError(`Your affiliate user ID: ${user.affiliateId} do not exist.`);
    // }

    if (existingUser) {
      handleError("User with this email already exists");
    }
    // if (existingUserId) {
    //   handleError(`User with this User ID: ${user.accountId}  already exists`);
    // }

    user["password"] = await hash(user.password, 10);

    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    handleError(error);
  }
}

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export async function compileWelcomeTemplate(name: string, url: string) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}

export async function loginUser(accountId: string, password: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ accountId: accountId });

    if (!user) {
      handleError("Invalid Account ID");
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!passwordMatch) {
      handleError("Invalid Credentials");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "3h",
    });

    return { token };
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ _id: userId }).select("-password");

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserAffiliateById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ accountId: userId }).select("-password");

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(userId: any, user: Partial<UpdateUserParams>) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ _id: userId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(userId: string) {
  try {
    await connectToDatabase();
    const userToDelete = await User.findOne({ _id: userId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

export async function updateCredits(userId: string, creditCoins: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditCoins } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}
