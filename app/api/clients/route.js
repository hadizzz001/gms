import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const categories = await prisma.client.findMany();
    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { client, location } = await req.json();
    const category = await prisma.client.create({ data: { location, client } });
    return new Response(JSON.stringify({ message: 'Client created successfully', category }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating category:', error);
    return new Response(JSON.stringify({ error: 'Failed to create category' }), { status: 500 });
  }
}

 

export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });

    const deletedCategory = await prisma.client.delete({ where: { id } });
    return new Response(JSON.stringify({ message: 'Client deleted successfully', deletedCategory }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete category' }), { status: 500 });
  }
}
