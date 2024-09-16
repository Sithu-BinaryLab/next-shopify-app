import { useAtom } from "jotai";
import { sortValue } from "@/jotai/state";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdow-menu";

interface SortByProps {
  sortType: string;
  setSortType: (type: string) => void;
}

function SortBy({ sortType, setSortType }: SortByProps) {
  const [_s, setSortValue] = useAtom(sortValue);
  const sortData = [
    { value: "asc", label: "Price: Low to High" },
    { value: "desc", label: "Price: High to Low" },
  ];
  const handleSortChange = (type: string) => {
    setSortType(type);
    setSortValue(type);
  };

  return (
    <div className="mb-5">
      <div className="hidden md:block">
        <p className="text-md pb-1">Sort by</p>
        {sortData.map((option) => (
          <div key={option.value} className="py-1">
            <a
              onClick={() => handleSortChange(option.value)}
              className={`text-md cursor-pointer hover:underline  ${
                sortType === option.value ? "underline" : ""
              }`}
            >
              {option.label}
            </a>
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
            {sortData.map((item) => (
              <DropdownMenuItem
                key={item.value}
                className={`py-1 capitalize text-md cursor-pointer ${
                  sortType === item.value ? "bg-gray-700 text-white" : ""
                }`}
                onClick={() => handleSortChange(item.value)}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default SortBy;
