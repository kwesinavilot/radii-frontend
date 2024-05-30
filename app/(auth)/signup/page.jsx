// "use client";
// import React, { useState } from "react";
// import style from "./Register.module.css";
// // import logo from "../../../assets/logo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaUser } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa";
// import { IoIosEyeOff, IoIosEye } from "react-icons/io";
// // import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { updateRegistrationData } from "../../../reducer/action";
// import { useGoogleLogin } from "@react-oauth/google";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agreeTerms: false,
//   });
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (formData.password !== formData.retypePassword) {
//       // Passwords don't match, show error message or handle it accordingly
//       toast.error("Passwords do not match. Please Try again");
//       return;
//     }

//     dispatch(
//       updateRegistrationData({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         agreeTerms: formData.agreeTerms,
//       })
//     );
//     console.log("Registration data:", formData);
//     // navigate("/survey");
//   };

//   const handleGoogleSignUp = useGoogleLogin({
//     onSuccess: async (response) => {
//       console.log("Successful Google login:", response);

//       // make a request to Google to get user profile info
//       await axios
//         .get(
//           `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${response.access_token}`,
//             },
//           }
//         )
//         .then((response) => {
//           console.log("Google Profile Response:", response.data);
//           const profileData = response.data;

//           // save Google profile data to Redux store
//           dispatch(
//             updateRegistrationData({
//               name: profileData.name,
//               email: profileData.email,
//               password: `${profileData.given_name} ${profileData.sub}`,
//               agreeTerms: true,
//             })
//           );

//           // go to the next stage in the registration process
//           navigate("/survey");
//         })
//         .catch((error) => {
//           console.log("Error fetching Google profile:", error);
//         });
//     },
//     onError: (error) => {
//       console.log("Google error:", error);
//     },
//   });

//   return (
//     <>
//       {/* <ToastContainer /> */}
//       <section className={style.reg}>
//         <div className={style.regWrapper}>
//           <div className={style.regContent}>
//             {/* <img src={logo} alt="logo" className={style.regLogo} /> */}
//             <h1>Unlock the Power of Your Data.</h1>
//             <p>
//               Integrate all your data sources to unlock insights and drive
//               strategic decisions that propel your business forward.
//             </p>
//             <p className={style.regIcons}>
//               <a
//                 href="https://www.linkedin.com/company/urubytes"
//                 target="_blank"
//                 className=" flex items-center justify-center gap-1"
//               >
//                 <FaLinkedin size={22} color="#1b1b1b" />
//                 <span className="text-[#1b1b1b]">@URUbytes</span>
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
//             <div
//               className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
//             >
//               <div className="p-6 sm:p-8">
//                 <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
//                   Create account
//                 </h1>
//                 <form
//                   className="space-y-8 md:space-y-4"
//                   action="#"
//                   onSubmit={handleSubmit}
//                 >
//                   <div>
//                     <label
//                       for="name"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
//                     >
//                       Name
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="John Doe"
//                         required
//                       />
//                       <FaUser className="absolute top-3 right-3 text-gray-400" />
//                     </div>
//                   </div>
//                   <div>
//                     <label
//                       for="email"
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
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="*********"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute top-3 right-3 text-gray-400"
//                       >
//                         {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="retypePassword"
//                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
//                     >
//                       Retype Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         name="retypePassword"
//                         id="retypePassword"
//                         value={formData.retypePassword}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="*********"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={togglePasswordVisibility}
//                         className="absolute top-3 right-3 text-gray-400"
//                       >
//                         {isPasswordVisible ? <IoIosEye /> : <IoIosEyeOff />}
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input
//                         id="terms"
//                         aria-describedby="terms"
//                         type="checkbox"
//                         name="agreeTerms"
//                         checked={formData.agreeTerms}
//                         onChange={handleChange}
//                         className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-white-700 dark:bg-white-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                         required
//                       />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label
//                         for="terms"
//                         className="font-light text-gray-700 dark:text-gray-700"
//                       >
//                         I agree to all the
//                         <a
//                           className="font-medium text-primary-600 text-blue-500 hover:underline dark:text-primary-500"
//                           href="#"
//                         >
//                           Terms, Privacy Policy and Fees.
//                         </a>
//                       </label>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Create an account
//                   </button>
//                 </form>

//                 <div className="space-y-2">
//                   <div>
//                     <div className="flex items-center justify-between mt-4">
//                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
//                       <p className="text-xs font-light text-gray-700 dark:text-gray-700">
//                         OR
//                       </p>
//                       <div className="w-2/5 border-b border-gray-300 md:w-2/5"></div>
//                     </div>
//                   </div>

//                   <button
//                     className="--btn --btn-block"
//                     onClick={() => handleGoogleSignUp()}
//                   >
//                     <FcGoogle style={{ marginRight: 15 }} /> Continue with
//                     Google
//                   </button>

//                   <p className="text-sm font-light text-gray-900 dark:text-gray-900">
//                     Have an account?{" "}
//                     <a
//                       href="/"
//                       className="font-medium text-orange-600 hover:underline dark:text-orange-500"
//                     >
//                       Login here
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RegisterForm;

import Image from "next/image";

const RegisterForm = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="absolute bottom-0 left-0">
        <Image
          src="/bottom-img.png"
          alt="Left Bottom"
          width={150}
          height={150}
        />
        {/* <img src="/bottom-img.png" alt="Left Bottom" width={150} height={150} /> */}
      </div>

      <div className="absolute top-0 right-0">
        <Image src="/top-img.png" alt="Top Right" width={150} height={150} />
        {/* <img src="/top-img.png" alt="Top Right" width={150} height={150} /> */}
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center bg-green-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">
          Unlock the Power of Your Data.
        </h1>
        <p className="mb-8">
          Integrate all your data sources to unlock insights and drive strategic
          decisions that propel your business forward.
        </p>
        <p>@URUbytes</p>
      </div>
      <div className="relative flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Register below</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">
                  I agree to all the{" "}
                  <a href="#" className="text-blue-500">
                    Terms, Privacy Policy and Fees
                  </a>
                  .
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-3 py-2 rounded-md"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>or</p>
            <button className="w-full flex items-center justify-center bg-white border rounded-md px-3 py-2">
              <span className="ml-2">Sign up with Google</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Already have an Account?{" "}
              <a href="#" className="text-blue-500">
                Log in
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
