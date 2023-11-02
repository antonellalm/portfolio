"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const validateString = (value: unknown, maxLenght: number) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  // console.log("Running on server");
  // console.log(formData.get("senderEmail"));
  // console.log(formData.get("message"));

  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid sender message",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "antonellarios0098@gmail.com",
    subject: "Mensaje de contact Form",
    reply_to: senderEmail,
    text: message,
  });
};
