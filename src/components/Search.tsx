import { FC, useState } from "react";
import search from "../assets/icon-search.svg";

type SearchProps = {
  getUser: (str: string) => void;
  error: string | undefined;
  changeError: (err: string) => void;
};

export const Search: FC<SearchProps> = ({ getUser, error, changeError }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = inputValue;

    if (value === undefined || value.trim() === "") {
      changeError("Min Characters: 1");
    } else if (value.length > 39) {
      changeError("Max Characters: 39");
    } else {
      getUser(value);
    }

    setInputValue("");
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeError("");
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="flex rounded-xl bg-d-card px-2 py-2 relative shadow-sm shadow-[#192541]">
        <div className="flex justify-center items-center px-3">
          <img src={search} />
        </div>

        <form className="flex w-full" onSubmit={handleSubmit}>
          <input
            placeholder="Search GitHub username..."
            name="username"
            id="username"
            type="text"
            value={inputValue}
            onChange={onInputChange}
            className=" focus:outline-none bg-d-card text-d-textNorm w-full placeholder:text-white placeholder:opacity-80 max-sm:text-[12px]"
          />
          <button
            type="submit"
            className="bg-searchBtn text-d-textNorm rounded-lg text-[12px] px-4 py-2.5 font-bold hover:opacity-90"
          >
            Search
          </button>
        </form>
        {error ? (
          <div className="text-red-500 text-[12px] absolute top-[53px] left-[55px]">
            {error}
          </div>
        ) : null}
      </div>
    </>
  );
};
