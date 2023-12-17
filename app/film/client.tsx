"use client";
import Link from "next/link";
import { allFilms } from "@/.contentlayer/generated";
import { useSearchParams } from "next/navigation";
import Balancer from "react-wrap-balancer";

import TagFilter from "./../components/tagFilter";
import H1 from "../components/styles/H1";

import PostCard from "../components/postCard";

export default function Client() {
  const searchParams = useSearchParams();

  return (
    <section className="min-h-[200vh] bg-white mx-4 md:mx-auto md:w-[742px]  relative pt-32 ">
      <H1>blog :w:</H1>
      <h2 className=" text-lg mb-8 ">
        <Balancer> read about the world. and sometimes shrimp.</Balancer>
      </h2>
      <TagFilter url="blog"></TagFilter>

      {allFilms
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .filter((post) => {
          let activeTags = searchParams.get("tags")?.split(",");
          let postTags = post.tags.trim().split(",");
          let postHasActive = true;
          if (activeTags) {
            postHasActive = false;
            for (let i = 0; i < postTags.length; i++) {
              if (activeTags.indexOf(postTags[i]) != -1) {
                postHasActive = true;
              }
            }
          }
          return postHasActive;
        })
        .map((post) => (
          <PostCard key={post.title} postUrl={`/film/${post.slug}`} url="film" tag={post.tags} title={post.title} image={post.image} desc={post.summary}></PostCard>
        ))}

    </section>
  );
}