// "use client";

// import { useState, MouseEvent } from "react";
// import style from "./Interest.module.css";
// import { FaLinkedin } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// const Interest: React.FC = () => {
//   const [selectedInterest, setSelectedInterest] = useState<string>("");
//   const [selectedReferrer, setSelectedReferrer] = useState<string>("");
//   const router = useRouter();

//   const handleInterestClick = (interest: string) => {
//     setSelectedInterest(interest);
//   };

//   const handleReferrerClick = (referrer: string) => {
//     setSelectedReferrer(referrer);
//   };

//   const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (selectedInterest && selectedReferrer) {
//       try {
//         const formData = {
//           interest: selectedInterest,
//           referrer: selectedReferrer,
//         };

//         console.log("Submitting form data:", formData);

//         const response = await fetch(
//           "https://backend.getradii.com/auth/register/",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//           }
//         );

//         const responseData = await response.json();

//         if (response.ok) {
//           toast.success("Form submitted successfully!");
//           console.log("Registration successful:", responseData);
//           router.push("/");
//         } else {
//           console.error("Failed to submit form:", responseData);
//           toast.error(responseData.message || "Failed to submit form.");
//         }
//       } catch (error) {
//         console.error("An error occurred:", error);
//         toast.error("An unexpected error occurred.");
//       }
//     } else {
//       toast.error("Please select both interest and referrer.");
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <section className={style.interest}>
//         <div className={style.interestWrapper}>
//           <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
//             <div
//               className={`w-full rounded-xl shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 bg-white dark:bg-white-700  ${style.formBackground}`}
//             >
//               <div className="p-4 space-y-4 md:space-y-2 sm:p-4">
//                 <h1 className="text-xl font-medium leading-tight tracking-tight text-[#038C7F] md:text-3xl dark:text-[#038C7F] py-8">
//                   What is your interest?
//                 </h1>

//                 <div>
//                   <button
//                     className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
//                       selectedInterest === "explore"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleInterestClick("explore")}
//                   >
//                     I'm here to explore
//                   </button>
//                   <button
//                     className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
//                       selectedInterest === "competitors"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleInterestClick("competitors")}
//                   >
//                     I want to know what my competitors are doing
//                   </button>
//                   <button
//                     className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
//                       selectedInterest === "insights"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleInterestClick("insights")}
//                   >
//                     I want to understand my data and get actionable insights
//                   </button>
//                 </div>
//               </div>

//               <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
//                 <h1 className="text-xl font-medium leading-tight tracking-tight text-[#038C7F] md:text-3xl dark:text-[#038C7F] pb-4">
//                   How did you hear about us?
//                 </h1>
//                 <div>
//                   <button
//                     className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
//                       selectedReferrer === "friend/colleague"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleReferrerClick("friend/colleague")}
//                   >
//                     Through a friend/colleague
//                   </button>
//                   <button
//                     className={` text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
//                       selectedReferrer === "publication/conference"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() =>
//                       handleReferrerClick("publication/conference")
//                     }
//                   >
//                     Industry publication/conference
//                   </button>
//                   <button
//                     className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
//                       selectedReferrer === "socialmedia"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleReferrerClick("socialmedia")}
//                   >
//                     Social media
//                   </button>
//                   <button
//                     className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
//                       selectedReferrer === "onlinesearch"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleReferrerClick("onlinesearch")}
//                   >
//                     Online search
//                   </button>
//                   <button
//                     className={`text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
//                       selectedReferrer === "webinar/networking"
//                         ? "bg-[#038C7F] text-white"
//                         : ""
//                     }`}
//                     onClick={() => handleReferrerClick("webinar/networking")}
//                   >
//                     Webinar/Networking event
//                   </button>
//                 </div>
//               </div>
//               <div className="px-8">
//                 <button
//                   type="submit"
//                   onClick={handleSubmit}
//                   disabled={!selectedInterest || !selectedReferrer}
//                   className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lx px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852] dark:focus:ring-[#33a79c] my-8"
//                 >
//                   Complete
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className={style.interestContent}>
//             <h1>Gain Insights, Drive Growth.</h1>
//             <p>
//               Integrate all your data sources to unlock insights and drive
//               strategic decisions that propel your business forward.
//             </p>
//             <p className={style.interestIcons}>
//               <a
//                 href="https://www.linkedin.com/company/urubytes"
//                 target="_blank"
//                 className="flex items-center justify-center gap-1"
//               >
//                 <FaLinkedin size={22} color="#1b1b1b" />
//                 <span className="text-[#1b1b1b]">@URUbytes</span>
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Interest;

"use client";

import { useState, MouseEvent, useEffect } from "react";
import style from "./Interest.module.css";
import { FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Interest: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [selectedReferrer, setSelectedReferrer] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const surveyData = localStorage.getItem("surveyData");
    const registerData = localStorage.getItem("registerData");
    // if (!surveyData || !registerData) {
    //   router.push("/register");
    // }
  }, [router]);

  const handleInterestClick = (interest: string) => {
    setSelectedInterest(interest);
  };

  const handleReferrerClick = (referrer: string) => {
    setSelectedReferrer(referrer);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedInterest && selectedReferrer) {
      try {
        const registrationData = JSON.parse(
          localStorage.getItem("registrationData") || "{}"
        );
        const surveyData = JSON.parse(
          localStorage.getItem("surveyData") || "{}"
        );

        const combinedData = {
          ...registrationData,
          ...surveyData,
          interests: selectedInterest,
          referrer: selectedReferrer,
        };

        console.log("Submitting form data:", combinedData);

        const response = await fetch(
          "https://backend.getradii.com/auth/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(combinedData),
          }
        );

        const responseData = await response.json();

        if (response.ok) {
          toast.success("Form submitted successfully!");
          console.log("Registration successful:", responseData);
          localStorage.removeItem("registerData");
          localStorage.removeItem("surveyData");
          router.push("/");
        } else {
          console.error("Failed to submit form:", responseData);
          toast.error(responseData.message || "Failed to submit form.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("An unexpected error occurred.");
      }
    } else {
      toast.error("Please select both interest and referrer.");
    }
  };

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
                      selectedInterest === "explore"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleInterestClick("explore")}
                  >
                    I'm here to explore
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
                      selectedInterest === "competitors"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleInterestClick("competitors")}
                  >
                    I want to know what my competitors are doing
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-2xl p-4 inline-block mb-2 ${
                      selectedInterest === "insights"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleInterestClick("insights")}
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
                    onClick={() => handleReferrerClick("friend/colleague")}
                  >
                    Through a friend/colleague
                  </button>
                  <button
                    className={` text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "publication/conference"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() =>
                      handleReferrerClick("publication/conference")
                    }
                  >
                    Industry publication/conference
                  </button>
                  <button
                    className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "socialmedia"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleReferrerClick("socialmedia")}
                  >
                    Social media
                  </button>
                  <button
                    className={`mr-2 text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "onlinesearch"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleReferrerClick("onlinesearch")}
                  >
                    Online search
                  </button>
                  <button
                    className={`text-sm text-gray-700 border border-gray-400 rounded-xl py-3 px-3 inline-block mb-2 ${
                      selectedReferrer === "webinar/networking"
                        ? "bg-[#038C7F] text-white"
                        : ""
                    }`}
                    onClick={() => handleReferrerClick("webinar/networking")}
                  >
                    Webinar/Networking event
                  </button>
                </div>
              </div>
              <div className="px-8">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!selectedInterest || !selectedReferrer}
                  className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lx px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852] dark:focus:ring-[#33a79c] my-8"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>

          <div className={style.interestContent}>
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
