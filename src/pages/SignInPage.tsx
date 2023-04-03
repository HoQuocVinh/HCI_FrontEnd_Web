import AuthFormField from "components/form/AuthFormField";
import { useEffect } from "react";

const SignInPage = () => {
  useEffect(() => {
    document.title = "Sign in";
    document.documentElement.style.removeProperty("background");
  }, []);

  return (
    <div className="flex flex-col items-start font-inter">
      <h1 className="text-6xl font-semibold">Welcome back</h1>
      <p className="mt-3 text-lg text-black text-opacity-50">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-8">
        <AuthFormField
          signup
          forgot
          formPropmt="Don't have and account?"
          btName="Sign in"
        />
      </div>
    </div>
  );
};

export default SignInPage;
