import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdow-menu";

function SortBy() {
  const sortData = ["Price: Low to high", "Price: High to low"];
  return (
    <div className="mb-5">
      <div className="hidden md:block">
        <p className="text-md pb-1">Sort by</p>
        {sortData?.map((data: any, index: any) => (
          <div key={index} className="py-1">
            <Link
              href={""}
              className="text-md hover:underline hover:text-white underline-offset-4"
            >
              {data}
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
            <p className="text-md pb-1">Sort by</p>
            <ChevronDownIcon width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[80vw] bg-black ">
            {sortData?.map((data: any, index: any) => (
              <div key={index} className="py-1">
                <Link
                  href={""}
                  className="hover:underline hover:text-white underline-offset-4"
                >
                  <DropdownMenuItem className="capitalize text-md cursor-pointer">
                    {data}
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

export default SortBy;
