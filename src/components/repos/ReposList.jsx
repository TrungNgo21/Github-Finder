import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
function ReposList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl font-bold card-title my-4">Latest Repositories</h2>
        {repos.map((repo) => <RepoItem repo={repo} key={repo.id}/>)}
      </div>
    </div>
  );
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default ReposList;
