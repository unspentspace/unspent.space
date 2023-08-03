import React from "react";
import { useBlockTip } from "@/api/useBlockTip";
import Container from "@/components/Container";
import GatsbyLink from "@/components/GatsbyLink";
import { FOOTER, COPYRIGHT } from "../../config";
import Logo from "../images/svg/unspentspace-logo.svg";

export default function Footer() {

  const { isLoading, data }  = useBlockTip()

  if (isLoading) {
    console.log('Loading block tip from mempool.space')
  }

  return (
    <footer className="width-full mt-10">
      <Container>
        <div className="border-t color-border-slate-200 flex flex-col-reverse md:flex-row gap-6 py-6 items-center">
          <div className="flex gap-4 items-center place-content-center">
            <GatsbyLink to="https://unspent.space">
              <Logo className="w-10"/>
            </GatsbyLink>
            <p>
              © {new Date().getFullYear()} {COPYRIGHT}
            </p>
          </div>
          <ul className="list-style-none grid grid-cols-2 gap-8 md:justify-between md:flex md:flex-row flex-col">
            {FOOTER.map((item) => (
              <li key={item.label}>
                <GatsbyLink
                  to={item.path}
                  className="text-sm text-sunglow uppercase tracking-normal md:text-md"
                >
                  {item.label}
                </GatsbyLink>
              </li>
            ))}
          </ul>
          {isLoading ? 
          <div>Loading block height...</div>
          :
          <p>block height: {data}</p>
          }
          
        </div>
      </Container>
    </footer>
  );
}
