import React from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              <span className="text-[#dcd7d7]">Create an</span>{" "}
              <span className="text-[#c451c9]">Account!</span>
            </h1>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-[#dcd7d7] text-sm font-medium mb-2">
                  Username:
                </label>
                <Input
                  id="username"
                  type="text"
                  className="w-full bg-[#81017d80] text-[#dcd7d7] placeholder-[#dcd7d7]/60"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#dcd7d7] text-sm font-medium mb-2">
                  Email Address:
                </label>
                <Input
                  id="email"
                  type="email"
                  className="w-full bg-[#81017d80] text-[#dcd7d7] placeholder-[#dcd7d7]/60"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[#dcd7d7] text-sm font-medium mb-2">
                  Password:
                </label>
                <Input
                  id="password"
                  type="password"
                  className="w-full bg-[#81017d80] text-[#dcd7d7] placeholder-[#dcd7d7]/60"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 text-lg bg-[#D946EF] hover:bg-[#C935DE] transition-colors rounded-md text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;