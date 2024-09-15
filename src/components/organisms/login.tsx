import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useAtom } from "jotai";
import { userToken } from "@/jotai/state";
import useFetchLoginAccount from "@/app/api/hooks/account/useFetchLoginAccount";

interface LogInProps {
  openLogIn: boolean;
  closeLogInDialog: () => void;
}

export default function LogIn({ openLogIn, closeLogInDialog }: LogInProps) {
  const [toggleSeen, setToggleSeen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setUserToken] = useAtom(userToken);

  const handleToggleSeen = () => {
    setToggleSeen(!toggleSeen);
  };

  const isButtonDisabled = userName.trim() === "" || password.trim() === "";

  const { mutate, error, data, isSuccess } = useFetchLoginAccount();

  const handleLogin = () => {
    mutate({ username: userName, password });
  };
  if (isSuccess) {
    setUserToken(data.token);
  }

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
                    <h5 className="text-white text-2xl font-bold">Login</h5>
                    <button onClick={closeLogInDialog}>
                      <Image
                        src={"/assets/auths/cross.svg"}
                        alt="Beatpulse logo"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                  <p className="text-white pt-6 pb-8">
                    Fill in your password for confirm account
                  </p>

                  <div>
                    <label className="block text-md font-normal text-[#8F8F8F]">
                      Username
                    </label>

                    <input
                      type="text"
                      placeholder="shopify@gmail.com"
                      className="mt-1 w-full outline-none rounded-md border-gray-200 shadow-sm text-base font-normal py-3 px-2.5 text-[#94A3B8]"
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
                        className="mt-1 w-full outline-none rounded-md border-gray-200 shadow-sm text-base font-normal py-3 px-2.5 text-[#94A3B8]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className="my-auto text-[#F3F3F3] text-base font-bold w-14"
                        onClick={handleToggleSeen}
                      >
                        {toggleSeen ? "Hide" : "Show"}
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
                    Continue
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
