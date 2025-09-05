"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Author() {

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {

  };

  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[90%] max-w-xl bg-orange-500/10 border shadow-lg p-5 md:p-10 rounded-2xl">
        <label htmlFor="password" className="font-bold text-2xl">Author Password</label>
        <Input 
          type="password"
          placeholder="Enter Password"
          className="py-6 font-semibold text-lg"
          required
        />
        <Button 
          size="lg"
          type="submit"
          className="bg-orange-500 shadow-lg cursor-pointer hover:bg-orange-700"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};