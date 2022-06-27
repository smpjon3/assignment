import Checkbox from "@/components/Checkbox";

function CheckboxCell({ id, name, value }) {
  return (
    <td className="w-28 align-middle">
      <div className="flex justify-center">
        <Checkbox id={id} name={name} value={value} />
      </div>
    </td>
  );
}

export default CheckboxCell;
