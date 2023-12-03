"use client";
import Link from "next/link";
import { allBlogs } from "@/.contentlayer/generated";
import { useSearchParams } from "next/navigation";
import Balancer from "react-wrap-balancer";

import TagFilter from "./../components/tagFilter";
import Tag from "./../components/tag"
import H1 from "../components/styles/H1";

export default function Client() {
  const searchParams = useSearchParams();

  return (
    <section className="min-h-screen bg-white mx-4 md:mx-auto md:w-[742px]  relative pt-32 ">
      <H1>blog :w:</H1>
      <h2 className=" text-lg mb-8 ">
        <Balancer> read about the world. and sometimes shrimp.</Balancer>
      </h2>
      <TagFilter url="blog"></TagFilter>

      {allBlogs
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
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900  tracking-tight">{post.title}</p>

              <div className="flex flex-row items-baseline ">
                {" "}

                <Tag url="blog" tags={post.tags}></Tag>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}