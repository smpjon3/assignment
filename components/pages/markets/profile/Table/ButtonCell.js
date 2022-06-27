import clsx from "clsx";

function ButtonCell({ Icon, withBackground }) {
  return (
    <td className="align-middle px-1">
      <div className="flex justify-center">
        <button
          className={clsx(
            "aspect-square",
            "w-6",
            "flex",
            "justify-center",
            "items-center",
            "rounded",
            withBackground && "bg-gray-6"
          )}
        >
          {Icon}
        </button>
      </div>
    </td>
  );
}

export default ButtonCell;
