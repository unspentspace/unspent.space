import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import {
  LOCALE,
  COPYRIGHT,
  AUTHOR,
  KEYWORDS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "../../config";
import { Helmet } from "react-helmet";

const Layout: React.FC = ({
  children,
  title,
  description,
  keywords,
  url,
  full,
  ...props
}: Props) => {
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageKeywords = keywords || KEYWORDS;
  return (
    <div>
      {full ? (
        <>
          <Helmet htmlAttributes={{ lang: LOCALE }} title={pageTitle}>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="publisher" content={AUTHOR.NAME} />
            <meta name="author" content={AUTHOR.NAME} />
            <meta name="copyright" content={COPYRIGHT} />
            <meta name="og:title" content={pageTitle}/>
            <meta name="og:website" content={SITE_TITLE}/>
            <meta name="og:image" content={'https://res.cloudinary.com/dgpuwpmjk/image/upload/v1684408431/unspent-with-dark-bg_afddek.png'}/>
            
          {/* // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          // content: 'https://res.cloudinary.com/dgpuwpmjk/image/upload/v1684408431/unspent-with-dark-bg_afddek.png', */}
          </Helmet>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Helmet htmlAttributes={{ lang: LOCALE }} title={pageTitle}>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="publisher" content={AUTHOR.NAME} />
            <meta name="author" content={AUTHOR.NAME} />
            <meta name="copyright" content={COPYRIGHT} />
            <meta name="og:title" content={pageTitle}/>
            <meta name="og:website" content={SITE_TITLE}/>
            <meta name="og:image" content={'https://res.cloudinary.com/dgpuwpmjk/image/upload/v1684408431/unspent-with-dark-bg_afddek.png'}/>
          </Helmet>
          <Header />
          <Container className="min-h-screen">{children}</Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  url?: string;
  keywords: string;
  full: boolean;
};
