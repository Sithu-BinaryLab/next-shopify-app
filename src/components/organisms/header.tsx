"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { useAtom } from "jotai";
import { cartAtom } from "@/jotai/state";
import { user } from "@/jotai/state";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/button";
import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import Search from "@/components/molecules/search";
import LanguageDropdown from "@/components/molecules/language";
import LogIn from "@/components/organisms/login";

function Header() {
  const [pathname, setPathname] = useState<string>("");
  const [openLogIn, setOpenLogIn] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [userData, _] = useAtom(user);
  const [cart, _add] = useAtom(cartAtom);

  const translationText = useTranslations();
  const router = useRouter();

  useEffect(() => {
    setPathname(window.location.pathname ?? "");
  }, []);

  const openLogInDialog = () => {
    if (userData.token && userData.token.length !== 0) {
      router.push("/account");
    } else setOpenLogIn(true);
  };

  const handleCart = () => {
    if (userData.token && userData.token.length !== 0) {
      router.push("/cart");
    } else setOpenLogIn(true);
  };

  const closeLogInDialog = () => {
    setOpenLogIn(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="w-full top-0 fixed bg-background z-40 py-[20px]">
      <div className="container flex flex-row items-center justify-between mx-auto px-2 md:px-10">
        <div className="flex flex-row items-center">
          <div className="flex items-center space-x-5">
            <button
              type="button"
              onClick={toggleDrawer}
              className="lg:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Image
                src={"/assets/header/menu.svg"}
                alt="menu icon"
                className="hover:opacity-75 text-surface-foreground"
                width={24}
                height={24}
              />
            </button>
            <Link
              className="text-surface-foreground font-bold pr-6 lg:pr-0"
              href={"/"}
            >
              <div className="flex mr-2 md:mr-10 space-x-4">
                <Image
                  src={"/assets/header/shopify.svg"}
                  alt="shopify logo"
                  className=""
                  width={30}
                  height={20}
                />
                <p className="my-auto text-[20px]">Shopify</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-row lg:block hidden">
            <Link
              className={`${
                pathname === "/search"
                  ? "font-bold text-surface-foreground"
                  : "text-primary-foreground hover:text-surface-foreground"
              } pr-6 mr-3`}
              href={"/search"}
            >
              {translationText("All")}
            </Link>
            <Link
              className={`${
                pathname === "/electronics"
                  ? "font-bold text-surface-foreground"
                  : "text-primary-foreground hover:text-surface-foreground"
              } pr-6 mr-3`}
              href={"/search/electronics"}
            >
              Electronics
            </Link>
            <Link
              className={`${
                pathname === "/jewelery"
                  ? "font-bold text-surface-foreground"
                  : "text-primary-foreground hover:text-surface-foreground"
              } pr-6 mr-3`}
              href={"/search/jewelery"}
            >
              Jewelery
            </Link>
          </div>
          <div className="hidden sm:block">
            {" "}
            <Suspense>
              <Search />
            </Suspense>{" "}
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <div className="lg:block hidden my-auto ml-4">
            <LanguageDropdown
              setIsOpenPopup={setIsOpenPopup}
              isOpenPopup={isOpenPopup}
            />
          </div>
          <Button
            variant="ghost"
            className="mx-1 lg:block hidden mb-2"
            onClick={openLogInDialog}
          >
            {userData.token && userData.token?.length !== 0 ? (
              <Avatar className="w-10 h-10 -mt-2">
                <AvatarImage src={"/assets/avatar.jpg"} />
              </Avatar>
            ) : (
              translationText("Login")
            )}
          </Button>
          <Button
            variant="default"
            className="ml-3 mr-1 font-bold h-9 px-0 w-[70px]"
            size="icon"
            onClick={handleCart}
          >
            {cart.length}
            <Image
              src={"/assets/header/cart.svg"}
              alt={"cart icon"}
              className="ml-[4px] text-surface hover:text-surface-foreground"
              width={24}
              height={24}
            />{" "}
          </Button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-full h-full bg-[#13150D] z-50 shadow-lg p-4">
            <div className="flex items-center space-x-10">
              <Image
                onClick={() => setIsDrawerOpen(false)}
                width={30}
                height={30}
                alt="Cross Icon"
                src={"/assets/auths/cross.svg"}
                className="cursor-pointer"
              />
              <div className="flex space-x-2">
                <Image
                  src={"/assets/header/shopify.svg"}
                  alt="Shopify logo"
                  width={40}
                  height={32}
                />
                <p className="my-auto text-xl text-white">Shopify</p>
              </div>
            </div>

            <div className="flex flex-col mt-7 relative h-screen">
              <div className="block sm:hidden">
                <Suspense>
                  <Search />
                </Suspense>{" "}
              </div>
              <Link
                className={`${
                  pathname === "/"
                    ? "font-normal text-[#E6FB64] text-lg"
                    : "hover:text-surface-foreground text-[#F3F3F3] text-lg font-normal"
                } py-2 mt-3 cursor-pointer`}
                href={"/"}
                onClick={toggleDrawer}
              >
                {translationText("Home")}
              </Link>

              <Link
                className={`${
                  pathname === "/search"
                    ? "font-normal text-[#E6FB64] text-lg"
                    : "hover:text-surface-foreground text-[#F3F3F3] text-lg font-normal"
                } py-2 mt-3 cursor-pointer`}
                href={"/search"}
                onClick={toggleDrawer}
              >
                {translationText("All")}
              </Link>
              <Link
                className={`${
                  pathname === "/search/electronics"
                    ? "font-normal text-[#E6FB64] text-lg"
                    : "hover:text-surface-foreground text-[#F3F3F3] text-lg font-normal"
                } py-2 cursor-pointer`}
                href={"/search/electronics"}
                onClick={toggleDrawer}
              >
                {translationText("Electronics")}
              </Link>
              <Link
                className={`${
                  pathname === "/search/jewelery"
                    ? "font-normal text-[#E6FB64] text-lg"
                    : "hover:text-surface-foreground text-[#F3F3F3] text-lg font-normal"
                } py-2 cursor-pointer`}
                href={"/search/jewelery"}
                onClick={toggleDrawer}
              >
                {translationText("Jewelery")}
              </Link>
              <Button
                variant="ghost"
                className="justify-start flex mt-4 px-0"
                onClick={openLogInDialog}
              >
                {userData.token && userData.token?.length !== 0 ? (
                  <Avatar className="w-10 h-10 -mt-2">
                    <AvatarImage src={"/assets/avatar.jpg"} />
                  </Avatar>
                ) : (
                  translationText("Login")
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <LogIn openLogIn={openLogIn} closeLogInDialog={closeLogInDialog} />
    </header>
  );
}

export default Header;
