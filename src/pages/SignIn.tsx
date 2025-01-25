import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0B1E] flex flex-col items-center justify-center p-4">
      <div className="absolute top-2 right-6 w-24">
        <img
          src="/lovable-uploads/23f4a87b-e26b-4b7e-86a8-5fd4585550ca.png"
          alt="Lookin'good"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full max-w-md space-y-8 text-center mt-20 md:mt-0">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let's Get
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D946EF] animate-pulse">
            Started!
          </h1>
        </div>

        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20 blur-xl rounded-full" />
          <div className="relative">
            <img
              src="/lovable-uploads/6d34fe06-9b60-42bf-8bbd-58f07f9208fc.png"
              alt="Clothes rack"
              className="w-[95%] h-[95%] object-contain mx-auto"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/")}
            className="w-1/2 mx-auto h-14 text-lg bg-[#D946EF] hover:bg-[#C935DE] transition-colors"
          >
            SIGN IN
          </Button>

          <div className="pt-8 text-gray-400 text-sm">
            DIDN'T HAVE ACCOUNT?{" "}
            <button 
              onClick={() => navigate("/signup")}
              className="text-[#D946EF] hover:underline"
            >
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;