import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { LoginResponse } from "@/app/type/account";
import { languageList } from "@/lib/constants";

export const searchInputAtom = atom<string>("");
export const sortValue = atom<string>("");
export const cartAtom = atomWithStorage<any[]>("cart", []);
export const user = atomWithStorage<LoginResponse>("user", {
  id: null,
  token: null,
});
export const activeLanguagAtom = atomWithStorage("language", languageList[0]);
