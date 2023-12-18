import { allBlogs, allFilms, allMeta } from "@/.contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://matthewguo.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const films = allFilms.map((post) => ({
    url: `https://matthewguo.com/film/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const metas = allMeta.map((post) => ({
    url: `https://matthewguo.com/life/${post.slug}`,
    lastModified: post.publishedAt,
  }));



  const routes = [
    "",
    "/",
    "/home",
    "/home/resume",
    "/blog",
    "/music",
    "/film",
    "/life",
    "/contact",
  ].map((route) => ({
    url: `https://matthewguo.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...films,  ...metas];
}