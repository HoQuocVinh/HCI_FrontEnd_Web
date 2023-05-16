import AuthFormField from "components/form/AuthFormField";
import React, { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <div className="flex flex-col items-start font-inter">
      <h1 className="text-6xl font-semibold">Sign up now</h1>
      <p className="mt-3 text-lg text-black text-opacity-50">
        Sign up now! Please enter your details.
      </p>
      <div className="mt-8">
        <AuthFormField
          signin
          formPropmt="Don't have and account?"
          btName="Sign up"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
