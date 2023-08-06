import { useRef } from "react";

export const VkGroupMessages = () => {
  const vkRef = useRef(null);

  return <div ref={vkRef}></div>;
};
