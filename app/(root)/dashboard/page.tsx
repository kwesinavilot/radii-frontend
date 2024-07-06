"use client";

import ReturningUser from "../returningUser/page";
import NewUser from "../newUser/page";
import { useEffect, useState } from "react";
import generateAxiosConfig from "@/app/config/axiosConfig";

interface RecentSearch {
  searchID: string;
  query: string;
  updated_at: string;
}

interface Data {
  recentSearches: RecentSearch[];
  totalSearches: number;
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
          generateAxiosConfig()
        );

        const result = await response.json();
        console.log("Result:", result);

        const totalSearches = result.length;

        const recentSearches = result
          .map((item: any) => ({
            searchID: item.searchID,
            query: item.query,
            updated_at: item.updated_at,
          }))
          .slice(0, 3);

        setData({ recentSearches, totalSearches });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading data</div>;
  }

  if (data && data.recentSearches.length > 0) {
    return (
      <div>
        <ReturningUser userQueries={data.totalSearches} data={data} />
      </div>
    );
  } else {
    return (
      <div>
        <NewUser />
      </div>
    );
  }
}

// "use client";

// import ReturningUser from "../returningUser/page";
// import { useEffect, useState } from "react";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// interface RecentSearch {
//   searchID: string;
//   query: string;
//   updated_at: string;
// }

// interface Data {
//   recentSearches: RecentSearch[];
//   totalSearches: number;
// }

// export default function Home() {
//   const [data, setData] = useState<Data | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://lobster-app-9ufhi.ondigitalocean.app/insights/library/",
//           generateAxiosConfig()
//         );

//         const result = await response.json();
//         console.log("Result:", result);

//         const totalSearches = result.length;

//         const recentSearches = result
//           .map((item: any) => ({
//             searchID: item.searchID,
//             query: item.query,
//             updated_at: item.updated_at,
//           }))
//           .slice(0, 3);

//         setData({ recentSearches, totalSearches });
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setHasError(true);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (hasError) {
//     return <div>Error loading data</div>;
//   }

//   return (
//     <div>
//       {data && <ReturningUser userQueries={data.totalSearches} data={data} />}
//     </div>
//   );
// }
