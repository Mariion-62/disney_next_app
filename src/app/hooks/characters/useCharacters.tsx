import { useQuery } from "@tanstack/react-query";

const URL = "https://api.disneyapi.dev/character";

export default function useCharacters() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCharacters"],
    queryFn: async () => {
      const result = await fetch(URL);
      if (!result.ok) {
        throw new Error("Unable to fetch data");
      }

      return result.json;
    },
  });
  return {
    characters: data,
    isLoading,
    error,
  };
}
