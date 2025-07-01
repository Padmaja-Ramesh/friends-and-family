"use client";
import { ConvexClient } from "convex/browser";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}
