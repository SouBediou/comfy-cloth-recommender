import React from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";

const SignIn = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#dcd7d7]">
              Welcome Back!
            </h1>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-[#dcd7d7] text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#dcd7d7]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    className="w-full pl-10 bg-[#3d3851] text-[#dcd7d7] placeholder-[#dcd7d7]/60 border-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-[#dcd7d7] text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#dcd7d7]" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="w-full pl-10 bg-[#3d3851] text-[#dcd7d7] placeholder-[#dcd7d7]/60 border-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 text-lg bg-[#81017d] hover:bg-[#81017d]/90 transition-colors rounded-md text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;