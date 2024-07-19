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
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import generateAxiosConfig from "@/app/config/axiosConfig";

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
        "https://lobster-app-9ufhi.ondigitalocean.app/auth/login/",
        formData
      );
      dispatch(setToken(response.data.token));
      const orgID = response.data.user.orgID;
      const token = response.data.token;
      dispatch(setOrgID(orgID));
      Cookies.set("auth_token", token);
      console.log("orgID:", orgID);
      console.log("Token:", response.data.token);
      console.log("Login successful:", response.data);
      // toast.success(response.data.message || "Login successful");
      router.push("/dashboard");
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
  const signInWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Successful Google login:", response);

      try {
        const profileResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log("Google Profile Response:", profileResponse.data);
        const profileData = profileResponse.data;

        try {
          // Attempt to log in the user
          const loginResponse = await axios.post(
            "https://lobster-app-9ufhi.ondigitalocean.app/auth/login/",
            {
              email: profileData.email,
              password: `${profileData.given_name} ${profileData.sub}`,
            }
          );

          dispatch(setToken(loginResponse.data.token));
          const orgID = loginResponse.data.user.orgID;
          dispatch(setOrgID(orgID));
          Cookies.set("auth_token", loginResponse.data.token);
          Cookies.set("google_token", response.access_token);

          console.log("Full Google login successful:", loginResponse.data);
          // toast.success(loginResponse.data.message || "Login successful");
          router.push("/dashboard");
        } catch (loginError) {
          if (
            axios.isAxiosError(loginError) &&
            loginError.response?.data?.error === "User does not exist"
          ) {
            // Handle user does not exist: create a new user
            try {
              const registerResponse = await axios.post(
                "https://lobster-app-9ufhi.ondigitalocean.app/auth/register/",
                {
                  email: profileData.email,
                  password: `${profileData.given_name} ${profileData.sub}`,
                  firstName: profileData.given_name,
                  lastName: profileData.family_name,
                }
              );

              // After successful registration, log the user in
              const loginAfterRegisterResponse = await axios.post(
                "https://lobster-app-9ufhi.ondigitalocean.app/auth/login/",
                {
                  email: profileData.email,
                  password: `${profileData.given_name} ${profileData.sub}`,
                }
              );

              dispatch(setToken(loginAfterRegisterResponse.data.token));
              const orgID = loginAfterRegisterResponse.data.user.orgID;
              dispatch(setOrgID(orgID));
              Cookies.set("auth_token", loginAfterRegisterResponse.data.token);
              Cookies.set("google_token", response.access_token);

              console.log(
                "Full Google login successful after registration:",
                loginAfterRegisterResponse.data
              );
              toast.success(
                loginAfterRegisterResponse.data.message || "Login successful"
              );
              router.push("/dashboard");
            } catch (registerError) {
              if (axios.isAxiosError(registerError)) {
                console.error(
                  "Registration failed:",
                  registerError.response?.data || registerError.message
                );
                toast.error(
                  registerError.response?.data || "Registration failed"
                );
              } else {
                console.error("Unknown registration error:", registerError);
                toast.error("Unknown registration error");
              }
            }
          } else {
            if (axios.isAxiosError(loginError)) {
              console.error(
                "Full Google login failed:",
                loginError.response?.data || loginError.message
              );
              toast.error(loginError.response?.data || "Login failed");
            } else {
              console.error("Unknown login error:", loginError);
              toast.error("Unknown login error");
            }
          }
        }
      } catch (profileError) {
        if (axios.isAxiosError(profileError)) {
          console.error(
            "Fetching Google profile failed:",
            profileError.response?.data || profileError.message
          );
          toast.error(profileError.response?.data || "Fetching profile failed");
        } else {
          console.error("Unknown profile error:", profileError);
          toast.error("Unknown profile error");
        }
      }
    },
    onError: (error) => {
      console.log("Google error:", error);
    },
  });

  return (
    <>
      <ToastContainer />
      <section className={style.reg}>
        <div className={style.regWrapper}>
          <div className={style.regContent}>
            <h1>Log in to start your search!</h1>
            <p>Welcome back! Log in to pick up where you left off</p>
            <div className={style.regIcons}>
              <Link
                href="https://www.linkedin.com/company/getradii/"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-1">
                  <FaLinkedin size={22} color="#1b1b1b" />
                  <span className="text-[#1b1b1b]">@Radii</span>
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
                    <button
                      type="button"
                      onClick={() => signInWithGoogle()}
                      className="w-full mt-4 flex items-center justify-center px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100"
                    >
                      <FcGoogle className="w-6 h-6" />
                      <span className="ml-2">Login with Google</span>
                    </button>
                  </div>

                  <p className="text-sm font-light text-gray-900 dark:text-gray-800">
                    Don&apos;t have an account yet?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-[#038C7F] hover:underline dark:text-[#038C7F]"
                    >
                      Sign up here
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
