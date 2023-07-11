import React from "react";
import { Link } from "gatsby";

export default function ListNote({ edges }) {
  console.log('edges',edges)
  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-12 md:col-span-6 my-2 py-4 md:my-0 border-color-slate-200 border-b last:border-none">
          <div className="items-center uppercase leading-relaxed text-sunglow">
            <time>{edge.node.fields.date}</time>
          </div>
          <Link to={`/${edge.node.fields.slug}`}>
            <h2 className="underline my-2">{edge.node.fields.title}</h2>
          </Link>
          <p className="mb-2 text-lightgrey">
            {edge.node.excerpt || edge.node.frontmatter.description}
          </p>
          {/* <small className="bg-dimgrey text-yellow text-xs tracking-normal uppercase rounded-lg px-2 py-1 my-2">
            {edge.node.fields.stage}
          </small> */}
        </div>
      ))}
    </>
  );
}
