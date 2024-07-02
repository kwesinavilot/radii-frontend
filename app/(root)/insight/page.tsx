// // // "use client";

// // // import Card from "@/app/component/Card";
// // // import Loader from "@/app/component/Loader";
// // // import Navbar from "@/app/component/NavBar";
// // // import SearchBar from "@/app/component/SearchBar";
// // // import SearchResult from "@/app/component/SearchResult";
// // // import Image from "next/image";
// // // import { useState } from "react";
// // // import axios from "axios";
// // // import generateAxiosConfig from "@/app/config/axiosConfig";
// // // import { RootState } from "@/app/store/store";
// // // import { useSelector } from "react-redux";
// // // import { toast } from "react-toastify";

// // // interface Result {
// // //   type: string;
// // //   title: string;
// // //   status: string;
// // //   dateAdded: string;
// // //   lastUpdated: string;
// // // }

// // // const questions: string[] = [
// // //   "I want to see insight from Q1 and Q2",
// // //   "I want to see the trends on my order",
// // //   "Give me some insight about the highest location movement",
// // //   "Give me some insight about Order Volume and Trends",
// // // ];

// // // const dummyResult: Result = {
// // //   type: "PDF",
// // //   title: "Total Customer Movement in Quarter 1 of 2023",
// // //   status: "Complete",
// // //   dateAdded: "05/03/2024",
// // //   lastUpdated: "05/03/2024",
// // // };

// // // export default function Insight() {
// // //   const [inputValue, setInputValue] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
// // //   const [remainingPrompts, setRemainingPrompts] = useState(10);
// // //   const [showResult, setShowResult] = useState(false);
// // //   const [result, setResult] = useState<Result | null>(null);

// // //   const token = useSelector((state: RootState) => state.auth.token);
// // //   const orgID = useSelector((state: RootState) => state.auth.orgID);

// // //   const handleCardClick = (question: string) => {
// // //     setInputValue(question);
// // //   };

// // //   const handleSearchSubmit = async () => {
// // //     if (inputValue.trim()) {
// // //       setIsLoading(true);
// // //       setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
// // //       try {
// // //         const response = await axios.post(
// // //           "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
// // //           {
// // //             query: inputValue,
// // //             orgID: orgID,
// // //             sourceType: "folder",
// // //             folderID: "static",
// // //           },
// // //           generateAxiosConfig()
// // //         );
// // //         setResult(response.data);
// // //         console.log("Insights fetched successfully:", response.data);
// // //         setShowResult(true);
// // //       } catch (error) {
// // //         console.error("Error fetching insights:", error);
// // //         toast.error("Error fetching insights");
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-grey-bg h-screen overflow-y-auto">
// // //       <Navbar title="Dashboard" icon="" />
// // //       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
// // //         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
// // //           <h2 className="text-xl font-bold mb-4">Library</h2>
// // //           <p>Nothing here yet</p>
// // //         </div>
// // //         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
// // //           <div className="w-5/6 mx-auto mt-4">
// // //             <h1 className="text-[40px] text-center font-bold mb-4">
// // //               Ask Radii A Question
// // //             </h1>
// // //             <div className="grid grid-cols-2 gap-4 mb-8">
// // //               {questions.map((question, index) => (
// // //                 <Card
// // //                   key={index}
// // //                   title={question}
// // //                   onClick={() => handleCardClick(question)}
// // //                   className="h-20 w-full"
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="relative">
// // //             <SearchBar
// // //               value={inputValue}
// // //               onChange={setInputValue}
// // //               onSubmit={handleSearchSubmit}
// // //               selectedFolder={selectedFolder}
// // //               onFolderChange={setSelectedFolder}
// // //               remainingPrompts={remainingPrompts}
// // //             />
// // //             {isLoading && (
// // //               <div className="flex mt-4">
// // //                 <div className="flex items-center gap-2">
// // //                   <Image
// // //                     src="/i-logo.svg"
// // //                     alt="Radiis logo"
// // //                     width={22}
// // //                     height={22}
// // //                   />
// // //                   <Loader />
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //           {!isLoading && showResult && result && (
// // //             <SearchResult result={result} />
// // //           )}
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import Card from "@/app/component/Card";
// // import Loader from "@/app/component/Loader";
// // import Navbar from "@/app/component/NavBar";
// // import SearchBar from "@/app/component/SearchBar";
// // import SearchResult from "@/app/component/SearchResult";
// // import Image from "next/image";
// // import { useState } from "react";
// // import axios from "axios";
// // import generateAxiosConfig from "@/app/config/axiosConfig";
// // import { RootState } from "@/app/store/store";
// // import { useSelector } from "react-redux";
// // import { toast } from "react-toastify";

