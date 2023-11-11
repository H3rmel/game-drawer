import { games } from "@/constants/games.json";

export function returnGame() {
 return Math.floor(Math.random() * games.length);
}