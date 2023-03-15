import { IconSearch } from "components/icon/Icon";
import React from "react";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Try search: Unisex Cloth"
        className="mr-14 bg-transparent font-body text-white outline-none placeholder:text-white"
        {...register("search-cloth")}
      />
      <button className="cursor-pointer">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchBar;
