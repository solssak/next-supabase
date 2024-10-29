"use client"; // Mark this file as a Client Component
import React from "react";
import { createClient } from "@supabase/supabase-js";

const LoginPage = () => {
  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  // Sign-in function
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });

    if (error) {
      console.error("Error during sign-in:", error);
    } else {
      console.log("Sign-in successful:", data);
    }
  };

  return (
    <div>
      <input type='button' value='Login' onClick={signInWithGithub} />
    </div>
  );
};

export default LoginPage;
