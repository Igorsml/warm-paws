import { useRef, useEffect } from "react";
import classes from "./EventsPet.module.classes";

export const EventsPet = () => {
  const vkRef = useRef(null);

  useEffect(() => {
    if (vkRef.current) {
      vkRef.current.id = "vk_groups";
    }
  }, [vkRef]);

  return <div className={classes.events} ref={vkRef}></div>;
};
