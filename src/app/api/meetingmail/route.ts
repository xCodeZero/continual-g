// pages/api/sendEmail.ts
import { compileWelcomeMeetingTemplate, sendMail } from "@/lib/mail";
import { error_response, success_response, validateToken } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { to, name, subject } = data;

    const body = await compileWelcomeMeetingTemplate(name, "CONTINUAL-G®");

    const mail = await sendMail({ to, name, subject, body });

    return success_response(mail, "Mail sent successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
