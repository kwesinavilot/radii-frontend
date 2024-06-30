"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import style from "./ForgotPassword.module.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://your-backend-url.com/api/forgot-password", {
        email,
      });

      toast.success("Password reset email sent");
    } catch (error) {
      toast.error("Failed to send password reset email");
    }
  };

  return (
    <>
      <ToastContainer />

      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            {/* <Image
              src="/u-logo.png"
              alt="logo"
              className={style.regLogo}
              width={30}
              height={30}
            /> */}
            <h1>Forgot Password?</h1>
            <p>Let &apos;s help you reset your password!</p>
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
              className={`w-full rounded-lg shadow sm:max-w-md xl:p-0 bg-white ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-blue-800">
                    Reset Password
                  </h1>
                  <p className="text-sm mt-2 dark:text-grey-800">
                    Enter your email below! A mail will be sent to you to help
                    you reset your password.
                  </p>
                </div>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-[#33a79c] text-gray-900 sm:text-sm rounded-lg focus:ring-[#33a79c] focus:border-[#33a79c] block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#33a79c]"
                        placeholder="johndoe@gmail.com"
                        required
                      />
                      <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-[#1e5852] font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
                  >
                    Reset
                  </button>
                  <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                    Don’t Have an Account?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-orange-600 hover:underline dark:text-orange-500"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
