import React, { useMemo } from "react";

function Tabs({ value, onChange, children }) {
  const updatedChildren = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          active: child.props.value === value,
          onClick: onChange,
        });
      }
      return child;
    });
  }, [children, onChange, value]);

  return (
    <ul className="w-full m-0 py-0 px-5 flex gap-x-[38px] border-b-2 border-solid border-gray-4 list-none">
      {updatedChildren}
    </ul>
  );
}

export default Tabs;
