import React from "react";
import { PageProps, graphql } from "gatsby";
import Header from "@/components/Header";
import Container from "@/components/Container";
import ListNote from "@/components/ListNote";
import {
  HERO_TITLE,
  HERO_SUBTITLE,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "../../config";
import Layout from "@/components/Layout";

const IndexPage = ({ data, pageContext }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <div className="my-10">
        {/* <span className="px-3 py-1 text-sunglow text-xs font-semibold uppercase font-mono tracking-wide leading-none border-sunglow rounded-medium border-solid">
          In Beta
        </span> */}
        <h1 className=" mt-4 font-medium text-5xl md:text-8xl text-yellow leading-normal md:leading-snug transition-all ease-in-out hidden sm:block">
          {HERO_TITLE}
        </h1>
        <h1 className=" mt-4 font-medium text-6xl md:text-8xl text-yellow leading-normal md:leading-snug transition-all ease-in-out sm:hidden">
          unspent .space
        </h1>
      </div>
      <h2 className="text-3xl text-whitegrey my-6">{HERO_SUBTITLE}</h2>
      <div className="relative grid grid-cols-12 gap-6">
        <ListNote edges={edges} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexTemplateQuery {
    allMdx(
      filter: {
        frontmatter: { publish: { ne: false } }
        fileAbsolutePath: { regex: "/vault/" }
      }
      limit: 10
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          ...postList
        }
      }
    }
  }
`;
