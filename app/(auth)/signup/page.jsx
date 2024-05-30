"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { updateRegistrationData } from "../../../reducer/action";
// import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin, FaUser, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import style from "./Register.module.css";

const Register = () => {
  // const dispatch = useDispatch();
  // const router = useRouter();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   retypePassword: "",
  //   agreeTerms: false,
  // });
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setIsPasswordVisible(!isPasswordVisible);
  // };

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.retypePassword) {
  //     toast.error("Passwords do not match. Please try again");
  //     return;
  //   }

  //   dispatch(
  //     updateRegistrationData({
  //       name: formData.name,
  //       email: formData.email,
  //       password: formData.password,
  //       agreeTerms: formData.agreeTerms,
  //     })
  //   );

  //   router.push("/survey");
  // };

  // const handleGoogleSignUp = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     await axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${response.access_token}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         const profileData = response.data;
  //         dispatch(
  //           updateRegistrationData({
  //             name: profileData.name,
  //             email: profileData.email,
  //             password: `${profileData.given_name} ${profileData.sub}`,
  //             agreeTerms: true,
  //           })
  //         );

  //         router.push("/survey");
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching Google profile:", error);
  //       });
  //   },
  //   onError: (error) => {
  //     console.log("Google error:", error);
  //   },
  // });

  return (
    <>
      <ToastContainer />
      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            {/* Uncomment and provide the correct logo path if needed */}
            {/* <Image src="/logo.png" alt="logo" className={style.regLogo} width={100} height={50} /> */}
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
              className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700 ${style.formBackground}`}
            >
              <div className="p-6 sm:p-8">
                <h1 className="mb-5 text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#038C7F]">
                  Register below
                </h1>
                <form
                  className="space-y-8 md:space-y-4"
                  // onSubmit={handleSubmit}
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
                        // value={formData.name}
                        // onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                        required
                      />
                      <FaUser className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>
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
                        name="email"
                        id="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="johndoe@gmail.com"
                        required
                      />
                      <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        // type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*********"
                        required
                      />
                      <button
                        type="button"
                        // onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {/* {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />} */}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="retypePassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Retype Password
                    </label>
                    <div className="relative">
                      <input
                        // type={isPasswordVisible ? "text" : "password"}
                        name="retypePassword"
                        id="retypePassword"
                        // value={formData.retypePassword}
                        // onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="*********"
                        required
                      />
                      <button
                        type="button"
                        // onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {/* {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />} */}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        name="agreeTerms"
                        // checked={formData.agreeTerms}
                        // onChange={handleChange}
                        className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-700 dark:text-gray-700"
                      >
                        I agree to all the{" "}
                        <a
                          className="font-medium text-primary-600 text-blue-500 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms, Privacy Policy and Fees.
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create an account
                  </button>
                </form>
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
                  <button
                    className="--btn --btn-block"
                    // onClick={() => handleGoogleSignUp()}
                  >
                    <FcGoogle style={{ marginRight: 15 }} /> Continue with
                    Google
                  </button>
                  <p className="text-sm font-light text-gray-900 dark:text-gray-900">
                    Have an account?{" "}
                    <Link
                      href="/"
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
