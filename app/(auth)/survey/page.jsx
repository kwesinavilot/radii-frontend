"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import Select from "react-select";
import countries from "i18n-iso-countries";
import { industryOptions, sizeOptions } from "./data";
import Creatable from "react-select/creatable";
import style from "./Survey.module.css";
import Image from "next/image";

const Survey = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    industry: "",
    organization: "",
    size: "",
    role: "",
    country: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("surveyData", JSON.stringify(formData));
      router.push("/interest");
    } catch (error) {
      console.error("Error saving survey data:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  const countryOptions = Object.entries(countries.getNames("en")).map(
    ([value, label]) => ({ value, label })
  );

  return (
    <>
      <ToastContainer />
      <section className={style.survey}>
        <div className={style.surveyWrapper}>
          <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0 h-full overflow-auto">
            <div
              className={`w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white dark:bg-white-700 ${style.formBackground}`}
            >
              <div className="p-6 space-y-4 md:space-y-8 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-800">
                  Tell us about your organization
                </h1>
                <form
                  className="space-y-4 md:space-y-2"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="organization"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Organization Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-[#038C7F] focus:border-[#038C7F] block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Your Role
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        required
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-[#038C7F] focus:border-[#038C7F] block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#038C7F] dark:focus:border-[#038C7F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Industry
                    </label>
                    <Creatable
                      options={industryOptions}
                      isSearchable
                      name="industry"
                      value={industryOptions.find(
                        (option) => option.value === formData.industry
                      )}
                      onChange={(selectedOption) =>
                        handleChange("industry", selectedOption.value)
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Organization Size
                    </label>
                    <Creatable
                      options={sizeOptions}
                      isSearchable
                      name="size"
                      value={sizeOptions.find(
                        (option) => option.value === formData.size
                      )}
                      onChange={(selectedOption) =>
                        handleChange("size", selectedOption.value)
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                    >
                      Country
                    </label>
                    <Select
                      options={countryOptions}
                      isSearchable
                      name="country"
                      value={countryOptions.find(
                        (option) => option.value === formData.country
                      )}
                      onChange={(selectedOption) =>
                        handleChange("country", selectedOption.value)
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#038C7F] hover:bg-[#1e5852]  dark:focus:ring-[#33a79c]"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-end items-end">
              <Image
                src="/logo.svg"
                alt="logo"
                className={style.surveyLogo}
                width={50}
                height={50}
              />
            </div>
            <div className={style.surveyContent}>
              <h1>Gain Insights, Drive Growth.</h1>
              <p>
                Integrate all your data sources to unlock insights and drive
                strategic decisions that propel your business forward.
              </p>
              <p className={style.surveyIcons}>
                <a
                  href="https://www.linkedin.com/company/Radiis"
                  target="_blank"
                  className="flex items-center justify-center gap-1"
                >
                  <FaLinkedin size={22} color="#1b1b1b" />
                  <span className="text-[#1b1b1b]">@Radiis</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Survey;
