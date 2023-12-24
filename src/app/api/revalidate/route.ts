import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";

export const POST = async (req: NextRequest) => {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return NextResponse.json("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);
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
