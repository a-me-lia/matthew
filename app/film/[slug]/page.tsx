import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "../../components/mdx";
import { allFilms } from "@/.contentlayer/generated";
import Balancer from "react-wrap-balancer";

import Tag from "../../components/tag";


export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = allFilms.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    tags,
    slug,
  } = post;
  const ogImage = image
    ? `https://matthewguo.com${image}`
    : `https://matthewguo.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://matthewguo.com/film/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }: { params: any }) {
  const post = allFilms.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-white mx-4  md:mx-auto md:w-[742px] mb-64  relative">
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="font-bold text-2xl max-w-[600px]  mt-32 md:mt-24">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="flex justify-between space-y-2 md:space-y-0 md:items-center mt-2 mb-8 text-sm max-w-[650px] flex-col md:flex-row">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
        <div className="flex flex-row">
          <Tag url="blog" tags={post.tags}></Tag>
        </div>
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}