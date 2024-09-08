import React, { useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import InputCheckbox from "../../Components/Checkbox";
import Label from "../../Components/Label";
import Button from "../../Components/Button";
import { Typography } from "@material-tailwind/react";
import { RegisterAPI } from "../../Action/Auth/Register";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Pass, setPass] = useState("");
  const [IsRemember, setIsRemember] = useState(false);

  // utils
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (Name === "") {
      toast.error("Please enter your name");
    } else if (Email === "") {
      toast.error("Please enter your email");
    } else if (Phone === "") {
      toast.error("Please enter your phone number");
    } else {
      setIsLoading(true);
      RegisterAPI(Name, Email, Phone, Pass, IsRemember)
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            swal("Registered", "Our team will contact you soon", "success");
            setIsLoading(false);
            navigate("/");
          } else {
            swal("Failed", result.message, "error");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="bg-[#ffefd5] animatedView">
      <div className="flex items-center">
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-slate-100 h-screen login-form-container bg-white">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <span className="text-orange-500 text-2xl font-bold">
                Foodish
              </span>
            </div>
            <div className="flex justify-center">
              <div className="w-full bg-white rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 m-2 lg:m-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <Label htmlFor="Name" label="Name" />
                      <Input
                        type="text"
                        name="Name"
                        id="Name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required={true}
                      />
                    </div>
                    <div>
                      <Label htmlFor="Email" label="Email" />
                      <Input
                        type="email"
                        name="Email"
                        id="Email"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" label="Phone No" />
                      <Input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" label="Password" />
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="**********"
                        onChange={(e) => setPass(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex justify-start h-5">
                      <InputCheckbox
                        id="terms"
                        onChange={(e) => setIsRemember(e.target.checked)}
                        color="orange"
                        label={
                          <Typography className="flex items-center text-xs">
                            I accept the
                            <span className="text-orange-600 hover:underline text-xs">
                              &nbsp;terms and conditions
                            </span>
                          </Typography>
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      onClick={handleRegister}
                      className="w-full text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      label={
                        isLoading ? "Creating Account..." : "Create an account"
                      }
                    />

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to="/"
                        className="font-medium text-orange-600 hover:underline dark:text-blue-500"
                      >
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-bg-image hidden lg:block bg-[#ffefd5] h-screen w-1/2">
          <img src="/login-bg.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Register;
