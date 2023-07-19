import React from "react";
import Container from "@/components/Container";
import GatsbyLink from "@/components/GatsbyLink";
import { FOOTER, COPYRIGHT } from "../../config";
import Logo from "../images/unspentspace-logo.svg";

export default function Footer() {
  return (
    <footer className="width-full mt-10">
      <Container>
        <div className="border-t color-border-slate-200 flex flex-col-reverse md:flex-row gap-6 py-6 items-center">
          <div className="flex gap-4 items-center place-content-center">
            <GatsbyLink to="https://unspent.space">
              <Logo />
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
        </div>
      </Container>
    </footer>
  );
}
