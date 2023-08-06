import { useRef, useEffect } from "react";
import scss from "./EventsPet.module.scss";

export const EventsPet = () => {
  const vkRef = useRef(null);

  useEffect(() => {
    if (vkRef.current) {
      vkRef.current.id = "vk_groups";
    }
  }, [vkRef]);

  return <div className={scss.events} ref={vkRef}></div>;
};
