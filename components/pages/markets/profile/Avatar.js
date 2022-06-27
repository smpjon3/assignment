import Image from "next/image";
import clsx from "clsx";
import AvatarIcon from "@/components/svg/AvatarIcon";
import PencilIcon from "@/components/svg/PencilIcon";

function Avatar({ url }) {
  return (
    <div
      className={clsx(
        "relative",
        "aspect-square",
        "w-24",
        "flex",
        "items-center",
        "justify-center",
        "rounded-md",
        url ? "bg-transparent" : "bg-grayscale-300"
      )}
    >
      {url ? (
        <Image
          src={url}
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-[10px]"
        />
      ) : (
        <AvatarIcon className="w-9" />
      )}
      <button className="absolute bottom-[-4px] right-[-7px] aspect-square w-6 flex justify-center items-center bg-gray-6 rounded outline-none outline-0">
        <PencilIcon className="w-3" />
      </button>
    </div>
  );
}

export default Avatar;
