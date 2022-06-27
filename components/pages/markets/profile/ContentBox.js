function ContentBox({ children }) {
  return (
    <div className="w-full px-4 py-3 flex flex-col border border-solid border-gray-3 rounded-xl bg-white">
      {children}
    </div>
  );
}

export default ContentBox;
