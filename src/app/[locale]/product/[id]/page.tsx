"use client";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useAtom } from "jotai";
import { cartAtom } from "@/jotai/state";
import { useTranslations } from "next-intl";
import useFetchProductById from "@/app/api/hooks/product/useFetchProductById";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";
import Header from "@/components/organisms/header";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import SingleLoading from "@/components/organisms/single-loading";
import RelatedProducts from "@/components/molecules/related-products";

const ProductById = () => {
  const params = useParams();
  const id = params.id;
  const translationText = useTranslations();
  const {
    data: productInfo,
    error,
    isLoading,
  } = useFetchProductById(Number(id));

  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount((count) => count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) setCount((count) => count - 1);
  };

  const [cart, addItemToCart] = useAtom(cartAtom);
  const addToCart = () => {
    const isProductExistInCart = cart.filter(
      (item) => item.id == productInfo?.id
    )[0];
    if (isProductExistInCart) {
      const updatedCart = cart.map((item) => {
        if (item.id == productInfo?.id) {
          item = { ...item, count: item.count + count };
        }
        return item;
      });
      addItemToCart([...updatedCart]);
    } else
      addItemToCart([
        ...cart,
        {
          id: productInfo?.id,
          title: productInfo?.title,
          image: productInfo?.image,
          count,
          price: productInfo?.price ? productInfo?.price : 1 * count,
        },
      ]);
  };

  let currentCategoryLink = "";
  if (productInfo?.category) {
    switch (productInfo.category) {
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
  }

  return (
    <main>
      <Header />
      <div className="container mx-auto pt-20 pb-10  px-5 sm:px-10">
        {!isLoading && (
          <Breadcrumb className="mt-4">
            <BreadcrumbList>
              <BreadcrumbItem className="text-md">
                <BreadcrumbLink
                  href="/search"
                  className=" hover:text-white hover:underline"
                >
                  {translationText("All Products")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-md capitalize">
                <BreadcrumbLink
                  href={`/search/${currentCategoryLink}`}
                  className=" hover:text-white hover:underline"
                >
                  {productInfo?.category}{" "}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-md">
                <BreadcrumbPage className=" hover:text-white hover:underline">
                  {productInfo?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <div className="mt-5 grid grid-cols-1 xl:grid-cols-3">
          <div className="w-full ">
            {productInfo?.image && (
              <div className="h-full flex items-center justify-center cursor-pointer relative w-full xl:w-max py-4 px-10 bg-stone-50 border rounded-lg">
                <div className="relative w-[250px] h-[335px]">
                  {isLoading ? (
                    <SingleLoading />
                  ) : (
                    <Image
                      alt="All Product"
                      src={productInfo.image}
                      fill
                      className="absolute object-contain transition-all ease-in-out hover:scale-105 duration-300"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-full mt-10 col-span-2 ">
            <h3 className="hover:text-white pb-2">{productInfo?.title}</h3>
            <Button>$ {productInfo?.price}</Button>
            <div className="pt-4 hover:text-white">
              {translationText("In Stock")}
              <Badge
                variant={"outline"}
                className="ms-2 text-sm border border-secondary text-secondary"
              >
                {productInfo?.rating.count}
              </Badge>
            </div>
            <div className="pt-4 hover:text-white capitalize">
              {translationText("Categories")}
              <Badge className="ms-2 bg-secondary hover:bg-secondary text-sm text-black">
                {productInfo?.category}
              </Badge>
            </div>
            <div className="flex items-center gap-4 mt-4 cursor-pointer select-none">
              <div
                className="border rounded-full w-10 h-10 flex items-center justify-center text-xl text-white"
                onClick={decreaseCount}
              >
                -
              </div>
              <div className="w-10 h-10   flex items-center justify-center rounded-lg text-black bg-stone-50 text-base">
                {count}
              </div>
              <div
                className="border rounded-full w-10 h-10 flex items-center justify-center text-xl  text-white"
                onClick={increaseCount}
              >
                +
              </div>
            </div>
            <span className="relative flex justify-center my-10">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            </span>
            <p className="hover:text-white pb-4">{productInfo?.description}.</p>
            <Button
              onClick={addToCart}
              variant="default"
              size={"lg"}
              className="my-2 font-solid w-1/3"
              role="link"
            >
              {translationText("Add To Cart")}
            </Button>
          </div>
        </div>
        {!isLoading && <RelatedProducts category={productInfo?.category} />}
      </div>
    </main>
  );
};

export default ProductById;
