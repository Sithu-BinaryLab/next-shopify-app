"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { getLangUrl } from "@/lib/utils";
import useFetchGetInCategories from "@/app/api/hooks/categories/useFetchGetInCategoires";
import { Button } from "@/components/atoms/button";
import { Product } from "@/app/type/product";

interface RelatedProductsProps {
  category?: string;
}
const RelatedProducts = ({ category }: RelatedProductsProps) => {
  const translationText = useTranslations();
  const [currentUrl, setCurrentUrl] = useState<Location | null>(null);
  let currentCategoryLink = "";
  switch (category) {
    case "men's clothing":
      currentCategoryLink = "men's%20clothing";
      break;
    case "women's clothing":
      currentCategoryLink = "women's%20clothing";
      break;
    case "jewelery":
      currentCategoryLink = "jewelery";
      break;
    case "electronics":
      currentCategoryLink = "electronics";
      break;
  }
  const {
    data: products,
    isLoading,
    error,
  } = useFetchGetInCategories(currentCategoryLink, "");

  useEffect(() => {
    setCurrentUrl(window.location);
  }, []);

  const router = useRouter();
  const handleClick = (id: number) => {
    if (id && currentUrl) {
      router.push(getLangUrl(currentUrl, `/product/${id}`));
    }
    return;
  };

  return (
    <div className="my-10">
      <h1 className="text-2xl text-surface-foreground font-bold mb-2 ">
        {translationText("Related Products")}
      </h1>
      <div className="w-full overflow-x-scroll max-w-[500rem] flex gap-x-4 mt-4 hide-scrollbar">
        {!isLoading &&
          products?.map((item: Product) => (
            <div
              key={item.id}
              className="cursor-pointer lg:min-w-[400px] min-w-[300px] relative"
              onClick={() => handleClick(item.id)}
            >
              <div className="flex relative justify-center py-4 h-[220px]  gap-4 w-full aspect-square   bg-stone-50 rounded-lg border hover:border-blue-600 dark:border-neutral-800">
                <Image
                  alt=""
                  src={item.image}
                  width={200}
                  height={500}
                  className="object-contain transition-all ease-in-out hover:scale-105 duration-300"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 py-2 px-4 text-xs font-semibold text-black backdrop-blur-md">
                  <h1 className="text-sm line-clamp-1">{item.title}</h1>
                  <Button className="shadow-sm px-2 rounded-full text-[13px] font-bold">
                    ${item.price}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
