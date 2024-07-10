"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlus, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import {
  IoCopyOutline,
  IoDownloadOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import Link from "next/link";
import Navbar from "@/app/component/NavBar";

interface RecentSearch {
  searchID: string;
  query: string;
  updated_at: string;
}

interface Data {
  recentSearches: RecentSearch[];
}

interface ReturningUserProps {
  userQueries: number;
  data: Data;
}

const ReturningUser: React.FC<any> = ({ userQueries, data }) => {
  const router = useRouter();
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>(
    data?.recentSearches || []
  );

  const handleUserQueriesClick = (searchID: string) => {
    const url = `/internalInsight?selectedQuery=${searchID}`;
    router.push(url);
  };

  return (
    <div className="bg-grey-bg h-screen overflow-y-auto">
      <Navbar title="Dashboard" icon="" />
      <div className="grid grid-cols-1 sm:grid-cols-4 p-2 py-4 overflow-y-auto">
        <div className="sm:col-span-3 py-4 sm:px-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-300">
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Insight Today</h2>
            <div className="flex flex-col mt-2 justify-start py-4 px-6 border border-gradient rounded-xl hover:bg-gray-100 dark:border-gray-100 transition-transform transform">
              <h2 className="font-bold text-[18px] mb-2">Insights</h2>
              <ul className="text-[14px] list-disc px-4 ">
                <li>
                  The orders from Company XYZ has increased by 150% in the last
                  2 weeks.
                </li>
                <li>Sales has dropped drastically in June.</li>
                <li>
                  Company XYZ has seen a remarkable surge in orders, showing a
                  growth rate of 150% within the past two weeks.
                </li>
              </ul>
              <h2 className="font-bold text-[18px] py-2">
                Key Recommendations
              </h2>
              <p className="text-[14px]">
                Increased by your orders by 150% in the next 2 weeks, which
                should extend to a growth rate of 300% within the next month.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  <p className="border border-gray-200 rounded-sm px-2 py-1">
                    <IoCopyOutline />
                  </p>
                  <p className="border border-gray-200 rounded-sm px-2 py-1">
                    <FaRegThumbsUp />
                  </p>
                  <p className="border border-gray-200 rounded-sm px-2 py-1">
                    <FaRegThumbsDown />
                  </p>
                  <p className="border border-gray-200 rounded-sm px-2 py-1">
                    <IoDownloadOutline />
                  </p>
                  <p className="border border-gray-200 rounded-sm px-2 py-1">
                    <IoShareSocialOutline />
                  </p>
                </div>

                <Link href="/radiiView" className="flex border-gray-400">
                  <button className="text-white font-semi-bold py-2 px-4 rounded-lg border flex items-center gap-2 shadow  bg-[#E58A13]">
                    My Views
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between py-2 my-8 gap-2">
            <div className="flex flex-grow flex-col items-start justify-start py-4 pl-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="flex items-center gap-2">
                <Image
                  src="/insights.png"
                  alt="internal insight"
                  width={12}
                  height={12}
                />
                <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-gray-700 flex mt-2">
                  Get Insight{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-900 dark:text-gray-700 mb-4">
                Start by pointing us to a data source.
              </p>

              <div className="flex justify-between">
                <Link
                  href="/connectDataSources"
                  className="text-dark font-semi-bold py-2 px-6 rounded-xl mt-6 border border-gray-600 flex items-center gap-2"
                >
                  <FaPlus />
                  Add Source
                </Link>
              </div>
            </div>
            <div className="flex-grow flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-100 transition-transform transform hover:scale-105">
              <div className="border-b-2 border-neutral-500 px-8 py-3 dark:border-black/10">
                <h2 className="font-semibold"> Total Questions Asked</h2>
              </div>
              <div className="p-6 flex items-center m-auto">
                <span className="font-bold text-2xl text-center">
                  {userQueries}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:col-span-1 py-4 px-2 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
          <div className="block overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="my-6 rounded-xl">
              <div className="py-4 px-4 border rounded-xl border-gradient">
                <h2 className="text-sm font-bold">Sources Connected</h2>

                <div className="py-2">
                  <Image src="/pdf.png" alt="pdf" width={57} height={57} />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-[16px] font-bold">Recent Search</h1>
          {recentSearches.map((search, index) => (
            <ul key={index}>
              <li className="bg-[#F0F2F9] p-2 my-4 list-none rounded-md">
                <span className="flex flex-col">
                  <span
                    onClick={() => handleUserQueriesClick(search.searchID)}
                    className="text-[#E58A13] cursor-pointer"
                  >
                    {search.query}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {new Date(search.updated_at).toLocaleDateString()}
                  </span>
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReturningUser;
