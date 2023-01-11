import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function (req: NextRequest) {
  return new Response(JSON.stringify({ name: "John Doe", node_version: process.env.NODE_VERSION }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
