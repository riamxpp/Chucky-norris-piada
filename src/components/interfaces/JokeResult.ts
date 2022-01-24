import { JokeRequest } from "./JokeRequest";

export interface JokeResults {
  date: JokeRequest[];
  error: boolean;
  loading: boolean;
  updateJoke: () => void;
}
