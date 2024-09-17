import React from "react";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { LoginResponse } from "@/app/type/account";

export const searchInputAtom = atom<string>("");
export const sortValue = atom<string>("");
export const cartAtom = atomWithStorage<any[]>("cart", []);
export const user = atomWithStorage<LoginResponse>("user", {
  id: null,
  token: null,
});
