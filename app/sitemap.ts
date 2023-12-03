import { allBlogs, allProjects } from "@/.contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://matthewguo.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const about = allProjects.map((post) => ({
    url: `https://matthewguo.com/projects/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = [
    "",
    "/home",
    "/home",
    "/home/resume",
    "/blog",
    "/projects",
    "/contact",
  ].map((route) => ({
    url: `https://matthewguo.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...about];
}