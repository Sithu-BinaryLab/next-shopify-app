"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { user, cartAtom } from "@/jotai/state";
import { Edit } from "lucide-react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { getLangUrl } from "@/lib/utils";
import useFetchAccount from "@/app/api/hooks/account/useFetchAccount";
import { Avatar, AvatarImage } from "@/components/atoms/avatar";
import Header from "@/components/organisms/header";

const Account = () => {
  const router = useRouter();
  const translationText = useTranslations();
  const [currentUrl, setCurrentUrl] = useState<Location | null>(null);
  const [_user, SetUser] = useAtom(user);
  const [_, setCart] = useAtom(cartAtom);
  const {
    data: account,
    error,
    isLoading,
  } = useFetchAccount(_user.id ? _user.id : 0);

  useEffect(() => {
    setCurrentUrl(window.location);
  }, []);

  const handleLogout = () => {
    if (_user.id || _user.token) {
      SetUser({ id: null, token: null });
      setCart([]);
    }
    Cookies.remove("auth_token");
    if (currentUrl) return router.push(getLangUrl(currentUrl, `/`));
  };

  const classStyle =
    "w-[100px] underline decoration-2 capitalize underline-offset-8";

  return (
    <main>
      <Header />
      <div className="h-screen container mx-auto pt-20 px-10">
        <div className="px-5 mt-10 h-screen">
          <h1 className="text-xl text-surface-foreground font-bold">
            {translationText("My Account")}
          </h1>
          <span className="relative flex justify-center my-5">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            <span className="relative z-10 bg-white px-6"></span>
          </span>
          <p className="">{translationText("Personal Information")}</p>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="loader mt-40"></div>
            </div>
          ) : (
            <div>
              <div className="flex my-10 space-x-10 justify-between">
                <div className="flex space-x-5">
                  <Avatar className="w-14 h-14 mr-3">
                    <AvatarImage src={"/assets/avatar.jpg"} />
                  </Avatar>
                  <p className="my-auto">{account?.username}</p>
                </div>

                <Edit className="h-4 w-4 my-auto text-surface hover:text-surface-foreground mt-2" />
              </div>
              <div className="flex md:flex-row flex-col">
                <p className={classStyle}>{translationText("Email")}</p> -{" "}
                <p className="md:pl-4">{account?.email}</p>
              </div>
              <div className="flex md:flex-row flex-col my-5">
                <p className={classStyle}>{translationText("Phone")}</p> -{" "}
                <p className="md:pl-4">{account?.phone}</p>
              </div>
              <div className="flex md:flex-row flex-col my-5">
                <p className={classStyle}>{translationText("Address")}</p> -{" "}
                <p className="md:pl-4">{account?.address?.city}</p>
              </div>
              <div
                className="mt-10 border border-cyan-300 px-10 py-2 rounded-lg w-60 text-center hover:bg-stone-300 cursor-pointer"
                onClick={handleLogout}
              >
                {translationText("Logout")}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Account;
