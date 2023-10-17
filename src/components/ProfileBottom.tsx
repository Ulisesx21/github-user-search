import { FC } from "react";
import { UserProps } from "../types";

import iconCompanyWhite from "../assets/icon-company-white.svg";
import iconCompanyGray from "../assets/icon-company-gray.svg";

import iconTwitterWhite from "../assets/icon-twitter-white.svg";
import iconTwitterGray from "../assets/icon-twitter-gray.svg";

import iconLocationWhite from "../assets/icon-location-white.svg";
import iconLocationGray from "../assets/icon-location-gray.svg";

import iconWebsiteWhite from "../assets/icon-website-white.svg";
import iconWebsiteGray from "../assets/icon-website-gray.svg";

type ProfileBottomProps = {
  user: UserProps | undefined | null;
};

export const ProfileBottom: FC<ProfileBottomProps> = ({ user }) => {
  return (
    <ul className="flex justify-between mt-8 max-sm:flex-wrap max-sm:mt-4">
      <div className="flex w-full flex-col py-2">
        
        {/* LOCATE */}
        <li
          className={`flex w-full items-center text-[13px] ${
            user?.links.location ? "text-d-textNorm" : "text-gray-400"
          }`}
        >
          <img
            className="mr-4"
            src={user?.links.location ? iconLocationWhite : iconLocationGray}
          />
          {user?.links.location || "Not Available"}
        </li>

        {/* WEBSITE / BLOG */}
        <li
          className={`flex w-full items-center mt-4 text-[13px] ${
            user?.links.blog ? "text-d-textNorm" : "text-gray-400"
          }`}
        >
          <img
            className="mr-3"
            src={user?.links.blog ? iconWebsiteWhite : iconWebsiteGray}
          />
          {user?.links.blog ? (
            <a
              href={`${
                user?.links.blog.startsWith("https://")
                  ? user?.links.blog
                  : `https://${user?.links.blog}`
              }`}
              target="_blank"
            >
              {user.links.blog}
            </a>
          ) : (
            "Not Available"
          )}
        </li>
      </div>

      {/* TWITTER */}
      <div className="py-2 w-full flex flex-col">
        <li
          className={`flex items-center w-full text-[13px] ${
            user?.links.twitter ? "text-d-textNorm" : "text-gray-400"
          }`}
        >
          <img
            className="mr-3"
            src={user?.links.twitter ? iconTwitterWhite : iconTwitterGray}
          />
          {user?.links.twitter ? (
            <a
              href={`https://twitter.com/${user.links.twitter}`}
              target="_blank"
            >
              {user?.links.twitter}
            </a>
          ) : (
            "Not Available"
          )}
        </li>

        {/* COMPANY */}
        <li
          className={`flex w-full mt-4 items-center text-[13px] ${
            user?.links.company ? "text-d-textNorm" : "text-gray-400"
          }`}
        >
          <img
            className="mr-3.5"
            src={user?.links.company ? iconCompanyWhite : iconCompanyGray}
          />
          {user?.links.company || "Not Available"}
        </li>
      </div>
    </ul>
  );
};
