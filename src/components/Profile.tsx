import { FC } from "react";
import { UserProps } from "../types";
import { ProfileTop } from "./ProfileTop";
import { ProfileMiddle } from "./ProfileMiddle";
import { ProfileBottom } from "./ProfileBottom";

type ProfileProps = {
  user: UserProps | null | undefined;
};

export const Profile: FC<ProfileProps> = ({ user }) => {
  console.log(user);

  return (
    <div className=" bg-d-card mt-5 rounded-xl flex p-10 max-sm:p-6 shadow-sm shadow-[#192541]">
      <div className="w-[25%] mr-[30px] max-md:hidden">
        <img className="rounded-full " src={user?.img} />
      </div>
      <div className="w-full">
        <ProfileTop user={user} />

        <ProfileMiddle user={user} />

        <ProfileBottom user={user} />
      </div>
    </div>
  );
};
