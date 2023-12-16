import type { Metadata } from "next";
import { Suspense } from "react";

import Client from "./client";

export const metadata: Metadata = {
  title: "Blog | Matthew Guo",
  description: "A place where I put things I love",
};

export default async function BlogPage() {

  return (
    <>
      <Suspense><Client></Client></Suspense>
    </>
  );
}