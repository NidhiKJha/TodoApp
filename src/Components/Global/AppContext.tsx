import { createContext } from "react";

interface AppContextProps {
  addTodo: (title: string) => void;
  markComplete: (id: string) => void;
  delTodo: (id: string) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);
