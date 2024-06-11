"use client";
import Navbar from "@/app/component/NavBar";
import { useRef, useState, FormEvent } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetHelp = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  //   const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     if (!form.current) return;

  //     // const name = form.current.elements.user_name.value;
  //     // const message = form.current.elements.message.value;

  //     if (!name || !message) {
  //       toast.error("Please fill in all fields", {
  //         position: "top-center",
  //       });
  //       return;
  //     }

  //     emailjs
  //       .sendForm(
  //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //         form.current,
  //         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  //       )
  //       .then(
  //         () => {
  //           setMessageSent(true);
  //           if (form.current) form.current.reset();
  //         },
  //         (error) => {
  //           console.log("FAILED...", error);
  //           toast.error(error.text || "Failed to send message!", {
  //             position: "top-center",
  //           });
  //         }
  //       );
  //   };

  return (
    <>
      <ToastContainer />

      <div className="bg-grey-bg h-screen overflow-hidden internal">
        <Navbar title={"Get Help"} />
        <div className="block m-2 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 h-full overflow-hidden">
          <div className="w-full max-w-[550px]">
            <form ref={form}>
              <h1 className="text-2xl font-semibold text-[#07074D] mb-5">
                Contact Us
              </h1>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message:
                </label>
                {messageSent ? (
                  <div className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    Thank you for contacting Urubytes, we will respond to your
                    message as soon as we can.
                  </div>
                ) : (
                  <textarea
                    rows={8}
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#E58A13] py-3 px-8 text-base font-semibold text-white outline-none w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default GetHelp;
