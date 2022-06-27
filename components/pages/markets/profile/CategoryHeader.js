function CategoryHeader({ title, subtitle }) {
  return (
    <header className="flex flex-col gap-y-1">
      <h1 className="p-0 m-0 font-sans font-bold text-2xl tracking-[-0.045%] text-grayscale-900 select-none">
        {title}
      </h1>
      <h2 className="p-0 m-0 font-sans text-sm text-gray-2 select-none">
        {subtitle}
      </h2>
    </header>
  );
}

export default CategoryHeader;
