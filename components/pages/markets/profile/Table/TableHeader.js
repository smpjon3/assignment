import clsx from "clsx";

function TableHeader({ align, children }) {
  const alignClassNames = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
    start: "text-start",
    end: "text-end",
  };
  return (
    <th
      className={clsx(
        "px-1",
        "py-2",
        "items-center",
        "font-sans",
        "font-medium",
        "text-gray-2",
        "text-sm",
        "select-none",
        align && (alignClassNames[align] ?? "text-center")
      )}
      scope="col"
    >
      {children}
    </th>
  );
}

export default TableHeader;