// // interface Result {
// //   type: string;
// //   title: string;
// //   status: string;
// //   dateAdded: string;
// //   lastUpdated: string;
// // }

// // const questions: string[] = [
// //   "I want to see insight from Q1 and Q2",
// //   "I want to see the trends on my order",
// //   "Give me some insight about the highest location movement",
// //   "Give me some insight about Order Volume and Trends",
// // ];

// // const dummyResult: Result = {
// //   type: "PDF",
// //   title: "Total Customer Movement in Quarter 1 of 2023",
// //   status: "Complete",
// //   dateAdded: "05/03/2024",
// //   lastUpdated: "05/03/2024",
// // };

// // export default function Insight() {
// //   const [inputValue, setInputValue] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
// //   const [remainingPrompts, setRemainingPrompts] = useState(10);
// //   const [showResult, setShowResult] = useState(false);
// //   const [result, setResult] = useState<Result | null>(null);

// //   const token = useSelector((state: RootState) => state.auth.token);
// //   const orgID = useSelector((state: RootState) => state.auth.orgID);

// //   const handleCardClick = (question: string) => {
// //     setInputValue(question);
// //   };

// //   const handleSearchSubmit = async () => {
// //     if (inputValue.trim()) {
// //       setIsLoading(true);
// //       setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
// //       setInputValue("");

// //       try {
// //         const response = await axios.post(
// //           "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
// //           {
// //             query: inputValue,
// //             orgID: orgID,
// //             sourceType: "folder",
// //             folderID: "static",
// //           },
// //           generateAxiosConfig()
// //         );
// //         setResult(response.data);
// //         console.log("Insights fetched successfully:", response.data);
// //         setShowResult(true);
// //       } catch (error) {
// //         console.error("Error fetching insights:", error);
// //         toast.error("Error fetching insights");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="bg-grey-bg h-screen overflow-y-auto">
// //       <Navbar title="Dashboard" icon="" />
// //       <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 h-full overflow-y-auto">
// //         <div className="block sm:col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
// //           <h2 className="text-xl font-bold mb-4">Library</h2>
// //           <p>Nothing here yet</p>
// //         </div>
// //         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
// //           <div className="w-5/6 mx-auto mt-4">
// //             <h1 className="text-[40px] text-center font-bold mb-4">
// //               Ask Radii A Question
// //             </h1>
// //             <div className="grid grid-cols-2 gap-4 mb-8">
// //               {questions.map((question, index) => (
// //                 <Card
// //                   key={index}
// //                   title={question}
// //                   onClick={() => handleCardClick(question)}
// //                   className="h-20 w-full"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //           <div className="relative">
// //             <SearchBar
// //               value={inputValue}
// //               onChange={setInputValue}
// //               onSubmit={handleSearchSubmit}
// //               selectedFolder={selectedFolder}
// //               onFolderChange={setSelectedFolder}
// //               remainingPrompts={remainingPrompts}
// //             />
// //             {isLoading && (
// //               <div className="flex mt-4">
// //                 <div className="flex items-center gap-2">
// //                   <Image
// //                     src="/i-logo.svg"
// //                     alt="Radiis logo"
// //                     width={22}
// //                     height={22}
// //                   />
// //                   <Loader />
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //           {!isLoading && showResult && result && (
// //             <SearchResult result={result} />
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import Card from "@/app/component/Card";
// import Loader from "@/app/component/Loader";
// import Navbar from "@/app/component/NavBar";
// import SearchBar from "@/app/component/SearchBar";
// import SearchResult from "@/app/component/SearchResult";
// import Image from "next/image";
// import { useState } from "react";
// import axios from "axios";
// import generateAxiosConfig from "@/app/config/axiosConfig";
// import { RootState } from "@/app/store/store";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

// interface Result {
//   type: string;
//   title: string;
//   status: string;
//   dateAdded: string;
//   lastUpdated: string;
//   data: any;
// }

// const questions: string[] = [
//   "I want to see insight from Q1 and Q2",
//   "I want to see the trends on my order",
//   "Give me some insight about the highest location movement",
//   "Give me some insight about Order Volume and Trends",
// ];

