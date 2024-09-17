"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

function Footer() {
  const [pathname, setPathName] = useState("");
  useEffect(() => {
    setPathName(window.location.pathname ?? "");
  }, []);
  const translationText = useTranslations();

  return (
    <main>
      <div className="flex space-x-10 md:flex-row flex-col">
        <div className="flex gap-x-4 items-center">
          <Image
            src={"/assets/header/shopify.svg"}
            alt="shopify logo"
            className=""
            width={30}
            height={20}
          />
          <span className="text-white">Shopify</span>
        </div>
        <div className="text-neutral-500 text-base flex flex-col mt-12">
          <Link
            className={`${
              pathname === "/"
                ? "font-bold text-surface-foreground"
                : "text-primary-foreground hover:text-surface-foreground"
            } mb-2`}
            href={"/"}
          >
            {translationText("Home")}
          </Link>
          <Link
            className={`${
              pathname === "/about"
                ? "font-bold text-surface-foreground"
                : "text-primary-foreground hover:text-surface-foreground"
            }`}
            href={"/about"}
          >
            {translationText("About")}
          </Link>
          <Link
            className={`${
              pathname === "/terms-conditions"
                ? "font-bold text-surface-foreground"
                : "text-primary-foreground hover:text-surface-foreground"
            } mt-2`}
            href={"/terms-conditions"}
          >
            {translationText("Terms & Conditions")}
          </Link>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex md:justify-between md:flex-row flex-col mb-4">
        <div className="flex md:flex-row flex-col">
          <p className="hover:text-white">
            © 2023-2024 Shopify, Inc. {translationText("All rights reserved")}
          </p>

          <hr className=" hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block mx-10 my-auto" />
          <a
            className="text-primary-foreground hover:text-surface-foreground md:my-auto my-2"
            href="https://github.com/Sithu-BinaryLab/next-shopify-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translationText("View the source")}
          </a>
        </div>

        <a
          className="text-primary-foreground hover:text-surface-foreground md:my-auto my-2"
          href="https://www.linkedin.com/in/sithulwin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translationText("Created by Dev")}
        </a>
      </div>
    </main>
  );
}
export default Footer;
