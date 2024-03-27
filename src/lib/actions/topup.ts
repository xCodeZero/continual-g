"use server";

import { connectToDatabase } from "../database/connection/mongoose";
import { handleError } from "../utils";
import Earnings from "../database/models/earnings.model";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import {
  CheckoutTransactionParams,
  CreatTopupData,
  UpdateTransactionData,
} from "@/types";
import Topup from "../database/models/topup.model";
import User from "../database/models/users.model";
import { updateUser } from "./user";
import mongoose from "mongoose";

export async function createPayment(topup: CreatTopupData) {
  try {
    await connectToDatabase();

    const userIdObject = new mongoose.Types.ObjectId(topup.userId);

    // Query the `ashoutsData` collection using the converted ObjectId
    const userData = await User.findOne({ _id: userIdObject });

    if (topup.amount < 1) handleError("Total amount cannot be negative value.");

    const newTopup = await Topup.create(topup);

    console.log(newTopup);

    return JSON.parse(JSON.stringify(newTopup));
    // if (userData.creditCoins >= topup.amount) {
    //   //NOTE: Remove exact amount from use's credit
    //   const reconciledCredit =
    //     Number(userData.creditCoins) - Number(topup.amount);
    //   await updateUser(userData._id, {
    //     creditCoins: reconciledCredit,
    //   });

    //   const newTopup = await Topup.create(topup);

    //   return JSON.parse(JSON.stringify(newTopup));
    // }
    // handleError("Sorry, insufficient balance.");
  } catch (error) {
    handleError(error);
  }
}

export async function getAllEarnings(userId: string) {
  try {
    await connectToDatabase();

    const earnings = await Earnings.find({ userId }).sort("-createdAt");

    return JSON.parse(JSON.stringify(earnings));
  } catch (error) {
    handleError(error);
  }
}

export async function getAllTopup(userId: string) {
  try {
    await connectToDatabase();
    const cashout = await Topup.find({ userId }).sort("-createdAt");
    console.log(cashout);
    return JSON.parse(JSON.stringify(cashout));
  } catch (error) {
    handleError(error);
  }
}

export async function getTransactionById(transactionId: string) {
  try {
    await connectToDatabase();

    const transaction = await Earnings.findById(transactionId);

    if (!transaction) throw new Error("Transaction not found");

    return JSON.parse(JSON.stringify(transaction));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserTotalTransactions(userId: string) {
  try {
    await connectToDatabase();

    const transactionCount = await Earnings.countDocuments({ userId });
    return transactionCount;
  } catch (error) {
    handleError(error);
  }
}

export async function updateTransaction(
  transactionId: string,
  transactionData: UpdateTransactionData
) {
  try {
    await connectToDatabase();

    const updatedTransaction = await Earnings.findByIdAndUpdate(
      transactionId,
      transactionData,
      { new: true }
    );

    if (!updatedTransaction) throw new Error("Transaction update failed");

    return JSON.parse(JSON.stringify(updatedTransaction));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteTransaction(transactionId: string) {
  try {
    await connectToDatabase();

    const deletedTransaction = await Earnings.findByIdAndDelete(transactionId);

    return deletedTransaction
      ? JSON.parse(JSON.stringify(deletedTransaction))
      : null;
  } catch (error) {
    handleError(error);
  }
}

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: "TOP_UP",
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: "TOP_UP",
      credits: amount,
      price: transaction.amount,
      userId: transaction.userId,
    },
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard`,
  });

  redirect(session.url!);
}

export async function getUserTotalCashout(userId: string) {
  // try {
  //   await connectToDatabase();
  //   const cashoutCount = await Cashout.countDocuments({ userId });
  //   return cashoutCount;
  // } catch (error) {
  //   handleError(error);
  // }
}

export async function getUserTotalAmountCashout(userId: string) {
  try {
    await connectToDatabase();

    const userIdObject = new mongoose.Types.ObjectId(userId);

    // Query the `ashoutsData` collection using the converted ObjectId
    const userData = await User.findOne({ _id: userIdObject });

    const userAvailableCredit = userData.creditCoins;

    return userAvailableCredit;
  } catch (error) {
    handleError(error);
  }
}
