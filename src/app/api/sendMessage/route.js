import { Resend } from "resend";
import { connectToDatabase } from "@/lib/dbconnection";
import { messageModel } from "@/models/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectToDatabase();

    const { firstname, lastname, email, phonenumber, message } =
      await req.json();
    const newMessage = new messageModel({
      firstname,
      lastname,
      email,
      phonenumber,
      message,
    });
    await newMessage.save();
    const emailResponce = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: `New Message from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone Number: ${phonenumber}
        Message: ${message}
      `,
    });
    return Response.json(
      { message: "message saved abd send successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "can't save and send message", error },
      { status: 500 }
    );
  }
}
