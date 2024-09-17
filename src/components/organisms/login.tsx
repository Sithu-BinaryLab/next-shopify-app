import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import useFetchLoginAccount from "@/app/api/hooks/account/useFetchLoginAccount";

interface LogInProps {
  openLogIn: boolean;
  closeLogInDialog: () => void;
}

export default function LogIn({ openLogIn, closeLogInDialog }: LogInProps) {
  const translationText = useTranslations();
  const [toggleSeen, setToggleSeen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleToggleSeen = () => {
    setToggleSeen(!toggleSeen);
  };

  const isButtonDisabled = userName.trim() === "" || password.trim() === "";

  const { mutate: accountData, isPending } = useFetchLoginAccount();

  const handleLogin = async () => {
    accountData(
      { username: userName, password },
      {
        onSuccess: () => {
          setErrorMessage("");
          closeLogInDialog();
        },
        onError: (error) => {
          setErrorMessage("Incorrect username and password");
        },
      }
    );
  };

  useEffect(() => {
    setUserName("");
    setPassword("");
    setErrorMessage("");
  }, [openLogIn]);

  return (
    <>
      <Transition appear show={openLogIn}>
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={closeLogInDialog}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-[#232323] p-6 backdrop-blur-2xl">
                  <div className="flex justify-between mt-2">
                    <h5 className="text-white text-2xl font-bold">
                      {translationText("Login")}
                    </h5>
                    <button onClick={closeLogInDialog}>
                      <Image
                        src={"/assets/auths/cross.svg"}
                        alt="Shopify logo"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                  <p className="text-white pt-6 pb-8">
                    {translationText(
                      "Fill in your password for confirm account"
                    )}
                  </p>
                  {errorMessage && (
                    <p className="text-red-400 font-semibold text-sm pb-2">
                      *{translationText(errorMessage)}
                    </p>
                  )}
                  <div>
                    <label className="block text-md font-normal text-[#8F8F8F]">
                      {translationText("Username")}
                    </label>

                    <input
                      type="text"
                      placeholder={translationText("username")}
                      className="mt-1 w-full outline-none rounded-md border-gray-200 shadow-sm text-base font-normal py-3 px-2.5 text-black"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="my-7">
                    <label className="block text-md font-normal text-[#8F8F8F]">
                      Password
                    </label>
                    <div className="flex justify-between space-x-10">
                      <input
                        type={toggleSeen ? "text" : "password"}
                        className="mt-1 w-full outline-none rounded-md border-gray-200 shadow-sm text-base font-normal py-3 px-2.5 text-black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className="my-auto text-[#F3F3F3] text-base font-bold w-20"
                        onClick={handleToggleSeen}
                      >
                        {toggleSeen
                          ? translationText("Hide")
                          : translationText("Show")}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleLogin}
                    className={`${
                      isButtonDisabled
                        ? "bg-[#8F8F8F] cursor-not-allowed"
                        : "bg-[#E6FB64]"
                    } w-full py-3  mb-3 rounded-lg text-center text-[#13150D] text-base font-bold`}
                    disabled={isButtonDisabled}
                  >
                    {isPending ? "..." : translationText("Continue")}
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
