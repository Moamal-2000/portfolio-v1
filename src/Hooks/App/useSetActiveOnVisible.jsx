import { useEffect } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import useOnScreen from "../Helper/useOnScreen";

const useSetActiveOnVisible = (elementRef, sectionName) => {
  const { setActiveSection } = useGlobalContext();
  const isVisible = useOnScreen(elementRef, { rootMargin: "0px" });

  useEffect(() => {
    if (isVisible) setActiveSection(sectionName);
  }, [isVisible, setActiveSection, sectionName]);
};

export default useSetActiveOnVisible;
