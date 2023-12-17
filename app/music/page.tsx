import type { Metadata } from "next";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "Music | Matthew Guo",
  description: "The necessary part of the soul",
};

export default async function BlogPage() {

  return (
    <section className="min-h-[200vh] flex flex-col w-[742px] mx-auto mt:16 md:mt-32">
      <h3 className="mb-4 mt-8">Select repritoopeore</h3>
      <ul>
        <li>Rachmanioff Piano Concerto 3, op.30</li>
        <li>Chopin Ballade No.1, op. 23</li>
        <li>Chopin Etude op. 25, No. 11 "Vent de l'hiver"</li>
        <li>"Suzume", arrangement and medly for the piano</li>
        <li>Rachmanioff Prelude No. 5, op. 23</li>
        <li>Scriabin Etude No. 12, op. 8</li>
      </ul>
      <h3 className="mb-4 mt-8">Awards and stuff ig</h3>
      <ul>
        <li>2023 North American Virtuoso International Youth 2nd Prize</li>
        <li>2023 Raleigh Music Club Royalty Competition 3nd Prize</li>
        <li>2022 NC Federation of Music Teachers Auditions 2nd Prize</li>
        <li>2023 Young Artists Auditions Piano Senior 2 div. 2nd Prize</li>
      </ul>
      
    </section>
  );
}