import type { Metadata } from "next";
import { Suspense } from "react";

import Client from "./client";

export const metadata: Metadata = {
  title: "Projects | Matthew Guo",
  description: "The stuff I brought into this world",
};

export default async function ProjectsPage() {

  return (
    <>
      <Suspense><Client></Client></Suspense>
    </>
  );
}