import { useMemo, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import ContentBox from "@/components/pages/markets/profile/ContentBox";

function Accordion({ premium, title, children }) {
  const [expand, setExpand] = useState(false);
  const contentRef = useRef(null);

  const contentHeight = useMemo(() => {
    if (contentRef.current) {
      return contentRef.current.scrollHeight;
    }
    return 0;
  }, [expand, contentRef]); // eslint-disable-line react-hooks/exhaustive-deps

  const expandStyles = {
    entering: { height: contentHeight },
    entered: { height: "auto" },
    exiting: { height: contentHeight },
    exited: { height: 0 },
  };

  function expandButtonOnClick() {
    setExpand(!expand);
  }

  return (
    <ContentBox>
      <div className="py-[5px] flex justify-between">
        <h4 className="font-sans font-bold text-base text-gray-0 select-none">
          {title}
        </h4>
        <button
          className="font-sans font-medium text-sm text-primary"
          onClick={expandButtonOnClick}
        >
          {expand ? "See Less" : "See More"}
        </button>
      </div>
      <Transition in={expand} timeout={150} nodeRef={contentRef}>
        {(state) => (
          <div
            ref={contentRef}
            className="flex flex-col overflow-hidden h-0 transition-[height] ease-in"
            style={expandStyles[state]}
          >
            {premium && children}
          </div>
        )}
      </Transition>
    </ContentBox>
  );
}

export default Accordion;
