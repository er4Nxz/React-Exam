import type { Dispatch, SetStateAction } from "react";

export type UserContextType = {
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
};
