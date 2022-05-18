import React, { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import AppliedFilters from "./AppliedFilters";
import SearchDisclosure from "./SearchDisclosure";
import SearchInput from "./SearchInput";

// actions
import { fetchSearchCategories, setTypeOfContent } from "../../../state/search";

type FormValues = {
  comment: string;
};

const SearchAndFilter = () => {
  const dispatch = useDispatch();

  const methods = useForm<FormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    dispatch(fetchSearchCategories());
    dispatch(setTypeOfContent());
  }, [dispatch]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const { comment } = data;
    // const { id, token } = isPostRatingsData;
    // dispatch(postUserFeedback({ id, token, comment }));
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-2">
          <SearchInput
            placeholder="Search for key phrase"
            name="name"
            id="name"
            validation={{
              required: "Name is required",
            }}
          />
        </form>
      </FormProvider>
      <section className="h-full p-4 shadow-xl border rounded-[12px] text-[14px]">
        <AppliedFilters />
        <SearchDisclosure />
      </section>
    </div>
  );
};

export default SearchAndFilter;
