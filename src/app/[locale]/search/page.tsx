"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { searchInputAtom } from "@/jotai/state";
import { useTranslations } from "next-intl";
import { getLangUrl } from "@/lib/utils";
import { useFetchAllProduct } from "@/app/api/hooks/product/useFetchAllProduct";
import Header from "@/components/organisms/header";
import SortBy from "@/components/organisms/sortby";
import { Button } from "@/components/atoms/button";
import Categories from "@/components/organisms/categories";
import Loading from "@/components/organisms/loading";
import { Product } from "@/app/type/product";

const AllCategories = () => {
  const router = useRouter();
  const translationText = useTranslations();
  const [currentUrl, setCurrentUrl] = useState<Location | null>(null);
  const [sortType, setSortType] = useState<string>("");
  const { data: allProduct, isLoading } = useFetchAllProduct(sortType);

  const [searchValue] = useAtom(searchInputAtom);
  const filteredProducts = searchValue
    ? allProduct?.filter((item: Product) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : allProduct;

  useEffect(() => {
    setCurrentUrl(window.location);
  }, []);

  const handleClick = (id: number) => {
    if (id && currentUrl) {
      router.push(getLangUrl(currentUrl, `/product/${id}`));
    }
    return;
  };

  return (
    <main>
      <Header />
      <div className="flex flex-wrap md:flex-nowrap h-screen container mx-auto pt-20 px-10">
        <div className="flex-none order-1 w-[80vw] md:w-40 h-auto pl-5">
          <Categories />
        </div>
        <div className="grow order-3 md:order-2 px-5">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts && filteredProducts?.length > 0 ? (
                filteredProducts.map((item: Product, index: number) => (
                  <div
                    key={index}
                    className="cursor-pointer relative p-4 bg-stone-50 border rounded-lg"
                  >
                    <Image
                      alt={item.title || "Product image"}
                      src={item.image}
                      width={350}
                      height={20}
                      className="transition-all ease-in-out hover:scale-105 duration-300"
                      onClick={() => handleClick(item.id)}
                      priority={index < 3}
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 py-2 px-4 text-xs font-semibold text-black backdrop-blur-md">
                      <h1 className="text-sm line-clamp-1">{item.title}</h1>
                      <Button className="shadow-sm px-2 rounded-full text-[13px] font-bold">
                        ${item.price}
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="w-full flex items-center justify-center">
                  {translationText("No products found")}
                </p>
              )}
            </div>
          )}
        </div>
        <div className="flex-none order-2 md:order-3 w-[80vw] md:w-40 h-auto pl-5 md:pl-2">
          <SortBy sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </main>
  );
};

export default AllCategories;
