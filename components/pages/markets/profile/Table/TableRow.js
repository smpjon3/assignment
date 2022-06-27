function TableRow({ children }) {
  return (
    <tr className="w-full border-x-none border-y border-gray-5 first:border-t-0">
      {children}
    </tr>
  );
}
export default TableRow;
