import React from "react";
import Link from "@/components/GatsbyLink";
import Container from "@/components/Container";
import { MENU } from "../../config";
import { MdOpenInNew } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10">
          <Link to="/" className="text-whitegrey">
            unspent<span className="text-yellow text-4xl">.</span>space
          </Link>
          <ul className="list-style-none md:grid hidden grid-flow-col auto-cols-max gap-6 items-center">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link
                to="https://discord.gg/n6AFg4H3Ve"
                target="_blank"
                className="px-4 items-center flex py-2 bg-dimgrey rounded-full text-white hover:bg-grey transition-all ease-in-out duration-300 hover:text-whitegrey"
              >
                <div className="pr-2">discord chat</div>
                <MdOpenInNew />
              </Link>
            </li>
          </ul>
          <Link
                to="https://discord.gg/n6AFg4H3Ve"
                target="_blank"
                className="px-2 sm:px-4 text-sm sm:text-lg items-center flex py-2 bg-dimgrey rounded-full text-white hover:bg-grey transition-all ease-in-out duration-300 hover:text-whitegrey md:hidden"
              >
                <div className="pr-2">discord chat</div>
                <MdOpenInNew />
          </Link>
        </nav>
      </Container>
    </header>
  );
}
