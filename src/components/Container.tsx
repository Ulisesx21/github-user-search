import { useEffect, useState } from "react";
import { Profile } from "./Profile";
import { Search } from "./Search";
import { getUserByName } from "../services/github";
import { UserProps } from "../types";
import { formatDate } from "../utils/formatDate";

export const Container = () => {
  const [user, setUser] = useState<UserProps | null>();
  const [error, setError] = useState<string>();

  const getUser = async (userName: string) => {
    try {
      const data = await getUserByName(userName);

      const tempUser: UserProps = {
        img: data.avatar_url,
        name: data.name,
        joinedAt: formatDate(data.created_at),
        username: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        links: {
          location: data.location,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
        },
      };

      setUser(tempUser);
      setError("");
    } catch (err) {
      console.log(err);
      setUser(null);
      setError("User not found.");
    }
  };

  const changeError = (err: string) => {
    setError(err);
  };

  useEffect(() => {
    getUser("octocat");
  }, []);

  return (
    <main className="w-full max-w-[700px] max-lg:max-w-[650px] max-md:w-[80%] max-sm:w-[90%]">
      <Search getUser={getUser} error={error} changeError={changeError} />
      <Profile user={user} />
    </main>
  );
};
