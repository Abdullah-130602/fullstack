import React from "react";
import { Link } from "react-router-dom";
import Label from "../../Components/Label";
import Input from "../../Components/Input";
import InputCheckbox from "../../Components/Checkbox";
import { Typography } from "@material-tailwind/react";
import Button from "../../Components/Button";

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center h-screen animatedView relative">
      <div className="login-clip-path absolute bottom-0 w-full h-[500px]" />
      <div className="login-clip-path2 absolute top-0 w-full h-[500px]" />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-center">
          <div className="flex items-center">
            <img src="/logo.png" className="w-20" alt="" />
            <p className="text-orange-500 text-2xl font-bold">Foodish</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full bg-white rounded-3xl shadow dark:border m-2 lg:m-0 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <Label htmlFor="email" label="Your email" />
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" label="Password" />
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center h-5">
                    <InputCheckbox
                      id="remember"
                      // onChange={(e) => setIsRemember(e.target.checked)}
                      color="orange"
                      label={
                        <Typography className="text-xs">Remember me</Typography>
                      }
                      required
                    />
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-orange-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="w-full text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  label="Sign in"
                />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-orange-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
