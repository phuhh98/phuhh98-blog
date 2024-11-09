import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconHoverAlternate = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);

  return (
    <span
      onMouseLeave={() => {
        setTimeOutId(
          setTimeout(() => {
            setIsHover(false);
          }, 4000),
        );
      }}
      onMouseOver={() => {
        setIsHover(true);
        if (typeof timeOutId == "number") clearTimeout(timeOutId);
      }}
    >
      {isHover ? <>{props.alternate}</> : <>{props.base}</>}
    </span>
  );
};

export default IconHoverAlternate;
