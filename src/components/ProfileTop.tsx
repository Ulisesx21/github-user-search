import { FC } from "react";
import { UserProps } from "../types";

type ProfileTopProps = {
  user: UserProps | null | undefined;
};

export const ProfileTop: FC<ProfileTopProps> = ({ user }) => {
  return (
    <>
      <div>
        <div className="flex max-md:items-center">
          <img
            className="rounded-full h-[120px] hidden max-md:block max-sm:h-[80px]"
            src={user?.img}
          />
          <div className="flex justify-between items-start w-full mb-6 max-md:flex-col max-md:justify-center max-md:ml-10 max-sm:ml-5">
            <div>
              <h3 className="text-d-textBolded text-2xl mb-1 leading-5 font-bold flex max-sm:text-lg">
                {user?.name ? user?.name : "Not Available"}
              </h3>
              <p className="text-searchBtn text-sm mt-3 hover:opacity-90 max-sm:mt-0">
                <a
                  href={`https://github.com/${user?.username}`}
                  target="_blank"
                >
                  @{user?.username}
                </a>
              </p>
            </div>

            <p className="text-white text-[13px] opacity-80 max-md:mt-2">
              {user?.joinedAt && `Joined ${user?.joinedAt}`}
            </p>
          </div>
        </div>
      </div>
      <p
        className={`mb-8 text-sm max-md:mt-4 max-sm:mb-6 ${
          user?.bio ? "text-d-textNorm" : "text-gray-400"
        }`}
      >
        {user?.bio ? user?.bio : "This profile has no bio"}
      </p>
    </>
  );
};
