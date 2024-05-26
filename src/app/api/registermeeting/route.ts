import { reserverMeetingSlot } from "@/lib/actions/meeting";
import { error_response, success_response } from "@/lib/utils";
import { CreateMeetingInputValidation } from "@/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Input received: ", body);

    const inputValidation = CreateMeetingInputValidation.safeParse(body);

    console.log("Input validation result: ", inputValidation);

    if (!inputValidation.success) {
      return error_response(
        "Input validation failed",
        400,
        inputValidation.error
      );
    }

    const user = await reserverMeetingSlot(body);

    return success_response(
      user,
      "Your slot for the video meeting has been successfully reserved!",
      200
    );
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
