import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Guo | matthewguo.com",
  description:
    "Matthew Guo's Internet Home | I am an avid web and electronics developer, pianist, and software/embedded systems engineer for Botbuit",
};

export default function Page() {
  redirect("/home");
}