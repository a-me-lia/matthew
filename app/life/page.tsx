import type { Metadata } from "next";
import { Suspense } from "react";

import Client from "./client";

export const metadata: Metadata = {
  title: "Literature | Matthew Guo",
  description: "Writing",
};

export default async function BlogPage() {

  return (
    <>
      <Suspense><Client></Client></Suspense>
    </>
  );
}