import { useTheme } from "components/context/ThemeProvider";
import { useEffect } from "react";

const StylePage = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("secondary");
  }, [setTheme]);
  
  return <div className=""></div>;
};

export default StylePage;
