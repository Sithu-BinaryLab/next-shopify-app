"use client";
import { useAtom } from "jotai";
import { cartAtom } from "@/jotai/state";
import { useToast } from "@/app/api/hooks/common/use-toast";
import Header from "@/components/organisms/header";
import { Button } from "@/components/atoms/button";
import CartItem from "@/components/molecules/cartItem";

const Account = () => {
  const [cart, addItemToCart] = useAtom(cartAtom);
  let totalPrice = 0;
  cart.map((item) => (totalPrice += item.price));

  const { toast } = useToast();
  const checkoutClick = () => {
    toast({
      title: "Checkout Successfully!",
      description: new Date().toLocaleString(),
    });
    addItemToCart([]);
  };

  return (
    <main>
      <Header />
      <div className="h-screen container mx-auto pt-20 px-10">
        <div className="flex min-h-screen flex-col items-center container mx-auto px-5 md:px-10">
          <section className="w-full pb-4">
            <div className="">
              <h1 className="text-2xl text-surface-foreground font-bold mb-2 ">
                Cart
              </h1>
              <p className="text-lg text-primary-foreground mb-6">
                Product in your cart all ready
              </p>
              {cart.length === 0 && <p>No Data ....</p>}
              <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="w-full">
                  {cart.map((item, index) => {
                    return <CartItem key={index} data={item} />;
                  })}
                </div>

                <div className="bg-background-grey lg:rounded-[8px] py-5 px-4 lg:min-w-[380px]">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-base font-solid">Total summarize</h3>
                  </div>
                  <hr className="my-[15px] border-grey" />
                  <input
                    type="text"
                    className="w-full rounded-sm px-3 my-2 text-md text-surface-foreground h-[42px]"
                    placeholder="Apply coupon code"
                  />
                  <hr className="mt-3 mb-4 border-grey" />
                  <div className="flex justify-between items-center">
                    <p className="text-md text-white">Total</p>
                    <p className="text-xl text-white">$ {totalPrice}</p>
                  </div>
                  <hr className="my-4 border-grey" />
                  <p className="text-md text-surface mb-2">
                    Date: {new Date().toDateString()}
                  </p>
                  <p className="text-md text-surface mb-2">
                    Reference code : ASVETHW20241244
                  </p>
                  <Button
                    variant="default"
                    size={"lg"}
                    className="my-2 w-full font-solid"
                    role="link"
                    onClick={checkoutClick}
                    disabled={!cart.length}
                  >
                    Check out
                  </Button>
                  <p className="text-xs text-surface text-center mt-2">
                    By clicking the button you accept the product(s) License
                    Agreement(s)
                    <br />
                    Please read our Refund Policy
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Account;
