import MenuIcon from "@/components/svg/MenuIcon";
import Avatar from "@/components/Layout/UserMenu/Avatar";

function UserMenu() {
  return (
    <button className="h-11 m-0 py-2 pr-2 pl-[9.5px] flex items-center gap-x-3.5 rounded-[14px] border border-solid border-grayscale-100 cursor-pointer outline-none outline-0">
      <MenuIcon className="w-[15px]" />
      <Avatar showBadge />
    </button>
  );
}

export default UserMenu;
