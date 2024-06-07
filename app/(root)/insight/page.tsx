// "use client";

// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import { useState } from "react";

// import { FaBell } from "react-icons/fa";

// const questions = [
//   "I want to see insight from Q1 and Q2",
//   "I want to see the trends on my order",
//   "Give me some insight about the highest location movement",
//   "Give me some insight about Order Volume and Trends",
// ];

// export default function Insight() {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCardClick = (question: string) => {
//     setInputValue(question);
//   };

//   const handleSearchSubmit = () => {
//     if (inputValue.trim()) {
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="bg-grey-bg h-screen overflow-y-auto">
//       <Navbar title="Dashboard" icon="" />
//       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
//         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
//           <h2 className="text-xl font-bold mb-4">Library</h2>
//           <p>Nothing here yet</p>
//         </div>
//         <main className="sm:col-span-3 block py-4 px-8  bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
//           <div className="w-5/6 mx-auto mt-4">
//             <h1 className="text-[40px] text-center font-bold mb-4 ">
//               Ask UruBtye A Question
//             </h1>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {questions.map((question, index) => (
//                 <Card
//                   key={index}
//                   title={question}
//                   onClick={() => handleCardClick(question)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//             />
//             {isLoading && (
//               <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2">
//                 <Loader />
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import Card from "@/app/component/Card";
import Loader from "@/app/component/Loader";
import Navbar from "@/app/component/NavBar";
import SearchBar from "@/app/component/SearchBar";
import { useState } from "react";

import { FaBell } from "react-icons/fa";

const questions = [
  "I want to see insight from Q1 and Q2",
  "I want to see the trends on my order",
  "Give me some insight about the highest location movement",
  "Give me some insight about Order Volume and Trends",
];

export default function Insight() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (question: string) => {
    setInputValue(question);
  };

  const handleSearchSubmit = () => {
    if (inputValue.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Dashboard" icon="" />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
        <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <h2 className="text-xl font-bold mb-4">Library</h2>
          <p>Nothing here yet</p>
        </div>
        <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
          <div className="w-5/6 mx-auto mt-4">
            <h1 className="text-[40px] text-center font-bold mb-4">
              Ask UruBtye A Question
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions.map((question, index) => (
                <Card
                  key={index}
                  title={question}
                  onClick={() => handleCardClick(question)}
                  className="h-20 w-full"
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <SearchBar
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleSearchSubmit}
            />
            {isLoading && (
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2">
                <Loader />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
