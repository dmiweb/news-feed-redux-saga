import { TNews } from "../models";

export const fetchData = async (url: string, signal: AbortSignal): Promise<TNews[]> => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};