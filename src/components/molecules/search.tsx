"use client";
import Image from "next/image";
import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import { Input } from "@/components/atoms/input";
import { searchInputAtom } from "@/jotai/state";

function Search() {
  const [_s, setSearchInput] = useAtom(searchInputAtom);
  const [tempInput, setTempInput] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const translationText = useTranslations();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempInput(event.target.value);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (tempInput) {
      params.set("q", tempInput);
    } else {
      params.delete("q");
    }
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchInput(tempInput);
      handleSearch();
    }
  };

  useEffect(() => {
    const initialSearch = searchParams.get("q");
    if (initialSearch) {
      setTempInput(initialSearch);
      setSearchInput(initialSearch);
    }
  }, [searchParams, setSearchInput]);

  return (
    <div className="relative">
      <Input
        className={`border border-grey-foreground text-white focus:placeholder-white bg-grey rounded-[8px] mr-1 h-[34px] text-md w-[350px] pl-8 transition-all duration-500`}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder={translationText("Search for products")}
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
