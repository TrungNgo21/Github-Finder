import axios from "axios";

const GITHUB_API = process.env.REACT_APP_GITHUB_API;

const github = axios.create({
  baseURL: GITHUB_API,
});

export const searchUsers = async (text) => {
  const param = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${param}`);
  return response.data.items;
};

export const getUserAndRepos = async (login) => {
  const param = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${param}`),
  ]);

  return {user: user.data, repos: repos.data}
};


