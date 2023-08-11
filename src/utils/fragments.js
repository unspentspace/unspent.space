import { graphql } from "gatsby";

export const postFragment = graphql`
  fragment post on Mdx {
    id
    body
    excerpt(pruneLength: 150)
    fields {
      date
      title
      slug
      tagSlugs
      category
      categorySlug
      stage
    }
    frontmatter {
      date
      tags
      title
      description
      author
      socialImage {
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    headings {
      depth
      value
    }
    tableOfContents
  }

  fragment postList on Mdx {
    fields {
      date
      title
      slug
      category
      categorySlug
      tagSlugs
      stage
    }
    excerpt(pruneLength: 150)
    frontmatter {
      title
      description
      date
      author
      category
      tags
      featured
      socialImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default postFragment;
