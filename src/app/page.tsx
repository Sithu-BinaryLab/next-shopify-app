"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFetchAllProduct } from "@/app/api/hooks/product/useFetchAllProduct";
import { useFetchJeweleryList } from "@/app/api/hooks/categories/useFetchJeweleryList";
import { useFetchElectronicList } from "@/app/api/hooks/categories/useFetchElectronicList";
import { useFetchMenClothingList } from "@/app/api/hooks/categories/useFetchMenClothingList";
import { Button } from "@/components/atoms/button";
import Header from "@/components/organisms/header";
import { Product } from "@/app/type/product";

export default function Home() {
  const { data: allProduct, isLoading: allProductLoading } =
    useFetchAllProduct("");
  const { data: jeweleryList, isLoading: jeweleryListLoading } =
    useFetchJeweleryList();
  const { data: electronicList, isLoading: electronicListLoading } =
    useFetchElectronicList();
  const { data: menClothingList, isLoading: menClothingListLoading } =
    useFetchMenClothingList();

  const loading =
    allProductLoading ||
    jeweleryListLoading ||
    electronicListLoading ||
    menClothingListLoading;

  const router = useRouter();
  const handleClick = (id: number) => {
    if (id) {
      router.push(`/product/${id}`);
    }
    return;
  };

  const MenClothing = () => (
    <div className="lg:w-3/5 py-4 lg:py-0 w-full cursor-pointer flex justify-center bg-stone-50 rounded-lg border hover:border-blue-600 dark:border-neutral-800">
      {menClothingList?.map((item: Product) => (
        <div
          key={item.id}
          className="flex w-full justify-center relative"
          onClick={() => handleClick(item.id)}
        >
          <Image
            alt="Men Clothing"
            src={item.image}
            width={350}
            height={20}
            className="object-contain w-[200px] lg:w-[250px] transition-all ease-in-out hover:scale-105 duration-300"
            onClick={() => handleClick(item.id)}
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 py-2 px-4 text-xs font-semibold text-black backdrop-blur-md">
            <h1 className="text-sm line-clamp-1">{item.title}</h1>
            <Button className="shadow-sm px-2 rounded-full text-[13px] font-bold">
              ${item.price}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const EJeweleryList = () => (
    <div className="lg:w-2/5 w-full flex flex-col gap-y-4">
      <div className="cursor-pointer py-4 flex justify-center bg-stone-50 rounded-lg border hover:border-blue-600 dark:border-neutral-800">
        {electronicList?.map((item: Product) => (
          <div
            key={item.id}
            className="flex w-full justify-center relative"
            onClick={() => handleClick(item.id)}
          >
            <Image
              alt="Electronic"
              src={item.image}
              width={200}
              height={250}
              className="transition-all ease-in-out hover:scale-105 duration-300"
              onClick={() => handleClick(item.id)}
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 py-2 px-4 text-xs font-semibold text-black backdrop-blur-md">
              <h1 className="text-sm line-clamp-1">{item.title}</h1>
              <Button className="shadow-sm px-2 rounded-full text-[13px] font-bold">
                ${item.price}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cursor-pointer py-4 flex justify-center bg-stone-50 rounded-lg border hover:border-blue-600 dark:border-neutral-800">
        {jeweleryList?.map((item: Product) => (
          <div
            key={item.id}
            className="flex w-full justify-center relative"
            onClick={() => handleClick(item.id)}
          >
            <Image
              alt="Jewelery"
              src={item.image}
              width={150}
              height={250}
              className="transition-all ease-in-out hover:scale-105 duration-300"
            />
            <div className="absolute bottom-4 mx-2 flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 py-2 px-4 text-xs font-semibold text-black backdrop-blur-md">
              <h1 className="text-sm line-clamp-1">{item.title}</h1>
              <Button className="shadow-sm px-2 rounded-full text-[13px] font-bold">
                ${item.price}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AllProductList = () => (
    <div className="w-full overflow-x-scroll max-w-[500rem] flex gap-x-4 mt-4">
      {allProduct?.map((item: Product) => (
        <div
          key={item.id}
          className="cursor-pointer lg:min-w-[400px] min-w-[300px] relative"
          onClick={() => handleClick(item.id)}
        >
          <div className="flex relative justify-center py-4 h-[220px] animate-carousel gap-4 w-full aspect-square justify-center bg-stone-50 rounded-lg border hover:border-blue-600 dark:border-neutral-800">
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
  );

  return (
    <main>
      <Header />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="loader"></div>
        </div>
      )}
      <div className="mt-20 overflow-hidden gap-y-4 bg-neutral-900 flex flex-col items-center container mx-auto px-4">
        <div className="flex w-full flex-col gap-y-4 lg:flex-row gap-x-4 px-8">
          {menClothingList && <MenClothing />}
          {jeweleryList && <EJeweleryList />}
        </div>
      </div>
      {allProduct && <AllProductList />}
    </main>
  );
}
