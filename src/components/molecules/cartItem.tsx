"use client";
import Image from "next/image";
import { useAtom } from "jotai";
import { cartAtom } from "@/jotai/state";
import { X, EllipsisVertical } from "lucide-react";
import { Card, CardContent } from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";

interface CartItemProps {
  data: {
    id: number;
    title: string;
    image: string;
    count: number;
    price: number;
  };
}

function CartItem({ data: { id, count, image, price, title } }: CartItemProps) {
  const [cart, addItemToCart] = useAtom(cartAtom);

  const removeItem = () => {
    const filteredCartItems = cart.filter((item) => item.id != id);
    addItemToCart([...filteredCartItems]);
  };

  return (
    <Card className="border-0 p-0 bg-primary flex justify-between hover:bg-background-grey rounded-[8px]">
      <CardContent className="w-full flex flex-row  items-center justify-between group px-0 py-2 my-1">
        <div className="w-full pl-2 md:pl-0">
          <div className="flex flex-row items-center pl-[5px] relative w-full">
            <Image
              src={image}
              alt="Product"
              className="mr-5 relative group-hover:opacity-50"
              width={60}
              height={60}
            />
            <div className="min-w-36">
              <p className="text-md line-clamp-3 hover:underline cursor-pointer mb-[5px]">
                {title}
              </p>
            </div>
          </div>
          <div className="md:hidden flex justify-between pt-2"></div>
        </div>
        <div className="hidden md:flex ">
          <div className="text-left pl-10 lg:min-w-[250px] md:min-w-[200px] hidden md:block">
            <h3 className=" cursor-pointer mb-[5px]">{count}</h3>
          </div>

          <p className="text-secondary lg:min-w-[100px] md:min-w-[80px] text-right">
            $ {price}
          </p>
          <div className="flex items-center min-w-[100px] justify-end ">
            <Button variant="ghost" size="icon" onClick={removeItem}>
              <X className="h-6 w-6 text-surface hover:text-surface-foreground" />
            </Button>
          </div>
        </div>
      </CardContent>
      <Button variant="ghost" size="icon" className="md:hidden">
        <EllipsisVertical className="h-[20px] w-[20px] hover:text-surface text-surface-foreground" />
      </Button>
    </Card>
  );
}

export default CartItem;
