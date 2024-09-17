import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLangUrl = (url: Window["location"], slug: string) => {
  const pathname = url.pathname;
  const lang = pathname.split("/")[1];

  return `/${lang}${slug}`;
};
