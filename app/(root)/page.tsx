import ReturningUser from "./returningUser/page";

const data = {
  recentSearches: {
    user: [
      { id: "1", query: "Sample Query 1", updated_at: new Date().toString() },
      { id: "2", query: "Sample Query 2", updated_at: new Date().toString() },
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
