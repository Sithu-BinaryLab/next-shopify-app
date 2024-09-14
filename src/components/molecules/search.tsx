"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useAtom } from "jotai";
import { Input } from "@/components/atoms/input";
import { searchInputAtom } from "@/jotai/state";

function Search() {
  const [_s, setSearchInput] = useAtom(searchInputAtom);
  const [tempInput, setTempInput] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempInput(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchInput(tempInput);
    }
  };

  return (
    <div className="relative">
      <Input
        className={`border border-grey-foreground text-white focus:placeholder-white bg-grey rounded-[8px] mr-1 h-[34px] text-md w-[350px] pl-8 transition-all duration-500`}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for products"
        value={tempInput}
      />
      <Image
        src={"/assets/header/search.svg"}
        alt="search logo"
        className="text-grey-foreground absolute right-3 top-3 cursor-pointer lg:block hidden"
        width={12}
        height={12}
      />
    </div>
  );
}

export default Search;
