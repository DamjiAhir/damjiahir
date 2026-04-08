import { Resend } from "resend";
import { connectToDatabase } from "@/lib/dbconnection";
import { messageModel } from "@/models/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1. Connect to DB (Make sure your dbconnection file caches this connection!)
    await connectToDatabase();

    const { firstname, lastname, email, phonenumber, message } = await req.json();

    const newMessage = new messageModel({
      firstname,
      lastname,
      email,
      phonenumber,
      message,
    });

    // 2. Prepare the Email Promise (Notice there is NO 'await' here yet)
    const emailPromise = resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Tip: Update this to your verified domain later!
      to: process.env.MY_EMAIL,
      subject: `New Message from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone Number: ${phonenumber}
        Message: ${message}
      `,
    });

    // 3. Prepare the Database Save Promise
    const dbSavePromise = newMessage.save();

    // 4. Execute BOTH at the exact same time using Promise.all
    await Promise.all([dbSavePromise, emailPromise]);

    return Response.json(
      { message: "Message saved and sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact Form Error:", error); // Good practice to log this on the server
    return Response.json(
      { message: "Can't save and send message", error: error.message },
      { status: 500 }
    );
  }
}