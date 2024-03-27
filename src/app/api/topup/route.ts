import { createPayment, getAllTopup } from "@/lib/actions/topup";
import { error_response, success_response, validateToken } from "@/lib/utils";
import { CreatePaymentInputValidation } from "@/lib/validations";
import { CreatTopupData } from "@/types";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const cashout = await getAllTopup(
      validatedToken?.userId as unknown as string
    );

    return success_response(cashout, "Cashout fetched successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const body = await req.json();

    const inputValidation = CreatePaymentInputValidation.safeParse(body);

    if (!inputValidation.success) {
      return error_response(
        "Input validation failed",
        400,
        inputValidation.error
      );
    }

    const topup = await createPayment({
      ...body,
      userId: validatedToken?.userId,
    } as CreatTopupData);

    return success_response(
      topup,
      "Payment successful, we will process your request immediately.",
      200
    );
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
