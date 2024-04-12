import React from "react";
import { useSearchParams } from "react-router-dom";

const useOptions = () => {
  const [params] = useSearchParams();

  const initialOptions = params.getAll("options");

  const [options, setOptions] = React.useState(initialOptions);

  return [options, setOptions];
};

export default useOptions;
