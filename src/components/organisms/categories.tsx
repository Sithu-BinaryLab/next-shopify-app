"use client";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useFetchCategories } from "@/app/api/hooks/categories/useFetchCategories";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdow-menu";

function Categories() {
  const { data: categories } = useFetchCategories();

  const routeLink = (id: number) => {
    switch (id) {
      case 0:
        return "/search/electronics";
        break;
      case 1:
        return "/search/jewelery";
        break;
      case 2:
        return "/search/men's%20clothing";
        break;
      case 3:
        return "/search/women's%20clothing";
        break;
      default:
        return "/404";
        break;
    }
  };

  return (
    <div className="mb-5">
      <p className="text-md">Collections</p>
      <div className="pt-2 hidden md:block">
        <Link
          href={"/search"}
          className="text-md  hover:underline hover:text-white underline-offset-4"
        >
          All
        </Link>
        {categories?.map((category: any, index: any) => (
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
            <p>All</p>
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
