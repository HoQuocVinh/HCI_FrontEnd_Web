import { useLocation } from "react-router-dom";

export default function useGetParams(iniializeValue: string) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const param = queryParams.get(iniializeValue);
  return param;
}
