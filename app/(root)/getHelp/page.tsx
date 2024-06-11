"use client";
import Navbar from "@/app/component/NavBar";
import { useRef, useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";

const GetHelp = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    toast.success("Message sent successfully!");
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-grey-bg h-screen overflow-hidden">
        <Navbar title={"Get Help"} />
        <div className="block m-2 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow h-full overflow-hidden">
          <div className="w-full max-w-[550px]">
            <form ref={form} onSubmit={handleSubmit}>
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
                  required
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
                    required
                  ></textarea>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#E58A13] py-3 px-8 text-base font-semibold text-white outline-none w-full"
                >
                  {messageSent ? "New Insights" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="fixed bottom-8 right-8">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
          <p className="text-center mt-2 text-sm">Chat with Us</p>
        </div>
      </div>
    </>
  );
};

export default GetHelp;
