"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function SendEmail(
  email: string,

) {
  try {
    const data = await resend.emails.send({
      from: "lia@yoaso.bi",
      to: email,
      subject: "You email has been recieved!",
      html: `Your email: ${email} will now receive site updates to yoaso.bi, as well as upcoming YOASOBI events and drops! :w:`
    });
    resend.emails.send({
      from: "postmaster@yoaso.bi",
      to: "matthewguo.x86@gmail.com",
      subject: `New subscriber to yoaso.bi`,
      html: `
      New subscriber to yoaso.bi: ${email}`
    });
    return data;
  } catch (error) {
    return error;
  }
}
