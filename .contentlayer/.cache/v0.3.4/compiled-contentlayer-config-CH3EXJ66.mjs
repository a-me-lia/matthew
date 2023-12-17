// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.includes("blog") ? doc._raw.flattenedPath.slice(doc._raw.flattenedPath.indexOf("/") + 1) : doc._raw.flattenedPath.slice(doc._raw.flattenedPath.indexOf("/") + 1)
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `https://homescree.net/${doc.image}` : `https://homescree.net/og?title=${doc.title}`,
      tags: doc.tags,
      url: `https://homescree.net/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Matthew Guo"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    },
    tags: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    }
  },
  computedFields
}));
var Meta = defineDocumentType(() => ({
  name: "Meta",
  filePathPattern: `meta/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    tags: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    }
  },
  computedFields
}));
var Film = defineDocumentType(() => ({
  name: "Film",
  filePathPattern: `film/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    tags: {
      type: "string",
      required: true
    },
    image: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Meta, Film]
});
export {
  Blog,
  Film,
  Meta,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CH3EXJ66.mjs.map
