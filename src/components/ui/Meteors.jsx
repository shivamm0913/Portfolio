import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Meteors = ({ number = 20, className }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "vh",
      left: Math.floor(Math.random() * 100) + "vw",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={twMerge(
            clsx(
              "animate-meteor-custom absolute h-1 w-1 rounded-[9999px] bg-slate-800 shadow-[0_0_15px_3px_#1e293b] dark:bg-white dark:shadow-[0_0_15px_3px_#ffffff]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[2px] before:right-0 before:bg-gradient-to-l before:from-slate-800 before:to-transparent dark:before:from-white dark:before:to-transparent",
              className
            )
          )}
          style={style}
        ></span>
      ))}
    </>
  );
};
