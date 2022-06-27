import { useRef, useState } from "react";
import CheckIcon from "@/components/svg/CheckIcon";

function Checkbox({ value, id, name }) {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);

  function onChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className="flex justify-center items-center relative aspect-square w-4">
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="appearance-none aspect-square w-full border border-gray-2 rounded cursor-pointer checked:bg-primary checked:border-primary"
      />
      {ref.current && ref.current.checked && (
        <CheckIcon className="absolute w-[8.99px] pointer-events-none" />
      )}
    </div>
  );
}

export default Checkbox;
