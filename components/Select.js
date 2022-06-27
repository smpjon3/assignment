import CaretDownIcon from "@/components/svg/CaretDownIcon";

function Select({ label }) {
  return (
    <button className="py-2.5 pl-[17px] pr-[13px] flex items-center gap-x-2 bg-white rounded-md border border-solid border-gray-4 font-sans font-medium text-sm text-gray-0">
      <span>{label}</span>
      <span className="aspect-square w-5 flex justify-center items-center">
        <CaretDownIcon className="w-[6.67px]" />
      </span>
    </button>
  );
}

export default Select;
