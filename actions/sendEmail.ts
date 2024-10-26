"use server";

import React from "react";

import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

import { contactData } from "@/lib/data";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: any) => {
  const { email, message } = formData;
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: contactData.email,
      subject: "Message from contact form",
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: email,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
