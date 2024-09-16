import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const searchInputAtom = atom<string>("");
export const sortValue = atom<string>("");
export const cartAtom = atomWithStorage<any[]>("cart", []);
export const userToken = atomWithStorage<string>("shopify-user", "");
