"use client";
import React, { useState } from "react";
import style from "./Survey.module.css";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import Creatable from "react-select/creatable";
import { ToastContainer, toast } from "react-toastify";
import { industryOptions, sizeOptions } from "./data";
import Select from "react-select";
import countries from "i18n-iso-countries";
import "react-toastify/dist/ReactToastify.css";

const Survey = () => {
  const [formData, setFormData] = useState({
    industry: "",
    organization: "",
    size: "",
    role: "",
    country: "",
  });

  // const router = useRouter();

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Survey data submitted:", formData);
    // Add your form submission logic here
    router.push("/interest");
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
                        name="organization"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
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
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                        className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:bg-white-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
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
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={style.surveyContent}>
            <h1>Gain Insights, Drive Growth.</h1>
            <p>
              Integrate all your data sources to unlock insights and drive
              strategic decisions that propel your business forward.
            </p>
            <p className={style.surveyIcons}>
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

export default Survey;
