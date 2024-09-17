"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { getLangUrl } from "@/lib/utils";
import { useFetchCategories } from "@/app/api/hooks/categories/useFetchCategories";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdow-menu";

function Categories() {
  const { data: categories } = useFetchCategories();
  const translationText = useTranslations();

  const [currentUrl, setCurrentUrl] = useState<Location | null>(null);
  useEffect(() => {
    setCurrentUrl(window.location);
  }, []);

  const langUrl = (url: string) => {
    if (currentUrl) {
      return getLangUrl(currentUrl, url);
    }
    return url;
  };

  const routeLink = (id: number) => {
    switch (id) {
      case 0:
        return langUrl("/search/electronics");
        break;
      case 1:
        return langUrl("/search/jewelery");
        break;
      case 2:
        return langUrl("/search/men's%20clothing");
        break;
      case 3:
        return langUrl("/search/women's%20clothing");
        break;
      default:
        return langUrl("/404");
        break;
    }
  };

  return (
    <div className="mb-5">
      <p className="text-md">{translationText("Collections")}</p>
      <div className="pt-2 hidden md:block">
        <Link
          href={langUrl("/search")}
          className="text-md  hover:underline hover:text-white underline-offset-4"
        >
          {translationText("All")}
        </Link>
        {categories?.map((category: string, index: number) => (
          <div key={index} className="py-1">
            <Link
              href={routeLink(index)}
              className="capitalize text-md hover:underline hover:text-white underline-offset-4"
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
      <div className="z-10 w-full relative md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="cursor-pointer w-full flex items-center justify-between outline-none
          rounded border border-white/50 px-4 py-2 text-white text-md "
          >
            <p>{translationText("All")}</p>
            <ChevronDownIcon width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[80vw] bg-black ">
            {categories?.map((category: any, index: any) => (
              <div key={index} className="py-1">
                <Link
                  href={routeLink(index)}
                  className="hover:underline hover:text-white underline-offset-4"
                >
                  <DropdownMenuItem className="capitalize text-md cursor-pointer">
                    {category}
                  </DropdownMenuItem>
                </Link>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Categories;
