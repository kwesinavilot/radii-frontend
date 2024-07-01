// // "use client";

// // import { useState } from "react";
// // import axios from "axios";
// // import { useRouter } from "next/navigation";
// // import { ToastContainer, toast } from "react-toastify";
// // import { IoIosEyeOff, IoIosEye } from "react-icons/io";
// // import { FaUser, FaEnvelope, FaLinkedin } from "react-icons/fa";
// // import Link from "next/link";
// // import { FcGoogle } from "react-icons/fc";
// // import style from "./Register.module.css";

// // const Register = () => {
// //   const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     retypePassword: "",
// //     agreeTerms: false,
// //   });
// //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

// //   const togglePasswordVisibility = () => {
// //     setIsPasswordVisible(!isPasswordVisible);
// //   };

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     if (formData.password !== formData.retypePassword) {
// //       toast.error("Passwords do not match. Please try again");
// //       return;
// //     }

// //     try {
// //       const response = await axios.post(
// //         "https://lobster-app-9ufhi.ondigitalocean.app/auth/account-exists/",
// //         {
// //           email: formData.email,
// //         }
// //       );

// //       if (response.data.exists) {
// //         toast.error("User already exists");
// //       } else {
// //         localStorage.setItem("registrationData", JSON.stringify(formData));
// //         router.push("/survey");
// //       }
// //     } catch (error) {
// //       console.error("Error checking account existence:", error);
// //       toast.error("An error occurred. Please try again.");
// //     }
// //   };

// //   return (
// //     <>
// //       <ToastContainer />
// //       <section className={style.reg}>
// //         <div className={style.regWrapper}>
// //           <div className={style.regContent}>
// //             {/* <Image src="/logo.png" alt="logo" className={style.regLogo} width={100} height={50} /> */}
// //             <h1>Unlock the Power of Your Data.</h1>
// //             <p>
// //               Integrate all your data sources to unlock insights and drive
// //               strategic decisions that propel your business forward.
// //             </p>
// //             <p className={style.regIcons}>
// //               <Link
// //                 href="https://www.linkedin.com/company/Radiis"
// //                 target="_blank"
// //                 className="flex items-center justify-center gap-1"
// //               >
// //                 <FaLinkedin size={22} color="#1b1b1b" />
// //                 <span className="text-[#1b1b1b]">@Radiis</span>
// //               </Link>
// //             </p>
// //           </div>
// //           <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
// //             <div
// //               className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700 ${style.formBackground}`}
// //             >
// //               <div className="p-6 sm:p-8">
// //                 <h1 className="mb-5 text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#038C7F]">
// //                   Register below
// //                 </h1>
// //                 <form onSubmit={handleSubmit}>
// //                   <div>
// //                     <label
// //                       htmlFor="name"
// //                       className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
// //                     >
// //                       Name
// //                     </label>
// //                     <div className="relative">
// //                       <input
// //                         type="text"
// //                         id="name"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         required
// //                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
// //                         placeholder="John Doe"
// //                       />
// //                       <FaUser className="absolute top-3 right-3 text-gray-400" />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="email"
// //                       className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
// //                     >
// //                       Email
// //                     </label>
// //                     <div className="relative">
// //                       <input
// //                         type="email"
// //                         id="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         required
// //                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
// //                         placeholder="johndoe@gmail.com"
// //                       />
// //                       <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="password"
// //                       className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
// //                     >
// //                       Password
// //                     </label>
// //                     <div className="relative">
// //                       <input
// //                         type={isPasswordVisible ? "text" : "password"}
// //                         id="password"
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         required
// //                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
// //                         placeholder="*********"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={togglePasswordVisibility}
// //                         className="absolute top-3 right-3 text-gray-400"
// //                       >
// //                         {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="retypePassword"
// //                       className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
// //                     >
// //                       Retype Password
// //                     </label>
// //                     <div className="relative">
// //                       <input
// //                         type={isPasswordVisible ? "text" : "password"}
// //                         id="retypePassword"
// //                         name="retypePassword"
// //                         value={formData.retypePassword}
// //                         onChange={handleChange}
// //                         required
// //                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
// //                         placeholder="*********"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={togglePasswordVisibility}
// //                         className="absolute top-3 right-3 text-gray-400"
// //                       >
// //                         {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start my-4">
// //                     <div className="flex items-center h-5">
// //                       <input
// //                         type="checkbox"
// //                         id="agreeTerms"
// //                         name="agreeTerms"
// //                         checked={formData.agreeTerms}
// //                         onChange={handleChange}
// //                         required
// //                         aria-describedby="terms"
// //                         className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
// //                       />
// //                     </div>
// //                     <div className="ml-3 text-sm ">
// //                       <label
// //                         htmlFor="terms"
// //                         className="font-light text-gray-700 dark:text-gray-700"
// //                       >
// //                         I agree to all the{" "}
// //                         <a
// //                           className="font-medium text-primary-600 text-[#038C7F] hover:underline dark:text-[#038C7F]"
// //                           href="#"
// //                         >
// //                           Terms, Privacy Policy and Fees.
// //                         </a>
// //                       </label>
// //                     </div>
// //                   </div>
// //                   <button
// //                     type="submit"
// //                     className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
// //                   >
// //                     Create an account
// //                   </button>
// //                 </form>
// //                 <div className="space-y-2">
// //                   <div>
// //                     <div className="flex items-center justify-between mt-4">
// //                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
// //                       <p className="text-xs font-light text-gray-700 dark:text-gray-700">
// //                         OR
// //                       </p>
// //                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
// //                     </div>
// //                   </div>
// //                   <button
// //                     className="--btn --btn-block flex items-center mx-auto border justify-center py-2 gap-3 rounded-lg w-full"
// //                     // onClick={() => handleGoogleSignUp()}
// //                   >
// //                     <FcGoogle />
// //                     <span className="text-[#038C7F] text-[12.7px]">
// //                       Sign up with Google
// //                     </span>
// //                   </button>
// //                   <p className="text-sm font-light text-gray-900 dark:text-gray-900">
// //                     Have an account?{" "}
// //                     <Link
// //                       href="/signin"
// //                       className="font-medium text-orange-600 hover:underline dark:text-orange-500"
// //                     >
// //                       Login here
// //                     </Link>
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Register;

// "use client";

// import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import style from "./Register.module.css";
// import { FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { IoIosEyeOff, IoMdEye } from "react-icons/io";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { setToken, setOrgID } from "@/app/store/authSlice";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/store/store";

// interface FormData {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//     confirmPassword: "",
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
//       confirmPassword: "",
//     });
//     setIsPasswordVisible(false);
//   }, []);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://lobster-app-9ufhi.ondigitalocean.app/auth/register/",
//         formData
//       );

//       const { token, orgID } = response.data;
//       dispatch(setToken(token));
//       dispatch(setOrgID(orgID));
//       toast.success(response.data.message || "Registration successful");
//       router.push("/");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.error("Error message:", error.response?.data);
//         toast.error(error.response?.data || "Registration failed");
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
//             <h1>Create an account!</h1>
//             <p>Join us to start your journey</p>
//             <div className={style.regIcons}>
//               <Link
//                 href="https://www.linkedin.com/company/Radiis"
//                 target="_blank"
//               >
//                 <div className="flex items-center justify-center gap-1">
//                   <FaLinkedin size={22} color="#1b1b1b" />
//                   <span className="text-[#1b1b1b]">@Radiis</span>
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
//                   Register
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
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="confirmPassword"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
//                     >
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         name="confirmPassword"
//                         id="confirmPassword"
//                         value={formData.confirmPassword}
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
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
//                   >
//                     Register
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
//                     <span className="text-[#1b1b1b]">
//                       Sign up with your Google account
//                     </span>
//                   </button>

//                   <p className="text-sm font-light text-gray-700 dark:text-gray-700">
//                     Already have an account?{" "}
//                     <Link
//                       href="/login"
//                       className="font-medium text-[#038C7F] hover:text-[#33766f] dark:text-[#038C7F]"
//                     >
//                       Login
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

// export default Register;

"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { FaUser, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import style from "./Register.module.css";
import Image from "next/image";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
    agreeTerms: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.retypePassword) {
      toast.error("Passwords do not match. Please try again");
      return;
    }

    try {
      const response = await axios.post(
        "https://lobster-app-9ufhi.ondigitalocean.app/auth/account-exists/",
        {
          email: formData.email,
        }
      );

      if (response.data.exists) {
        toast.error("User already exists");
      } else {
        localStorage.setItem("registrationData", JSON.stringify(formData));
        router.push("/survey");
      }
    } catch (error) {
      console.error("Error checking account existence:", error);
      toast.error("An error occurred. Please try again.");
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
            <h1>Unlock the Power of Your Data.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.regIcons}>
              <Link
                href="https://www.linkedin.com/company/Radiis"
                target="_blank"
                className="flex items-center justify-center gap-1"
              >
                <FaLinkedin size={22} color="#1b1b1b" />
                <span className="text-[#1b1b1b]">@Radiis</span>
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
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="John Doe"
                      />
                      <FaUser className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="johndoe@gmail.com"
                      />
                      <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="*********"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="retypePassword"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Retype Password
                    </label>
                    <div className="relative">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="retypePassword"
                        name="retypePassword"
                        value={formData.retypePassword}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                        placeholder="*********"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-3 right-3 text-gray-400"
                      >
                        {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start my-4">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        aria-describedby="terms"
                        className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm ">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-700 dark:text-gray-700"
                      >
                        I agree to all the{" "}
                        <a
                          className="font-medium text-primary-600 text-[#038C7F] hover:underline dark:text-[#038C7F]"
                          href="#"
                        >
                          Terms, Privacy Policy and Fees.
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
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
                    className="--btn --btn-block flex items-center mx-auto border justify-center py-2 gap-3 rounded-lg w-full"
                    // onClick={() => handleGoogleSignUp()}
                  >
                    <FcGoogle />
                    <span className="text-[#038C7F] text-[12.7px]">
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
