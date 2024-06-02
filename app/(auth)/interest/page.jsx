"use client";
import { useState } from "react";
import style from "./Interest.module.css";
// import logo from "../../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   updateLoginData,
//   updateRegistrationData,
// } from "../../../reducer/action";

const Interest = () => {
  //   const [formData, setFormData] = useState({
  //     interests: "",
  //     referrer: "",
  //   });

  const [selectedInterest, setSelectedInterest] = useState("");
  const [selectedReferrer, setSelectedReferrer] = useState("");

  //   const registrationData = useSelector(
  //     (state) => state.registration.registrationData
  //   );
  //   const dispatch = useDispatch();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         "https://urubytes-backend-v2-r6wnv.ondigitalocean.app/auth/register/",
  //         registrationData
  //       );

  //       const data = {
  //         userID: response.data.userID,
  //         orgID: response.data.orgID,
  //         token: response.token,
  //       };
  //       dispatch(updateLoginData(data));
  //       dispatch(updateRegistrationData(data));
  //       console.log(response.data);
  //       console.log("Registration successful:", response.data.message);
  //       toast.success(response.data.message || "Registration successful");
  //       setTimeout(() => {
  //         // For client-side navigation
  //         window.location.href = "/dashboard";
  //       }, 2000);
  //     } catch (error) {
  //       console.error("Failed to send data to backend:", error);
  //       toast.error(error.response.data.error || "Failed to register");
  //     }
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //     // You may dispatch Redux actions here if needed
  //     if (name === "interests") {
  //       setSelectedInterest(value);
  //     } else if (name === "referrer") {
  //       setSelectedReferrer(value);
  //     }
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
              <div className="p-4 space-y-4 md:space-y-2 sm:p-4">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-[#038C7F] md:text-3xl dark:text-[#038C7F] py-8">
                  What is your interest?
                </h1>

                <div>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
                      selectedInterest === "Explore"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "interests", value: "explore" },
                    //   })
                    // }
                  >
                    I'm here to explore
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
                      selectedInterest === "competitors"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "interests", value: "competitors" },
                    //   })
                    // }
                  >
                    I want to know what my competitors are doing
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
                      selectedInterest === "insights"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "interests", value: "insights" },
                    //   })
                    // }
                  >
                    I want to understand my data and get actionable insights
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                <h1 className="text-xl font-medium leading-tight tracking-tight text-[#038C7F] md:text-3xl dark:text-[#038C7F] pb-4">
                  How did you hear about us?
                </h1>
                <div>
                  <button
                    className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "friend/colleague"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "referrer", value: "friend/colleague" },
                    //   })
                    // }
                  >
                    Through a friend/colleague
                  </button>
                  <button
                    className={` text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "publication/conference"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: {
                    //       name: "referrer",
                    //       value: "publication/conference",
                    //     },
                    //   })
                    // }
                  >
                    Industry publication/conference
                  </button>
                  <button
                    className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "socialmedia"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "referrer", value: "socialmedia" },
                    //   })
                    // }
                  >
                    Social media
                  </button>
                  <button
                    className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "onlinesearch"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: { name: "referrer", value: "onlinesearch" },
                    //   })
                    // }
                  >
                    Online search
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "webinar/networking"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    // onClick={() =>
                    //   handleChange({
                    //     target: {
                    //       name: "referrer",
                    //       value: "webinar/networking",
                    //     },
                    //   })
                    // }
                  >
                    Webinar/Networking event
                  </button>
                </div>
              </div>
              <div className="px-8">
                <button
                  type="submit"
                  //   onClick={handleSubmit}
                  //   disabled={!formData.interests || !formData.referrer}
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lx px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c] my-8"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>

          <div className={style.interestContent}>
            {/* <img src={logo} alt="logo" className={style.interestLogo} /> */}
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

export default Interest;
