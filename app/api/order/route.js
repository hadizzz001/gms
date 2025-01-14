import { PrismaClient } from "@prisma/client";

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

    // Format WhatsApp message
    const cartDetails = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.title} - Qty: ${item.quantity}, Price: $${item.price}`
      )
      .join("\n");

    const whatsappMessage = `https://wa.me/+96176839590/?text=${encodeURIComponent(
      `*New Order Received:*\n\n*User Information:*\nName: ${userInfo.name}\nPhone: ${userInfo.phone}\nAddress: ${userInfo.address}\n\n*Cart Details:*\n${cartDetails}\n\n*Total Amount:* $${cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
         }`
    )}`;

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
