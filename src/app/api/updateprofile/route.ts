import { updateUser } from "@/lib/actions/user";
import { error_response, success_response, validateToken } from "@/lib/utils";
import { UpdateInfoInputValidation } from "@/lib/validations";
import { UpdateUserParams } from "@/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    // const inputValidation = UpdateInfoInputValidation.safeParse(body);

    const user = await updateUser(validatedToken?.userId, body);

    return success_response(user, "Profile update successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
