import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin, FaUser, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import style from "./Register.module.css";

const Register: React.FC = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("This feature is not implemented yet!");
    // Your form submission logic goes here
  };

  return (
    <>
      <ToastContainer />
      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            <h1>Unlock the Power of Your Data.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.regIcons}>
              <Link
                href="https://www.linkedin.com/company/urubytes"
                target="_blank"
                className="flex items-center justify-center gap-1"
              >
                <FaLinkedin size={22} color="#1b1b1b" />
                <span className="text-[#1b1b1b]">@URUbytes</span>
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div
              className={`w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700 ${style.formBackground}`}
            >
              <div className="p-6 sm:p-8">
                <h1 className="mb-5 text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#038C7F]">
                  Register below
                </h1>
                <form
                  className="space-y-8 md:space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="John Doe"
                        required
                      />
                      <FaUser className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>
                  {/* Similar input fields for email, password, and retype password */}
                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
                  >
                    Create an account
                  </button>
                </form>
                {/* Google sign-up button */}
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                      <p className="text-xs font-light text-gray-700 dark:text-gray-700">
                        OR
                      </p>
                      <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                    </div>
                  </div>
                  <button className="--btn --btn-block ">
                    <FcGoogle style={{ marginRight: 15 }} />{" "}
                    <span className="text-[#038C7F] text-[14px]">
                      Sign up with Google
                    </span>
                  </button>
                  <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                    Have an account?{" "}
                    <Link
                      href="/signin"
                      className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
