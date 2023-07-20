import React from "react";
import { graphql } from "gatsby";
import MdxProvider from "@/components/MDXProvider";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "@/components/Layout";
import Link from "@/components/GatsbyLink";
import kebabCase from "lodash.kebabcase";

const PostTemplate = ({ data }) => {
  const postNode = data.mdx;
  const post = data.mdx.fields;
  const { tags, category, author } = postNode.frontmatter;
  const postTitle = data.mdx.frontmatter.title;
  // const pageTitle = `${postTitle} - ${siteTitle}`;

  return (
    <MdxProvider>
      <Layout>
        <small className="text-sm font-bold uppercase tracking-tight">
          {post.date}, Author: {author}
        </small>
        <article className="my-6 prose dark:prose-invert lg:prose-xl">
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </article>
        <h5 className="uppercase font-bold mb-4">Tags</h5>
        <ul className="flex flex-row gap-4 mb-4">
          {tags &&
            tags.map((tag) => (
              <li
                key={tag}
                className="px-4 py-1 bg-sunglow text-richblack rounded-full"
              >
                <Link to={`/tag/${kebabCase(tag)}`}>{tag}</Link>
              </li>
            ))}
        </ul>
      </Layout>
    </MdxProvider>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...post
    }
  }
`;

export default PostTemplate;
