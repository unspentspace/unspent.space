import React from "react";
import Layout from "@/components/Layout";
import MDXCompProvider from "@/components/MDXProvider";

export default function DefaultPageTemplate({ children }) {
  return (
    <MDXCompProvider>
      <Layout>
        <div className="prose dark:prose-invert lg:prose-xl">{children}</div>
      </Layout>
    </MDXCompProvider>
  );
}
