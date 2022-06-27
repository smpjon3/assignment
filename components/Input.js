function Input({ IconComponent, ...props }) {
  return (
    <div className="px-3 py-[9px] flex items-center gap-x-2 rounded-md opacity-40 bg-[#5b6270]/[0.12] opacity-40">
      {IconComponent && (
        <div className="aspect-square w-6 p-0.5 flex justify-center items-center">
          {IconComponent}
        </div>
      )}
      <input
        className="w-full m-0 p-0 font-sans text-base placeholder:text-gray-1 text-grayscale-900 bg-transparent outline-0 outline-none caret-primary"
        {...props}
      />
    </div>
  );
}

export default Input;
