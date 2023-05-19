import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url)

  const redirectUrl = new URL('/', request.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie' : `token=; Path=/; max-age=0;`
    }
  })
}