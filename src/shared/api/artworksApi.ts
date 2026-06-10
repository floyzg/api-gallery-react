import { API_URL } from "./api";
import type { Artwork } from "../../entities/Artwork";

export const artworksMock: Artwork[] = [
  {
    id: 1,
    title: "Cascate di Tivoli",
    year: 1761,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Portrait of Vincent van Gogh",
    year: 1886,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Unequal Marriage",
    year: 1862,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "The Happy Violinist",
    year: 1624,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "The Arcadian",
    year: 1834,
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 6,
    title: "Golfo di Napoli",
    year: 1845,
    imageUrl: "https://placehold.co/600x400",
  },
];

export const getApiSchema = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch api schema");
  }

  return response.json();
};
  