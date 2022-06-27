function WhenCell({ label, value }) {
  return (
    <td className="align-middle">
      <p className="font-sans text-xs text-gray-01 select-none">
        {label} : <span className="font-bold text-black">{value}</span>
      </p>
    </td>
  );
}

export default WhenCell;
