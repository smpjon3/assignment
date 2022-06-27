import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import styles from "./Tab.module.css";

function Tab({ value, label, active, onClick }) {
  const ref = useRef(null);

  function handleClick() {
    onClick(value);
  }

  return (
    <li className="p-0 m-0">
      <button
        onClick={handleClick}
        className={clsx(
          "relative",
          "px-1",
          "pt-[25px]",
          "pb-[21px]",
          "flex",
          "justify-center",
          "items-center",
          "font-sans",
          "font-medium",
          "text-base",
          active ? "text-primary" : "text-grayscale-600",
          "transition-colors",
          "duration-300"
        )}
      >
        {label}
        <CSSTransition
          in={active}
          timeout={{ enter: 300, exit: 150 }}
          nodeRef={ref}
          mountOnEnter
          unmountOnExit
        >
          <div
            ref={ref}
            className={clsx(
              "absolute",
              "left-0",
              "bottom-[-2px]",
              "w-full",
              "h-0.5",
              "bg-primary",
              "transition-opacity",
              "duration-300",
              styles.activeIndicator
            )}
          ></div>
        </CSSTransition>
      </button>
    </li>
  );
}

export default Tab;
