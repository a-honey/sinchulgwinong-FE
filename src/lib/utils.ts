import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate(date: Date | string, joiner: string = ".") {
  const typedDate = new Date(date);

  const year = typedDate.getFullYear();
  const month = typedDate.getMonth() + 1;
  const day = typedDate.getDate();

  return `${year}${joiner}${month}${joiner}${day}`;
}

export function getIsLogin() {
  return true;
}
