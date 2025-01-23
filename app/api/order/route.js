import { PrismaClient } from "@prisma/client";
import { Resend } from "resend"; 

const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const { userInfo, cartItems } = body;

    // Save the order to the database
    const order = await prisma.order.create({
      data: {
        userInfo,
        cartItems,
      },
    });

    // Format the cart details
    const cartDetails = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.title} - Qty: ${item.quantity}, Price: $${item.price}`
      )
      .join("\n");

    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const whatsappMessage = `https://wa.me/+96176839590/?text=${encodeURIComponent(
      `*New Order Received:*\n\n*User Information:*\nName: ${userInfo.name}\nPhone: ${userInfo.phone}\nAddress: ${userInfo.address}\n\n*Cart Details:*\n${cartDetails}\n\n*Total Amount:* $${totalAmount}`
    )}`;

    // Construct the HTML content for the email
    const htmlContent = `
      <h1>New Order Received</h1>
      <p><strong>User Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${userInfo.name}</li>
        <li><strong>Phone:</strong> ${userInfo.phone}</li>
        <li><strong>Address:</strong> ${userInfo.address}</li>
      </ul>
      <p><strong>Cart Details:</strong></p>
      <ul>
        ${cartItems
          .map(
            (item) =>
              `<li>${item.title} - Qty: ${item.quantity}, Price: $${item.price}</li>`
          )
          .join("")}
      </ul>
      <p><strong>Total Amount:</strong> $${totalAmount}</p>
    `;

    // Send email after order is saved
    await resend.emails.send({
      from: "info@anazon.hadizproductions.com",
      to: "services@gmspowergeneration.com",
      subject: "New Order",
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({
        message: "Order placed successfully!",
        whatsappLink: whatsappMessage,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error saving order", error: error.message }),
      { status: 500 }
    );
  }
}
