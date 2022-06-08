import { NextResponse } from 'next/server'

export function middleware() {
  //return new Response('Hello, world!')
  const response = NextResponse.next()

  // Set custom header
  response.headers.set('x-modified-edge', 'true')

  // Return response
  return response
}