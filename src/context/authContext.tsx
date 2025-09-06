"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface AuthType {
  author: boolean;
  setAuthor: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthType>({ author: false, setAuthor: () => { } });

export function Context({ children }: { children: ReactNode }) {

  const [author, setAuthor] = useState<boolean>(false);

  useEffect(() => {
    setAuthor(window.localStorage.getItem("author") === "authorized");
  }, [setAuthor]);

  return (
    <AuthContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthContext.Provider>
  );
};
