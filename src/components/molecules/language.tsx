"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { languageList } from "@/lib/constants";
import { useLanguage } from "@/app/api/hooks/common/useLanguage";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Button } from "@/components/atoms/button";

interface Language {
  name: string;
  short: string;
}

interface languageDropDownProps {
  isOpenPopup: boolean;
  setIsOpenPopup: (isOpenPopup: boolean) => void;
}

function LanguageDropdown({
  isOpenPopup,
  setIsOpenPopup,
}: languageDropDownProps) {
  const { language, changeLanguage } = useLanguage();
  const [chosenLanguage, setChosenLanguage] = useState<Language>(language);
  const [isOpenOptionBox, setIsOpenOptionBox] = useState(false);

  const t = useTranslations();

  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleSelectLanguage = (language: Language) => {
    setChosenLanguage(language);
  };

  const handleSaveChanges = () => {
    changeLanguage(chosenLanguage);
    setIsOpenPopup(false);
  };

  useEffect(() => {
    setChosenLanguage(language);
  }, [language]);

  return (
    <Popover className="flex mr-4">
      <PopoverButton
        onClick={handleOpenPopup}
        className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <div className="flex items-center gap-x-3">
          <Image
            src={"/assets/world.svg"}
            alt="Beatpulse logo"
            width={20}
            height={20}
          />
          <span className="text-base font-thin text-white">
            {language.short}
          </span>
        </div>
      </PopoverButton>
      <Transition
        appear
        show={isOpenPopup}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          anchor="bottom"
          className="divide-y z-40 md:w-1/4 w-3/4  mt-5 divide-white/5 rounded-xl bg-black text-sm/6 [--anchor-gap:var(--spacing-5)]"
        >
          <div className=" hidden md:flex p-4 flex flex-col gap-y-4">
            <div className="block rounded-lg transition hover:bg-white/5">
              <p className="font-semibold text-lg text-white">
                {t("Set language")}
              </p>
              <p className="text-white/80 text-md ">
                {t("You can update the setting any time")}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-white/80 text-md ">{t("Language")}</span>
              <div
                onClick={() => setIsOpenOptionBox(!isOpenOptionBox)}
                className="cursor-pointer rounded-md flex items-center justify-between bg-background text-white text-base px-3 py-2"
              >
                <span>{language.name}</span>
                <span>
                  <Image
                    src={"/assets/down-arrow.svg"}
                    alt="Beatpulse logo"
                    width={15}
                    height={15}
                  />
                </span>
              </div>
              {isOpenOptionBox && (
                <div className="rounded-md bg-background text-md text-white">
                  {languageList.map((lan, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectLanguage(lan)}
                      className={`flex gap-x-3 cursor-pointer p-3 hover:bg-white hover:border-b hover:border-t hover:text-background items-center ${
                        lan.name === chosenLanguage.name
                          ? "bg-white text-black"
                          : ""
                      }`}
                    >
                      <span>
                        <Image
                          src={"/assets/tick.svg"}
                          alt="Beatpulse logo"
                          width={12}
                          height={12}
                          className="text-white"
                        />
                      </span>
                      <span>{lan.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <Button
                variant="default"
                className="font-bold py-5 w-full text-black text-base"
                onClick={handleSaveChanges}
              >
                {t("Save")}
              </Button>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

export default LanguageDropdown;
