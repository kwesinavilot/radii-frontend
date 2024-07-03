// import ReturningUser from "./returningUser/page";

// const data = {
//   recentSearches: {
//     user: [
//       { id: "1", query: "Query 1", updated_at: new Date().toString() },
//       { id: "2", query: "Query 2", updated_at: new Date().toString() },
//     ],
//   },
// };

// export default function Home() {
//   return (
//     <div>
//       <ReturningUser userQueries={10} data={data} />
//     </div>
//   );
// }
import ReturningUser from "./returningUser/page";

const data = {
  recentSearches: {
    user: [
      { id: "1", query: "Query 1", updated_at: new Date().toString() },
      { id: "2", query: "Query 2", updated_at: new Date().toString() },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <ReturningUser userQueries={10} data={data} />
    </div>
  );
}
