// "use client";
// import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import style from "./Login.module.css";
// import { FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { IoIosEyeOff, IoMdEye } from "react-icons/io";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { setToken } from "@/app/store/authSlice";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/store/store";

// interface FormData {
//   email: string;
//   password: string;
// }

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//   });
//   const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     setFormData({
//       email: "",
//       password: "",
//     });
//     setIsPasswordVisible(false);
//   }, []);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://backend.getradii.com/auth/login/",
//         formData
//         // generateAxiosConfig()
//       );

//       dispatch(setToken(response.data.token));
//       console.log("Login successful:", response.data);
//       toast.success(response.data.message || "Login successful");
//       router.push("/");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error message:", error.response?.data);
//         toast.error(error.response?.data || "Login failed");
//       } else {
//         console.error("Unknown error occurred:", error);
//         toast.error("Unknown error occurred");
//       }
//     }
//   };

//   return (
//     <>
//       <ToastContainer />

//       <section className={style.reg}>
//         <div className={style.regWrapper}>
//           <div className={style.regContent}>
//             <h1>Log in to start your search!</h1>
//             <p>Welcome back! Log in to pick up where you left off</p>
//             <div className={style.regIcons}>
//               <Link
//                 href="https://www.linkedin.com/company/urubytes"
//                 target="_blank"
//               >
//                 <div className="flex items-center justify-center gap-1">
//                   <FaLinkedin size={22} color="#1b1b1b" />
//                   <span className="text-[#1b1b1b]">@URUbytes</span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
//             <div
//               className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
//             >
//               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                 <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-[#038C7F] ">
//                   Login
//                 </h1>
//                 <form
//                   className="space-y-4 md:space-y-6"
//                   onSubmit={handleSubmit}
//                 >
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
//                     >
//                       Email
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
//                         placeholder="johndoe@gmail.com"
//                         required
//                       />
//                       <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
//                     >
//                       Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         name="password"
//                         id="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
//                         placeholder="*********"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute top-3 right-3 text-gray-400"
//                       >
//                         {isPasswordVisible ? <IoMdEye /> : <IoIosEyeOff />}
//                       </button>
//                     </div>
//                     <div className="text-right">
//                       <Link
//                         href="/forgotPassword"
//                         className="text-sm text-[#038C7F] hover:text-[#33766f] dark:text-[#038C7F]"
//                       >
//                         Forgot password?
//                       </Link>
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
//                   >
//                     Login
//                   </button>

//                   <div>
//                     <div className="flex items-center justify-between mt-4">
//                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
//                       <p className="text-xs font-light text-gray-700 dark:text-gray-700">
//                         OR
//                       </p>
//                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
//                     </div>
//                   </div>
//                   <button type="button" className="--btn --btn-block">
//                     <FcGoogle style={{ marginRight: 15 }} />{" "}
//                     <span className="text-[#038C7F] text-[14px]">
//                       Login with Google
//                     </span>
//                   </button>
//                   <p className="text-sm font-light text-gray-900 dark:text-gray-900">
//                     Don’t Have an Account?{" "}
//                     <Link
//                       href="/signup"
//                       className="font-medium text-orange-600 hover:underline dark:text-orange-500"
//                     >
//                       Register here
//                     </Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import style from "./Login.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setToken, setOrgID } from "@/app/store/authSlice";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { log } from "console";
import Image from "next/image";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
    });
    setIsPasswordVisible(false);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend.getradii.com/auth/login/",
        formData
      );
      console.log(response.data);
      const { token, user } = response.data;
      const orgID = user.orgID;
      console.log(orgID);
      dispatch(setToken(token));
      dispatch(setOrgID(orgID));
      toast.success(response.data.message || "Login successful");
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error message:", error.response?.data);
        toast.error(error.response?.data || "Login failed");
      } else {
        console.error("Unknown error occurred:", error);
        toast.error("Unknown error occurred");
      }
    }
  };

  return (
    <>
      <ToastContainer />

      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            <div className="flex gap-12 p-4 mb-8">
              <Image
                src="/logo.svg"
                alt="logo"
                className={style.regLogo}
                width={30}
                height={30}
              />
              <Image
                src="/auth-img.svg"
                alt="logo"
                className={style.regLogo}
                width={30}
                height={30}
              />
            </div>
            <h1>Log in to start your search!</h1>
            <p>Welcome back! Log in to pick up where you left off</p>
            <div className={style.regIcons}>
              <Link
                href="https://www.linkedin.com/company/urubytes"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-1">
                  <FaLinkedin size={22} color="#1b1b1b" />
                  <span className="text-[#1b1b1b]">@URUbytes</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div
              className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-[#038C7F] ">
                  Login
                </h1>
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
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
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
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="*********"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {isPasswordVisible ? <IoMdEye /> : <IoIosEyeOff />}
                      </button>
                    </div>
                    <div className="text-right">
                      <Link
                        href="/forgotPassword"
                        className="text-sm text-[#038C7F] hover:text-[#33766f] dark:text-[#038C7F]"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
                  >
                    Login
                  </button>

                  <div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                      <p className="text-xs font-light text-gray-700 dark:text-gray-700">
                        OR
                      </p>
                      <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
                    </div>
                  </div>
                  <button type="button" className="--btn --btn-block">
                    <FcGoogle style={{ marginRight: 15 }} />{" "}
                    <span className="text-[#1b1b1b]">
                      Sign in with your Google account
                    </span>
                  </button>

                  <p className="text-sm font-light text-gray-700 dark:text-gray-700">
                    Do not have an account?{" "}
                    <Link
                      href="/register"
                      className="font-medium text-[#038C7F] hover:text-[#33766f] dark:text-[#038C7F]"
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
    </>
  );
};

export default Login;
