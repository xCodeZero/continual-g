/* eslint-disable camelcase */
import { NextResponse } from "next/server";
import { createTransaction } from "@/lib/actions/transaction";
import { updateCredits } from "@/lib/actions/user";
import stripe from "stripe";
import { createPayment } from "@/lib/actions/topup";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const { metadata } = event.data.object;

    const transaction = {
      userId: metadata?.userId,
      source: "CREDIT" as "CREDIT",
      source_id: "N/A",
      amount: Number(metadata?.price) || 0,
      status: "SUCCESS" as "SUCCESS",
    };

    const payment = {
      userId: metadata?.userId,
      source: "CREDIT" as "CREDIT",
      source_id: "N/A",
      image:
        "https://utfs.io/f/099d9d3e-7796-4352-8f2c-4756709cbb7a-5sd1uk.png",
      amount: Number(metadata?.price) || 0,
      status: "SUCCESS" as "SUCCESS",
    };
    await updateCredits(metadata?.userId as string, Number(metadata?.price));
    const newTransaction = await createTransaction(transaction);
    const newTopup = await createPayment(payment);

    return NextResponse.json({
      message: "OK",
      transaction: newTransaction,
      payment: newTopup,
    });
  }

  return new Response("", { status: 200 });
}
