import { createCashout, getAllCashout } from "@/lib/actions/cashout";
import { error_response, success_response, validateToken } from "@/lib/utils";
import { CreateCashoutInputValidation } from "@/lib/validations";
import { CreateCashoutData } from "@/types";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const userId = validatedToken?.userId;

    return success_response(userId, "Cashout fetched successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
