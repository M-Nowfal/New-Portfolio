"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/authContext";
import axios, { AxiosError } from "axios";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

export function VerifyAuthor() {

  const { setAuthor } = useContext(AuthContext);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, { password });
      window.localStorage.setItem("author", "authorized");
      setAuthor(true);
      router.push("/");
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data?.message : String(err);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[90%] max-w-xl bg-orange-500/10 border shadow-lg p-5 md:p-10 rounded-2xl">
        <label htmlFor="password" className="font-bold text-2xl">Author Password</label>
        <Input
          type="password"
          placeholder="Enter Password"
          className="py-6 font-semibold text-lg"
          value={password}
          onChange={handleInputChange}
          required
        />
        {error && <div className="flex items-center gap-3 border border-rose-600 p-3 rounded-xl">
          <AlertCircle className="text-rose-600 size-5" />
          <p className="text-rose-700">{error}</p>
        </div>}
        <Button
          size="lg"
          type="submit"
          className="bg-orange-500 shadow-lg cursor-pointer hover:bg-orange-700"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
