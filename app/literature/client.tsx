"use client";
import { allLiterature } from "@/.contentlayer/generated";
import { useSearchParams } from "next/navigation";
import Balancer from "react-wrap-balancer";

import TagFilter from "./../components/tagFilter";
import H1 from "../components/styles/H1";

import PostCard from "../components/postCard";

export default function Client() {
  const searchParams = useSearchParams();

  return (
    <section className="min-h-[200vh] bg-white mx-4 md:mx-auto md:w-[742px]  relative pt-32 ">
      <H1>Literature and Art</H1>
      <h2 className=" text-lg mb-8 ">
        <Balancer>The important (and sometimes not so important) parts of existence</Balancer>
      </h2>
      <TagFilter url="literature"></TagFilter>

      {allLiterature
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
          <PostCard postUrl={`/literature/${post.slug}`} url="literature" tag={post.tags} title={post.title} image={post.image} desc={post.summary}></PostCard>
        ))}
    </section>
  );
}