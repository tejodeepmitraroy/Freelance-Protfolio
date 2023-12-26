import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
  try {
    const body = req.body

   
    revalidatePath('/');
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }
};