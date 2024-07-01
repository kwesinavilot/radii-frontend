"use client";

import React, { useState } from "react";
import style from "./VerifyEmail.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EmailVerification: React.FC = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  //   const router = useRouter();

  //   const handleResendEmail = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/accounts/register/"
  //       );
  //       console.log("Email sent:", response.data);
  //       toast.success("Verification email sent");
  //     } catch (error) {
  //       console.error("Failed to send email:", error);
  //       toast.error("Failed to send email");
  //     }
  //   };

  //   const handleProceed = () => {
  //     setIsEmailVerified(true);
  //     router.push("/dashboard");
  //   };

  return (
    <>
      <ToastContainer />
      <section className={style.interest}>
        <div className={style.interestWrapper}>
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div
              className={`w-full rounded-xl shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
                <h1 className="text-xl leading-tight tracking-tight md:text-3xl  py-4">
                  To ensure security, kindly verify your Email.
                </h1>
                <p className="text-[17px] text-gray-700 dark:text-gray-800">
                  We&apos;ve sent a verification email to complete your
                  registration. If you don&apos;t see it, click the Resend
                  button below to receive a new one.
                </p>
                <button
                  //   onClick={isEmailVerified ? handleProceed : handleResendEmail}
                  className={`text-blue-700 font-semibold dark:text-blue-500 py-4 ${
                    isEmailVerified ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {isEmailVerified ? "VERIFIED" : "RESEND EMAIL"}
                </button>
              </div>
              <div className="p-6 space-y-4 md:space-y-2 sm:p-8 flex items-end justify-end">
                <button
                  //   onClick={handleProceed}
                  className={`border rounded-lg font-semibold px-6 py-2 ${
                    isEmailVerified ? "bg-blue-600" : "bg-[#BDBDBD]"
                  } text-white`}
                >
                  PROCEED
                </button>
              </div>
            </div>
          </div>

          <div className={style.interestContent}>
            <div className="flex gap-12 p-4 mb-8">
              <Image
                src="/logo.svg"
                alt="logo"
                className={style.interestLogo}
                width={30}
                height={30}
              />
              <Image
                src="/auth-img.svg"
                alt="logo"
                className={style.interestLogo}
                width={30}
                height={30}
              />
            </div>
            <h1>Gain Insights, Drive Growth.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.interestIcons}>
              <a
                href="https://www.linkedin.com/company/urubytes"
                target="_blank"
                className="flex items-center justify-center gap-1"
              >
                <FaLinkedin size={22} color="#1b1b1b" />
                <span className="text-[#1b1b1b]">@URUbytes</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailVerification;
