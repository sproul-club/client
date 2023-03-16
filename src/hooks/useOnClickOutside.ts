import { Ref, useEffect } from "react";

interface Props {
  ref: any;
  handler: (event: Event) => void;
}

const useOnClickOutside = (ref: Props["ref"], handler: Props["handler"]) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]); // Empty array ensures that effect is only run on mount and unmount
};

export default useOnClickOutside;
