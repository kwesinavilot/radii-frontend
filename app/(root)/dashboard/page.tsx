// // import ReturningUser from "../returningUser/page";

// // const data = {
// //   recentSearches: {
// //     user: [
// //       { id: "1", query: "Query 1", updated_at: new Date().toString() },
// //       { id: "2", query: "Query 2", updated_at: new Date().toString() },
// //     ],
// //   },
// // };

// // export default function Home() {
// //   return (
// //     <div>
// //       <ReturningUser userQueries={10} data={data} />
// //     </div>
// //   );
// // }

// "use client";

// import ReturningUser from "../returningUser/page";
// import NewUser from "../newUser/page";
// import { useEffect, useState } from "react";
// import generateAxiosConfig from "@/app/config/axiosConfig";

// interface RecentSearch {
//   searchID: string;
//   query: string;
//   updated_at: string;
// }

// interface Data {
//   recentSearches: RecentSearch[];
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
//         const recentSearches = result.map((item: any) => ({
//           searchID: item.searchID,
//           query: item.query,
//           updated_at: item.updated_at,
//         }));
//         setData({ recentSearches });
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

//   if (data && data.recentSearches.length > 0) {
//     return (
//       <div>
//         <ReturningUser userQueries={data.recentSearches.length} data={data} />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <NewUser />
//       </div>
//     );
//   }
// }

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
        const recentSearches = result
          .map((item: any) => ({
            searchID: item.searchID,
            query: item.query,
            updated_at: item.updated_at,
          }))
          .slice(0, 3); // Get only the first 3 items
        setData({ recentSearches });
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
        <ReturningUser userQueries={data.recentSearches.length} data={data} />
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
