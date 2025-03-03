import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const revalidate = 10;

export async function GET(request, { params }) {
  const { type } = params;  

  console.log("type", type);
  
 
  try {
   
    const categories1 = await prisma.product.findMany({
      where: { type },
    });

    if (!categories1 || categories1.length === 0) {
      return new Response(JSON.stringify({ message: 'No ids found for the specified type.' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(categories1), { status: 200 });
  } catch (error) {
    console.error('Error fetching ids:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
