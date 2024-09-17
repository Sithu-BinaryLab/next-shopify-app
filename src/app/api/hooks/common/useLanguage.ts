import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { activeLanguagAtom } from "@/jotai/state";
import { languageList } from "@/lib/constants";

export function useLanguage() {
  const router = useRouter();
  const [language, setLanguage] = useAtom(activeLanguagAtom);

  const changeLanguage = (newLanguage: any) => {
    setLanguage(newLanguage);

    const pathname = window.location.pathname;
    const filteredPath = pathname.replace(/^\/en/, "").replace(/^\/mm/, "");

    router.replace(`/${newLanguage.short.toLowerCase()}${filteredPath}`);
  };

  useEffect(() => {
    const pathLocale = window.location.pathname.split("/")[1];
    const matchedLanguage = languageList.find(
      (l) => l.short.toLowerCase() === pathLocale
    );
    if (matchedLanguage && matchedLanguage.short !== language.short) {
      setLanguage(matchedLanguage);
    }
  }, [language, setLanguage]);

  return { language, changeLanguage };
}
