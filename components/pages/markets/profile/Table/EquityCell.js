function EquityCell({ name, description }) {
  return (
    <td className="px-2 pt-1.5 pb-[18px] w-[185px]">
      <h5 className="font-sans font-bold text-sm text-grayscale-900">{name}</h5>
      <p className="font-sans text-xs text-gray-500 whitespace-pre-line">
        {description}
      </p>
    </td>
  );
}

export default EquityCell;