// export default function Insight() {
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedFolder, setSelectedFolder] = useState("Movement DS");
//   const [remainingPrompts, setRemainingPrompts] = useState(10);
//   const [showResult, setShowResult] = useState(false);
//   const [result, setResult] = useState<Result | null>(null);

//   const token = useSelector((state: RootState) => state.auth.token);
//   const orgID = useSelector((state: RootState) => state.auth.orgID);

//   const handleCardClick = (question: string) => {
//     setInputValue(question);
//   };

//   const handleSearchSubmit = async () => {
//     if (inputValue.trim()) {
//       setIsLoading(true);
//       setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
//       setInputValue("");

//       try {
//         const response = await axios.post(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
//           {
//             query: inputValue,
//             orgID: orgID,
//             sourceType: "folder",
//             folderID: "static",
//           },
//           generateAxiosConfig()
//         );
//         setResult(response.data);
//         console.log("Insights fetched successfully:", response.data);
//         setShowResult(true);
//       } catch (error) {
//         console.error("Error fetching insights:", error);
//         toast.error("Error fetching insights");
//       } finally {
//         setIsLoading(false);
//       }
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
//         <main className="sm:col-span-3 block py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100 mainInternal">
//           <div className="w-5/6 mx-auto mt-4">
//             <h1 className="text-[40px] text-center font-bold mb-4">
//               Ask Radii A Question
//             </h1>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {questions.map((question, index) => (
//                 <Card
//                   key={index}
//                   title={question}
//                   onClick={() => handleCardClick(question)}
//                   className="h-20 w-full"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <SearchBar
//               value={inputValue}
//               onChange={setInputValue}
//               onSubmit={handleSearchSubmit}
//               selectedFolder={selectedFolder}
//               onFolderChange={setSelectedFolder}
//               remainingPrompts={remainingPrompts}
//             />
//             {isLoading && (
//               <div className="flex mt-4">
//                 <div className="flex items-center gap-2">
//                   <Image
//                     src="/i-logo.svg"
//                     alt="Radiis logo"
//                     width={22}
//                     height={22}
//                   />
//                   <Loader />
//                 </div>
//               </div>
//             )}
//           </div>
//           {!isLoading && showResult && result && (
//             <SearchResult result={result} />
//           )}
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
import SearchResult from "@/app/component/SearchResult";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import generateAxiosConfig from "@/app/config/axiosConfig";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface Result {
  type: string;
  title: string;
  status: string;
  dateAdded: string;
  lastUpdated: string;
  data: {
    labels: string[];
    values: number[];
  };
}

const questions: string[] = [
  "I want to see insight from Q1 and Q2",
  "I want to see the trends on my order",
  "Give me some insight about the highest location movement",
  "Give me some insight about Order Volume and Trends",
];

export default function Insight() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("Movement DS");
  const [remainingPrompts, setRemainingPrompts] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const token = useSelector((state: RootState) => state.auth.token);
  const orgID = useSelector((state: RootState) => state.auth.orgID);

  const handleCardClick = (question: string) => {
    setInputValue(question);
  };

  const handleSearchSubmit = async () => {
    if (inputValue.trim()) {
      setIsLoading(true);
      setRemainingPrompts((prev) => (prev > 0 ? prev - 1 : 0));
      setInputValue("");

      try {
        const response = await axios.post(
          "https://lobster-app-9ufhi.ondigitalocean.app/insights/internal/",
          {
            query: inputValue,
            orgID: orgID,
            sourceType: "folder",
            folderID: "static",
          },
          generateAxiosConfig()
        );
        setResult(response.data);
        console.log("Insights fetched successfully:", response.data);
        setShowResult(true);
      } catch (error) {
        console.error("Error fetching insights:", error);
        toast.error("Error fetching insights");
      } finally {
        setIsLoading(false);
      }
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
              Ask Radii A Question
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
              selectedFolder={selectedFolder}
              onFolderChange={setSelectedFolder}
              remainingPrompts={remainingPrompts}
            />
            {isLoading && (
              <div className="flex mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/i-logo.svg"
                    alt="Radiis logo"
                    width={22}
                    height={22}
                  />
                  <Loader />
                </div>
              </div>
            )}
          </div>
          {!isLoading && showResult && result && (
            <SearchResult result={result} />
          )}
        </main>
      </div>
    </div>
  );
}
