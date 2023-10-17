import { FC } from "react";
import { UserProps } from "../types";

type ProfileMiddleProps = {
  user: UserProps | undefined | null;
};

export const ProfileMiddle: FC<ProfileMiddleProps> = ({ user }) => {
  return (
    <div className="bg-d-background w-full rounded-lg flex py-4 text-sm px-7 max-sm:justify-between max-sm:px-4">
      <div className="w-full">
        <h3 className="text-white opacity-80 text-xs max-sm:justify-center max-sm:flex">
          Repos
        </h3>
        <p className="text-d-textNorm font-bold text-xl max-sm:justify-center max-sm:flex max-sm:mt-2 max-sm:text-lg">
          {user?.repos}
        </p>
      </div>
      <div className="w-full">
        <h3 className="text-white opacity-80 text-xs max-sm:justify-center max-sm:flex">
          Followers
        </h3>
        <p className="text-d-textNorm font-bold text-xl max-sm:justify-center max-sm:flex max-sm:mt-2 max-sm:text-lg">
          {user?.followers}
        </p>
      </div>
      <div className="w-full ml-4 max-sm:ml-0">
        <h3 className="text-white opacity-80 text-xs max-sm:justify-center max-sm:flex">
          Following
        </h3>
        <p className="text-d-textNorm font-bold text-xl max-sm:justify-center max-sm:flex max-sm:mt-2 max-sm:text-lg">
          {user?.following}
        </p>
      </div>
    </div>
  );
};
