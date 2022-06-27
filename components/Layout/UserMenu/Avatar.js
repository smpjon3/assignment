import Image from "next/image";
import clsx from "clsx";
import AvatarIcon from "@/components/svg/AvatarIcon";
import NotificationBadgeIcon from "@/components/svg/NotificationBadgeIcon";

function Avatar({ url, showBadge }) {
  return (
    <div
      className={clsx(
        "relative",
        "aspect-square",
        "w-7",
        "flex",
        "justify-center",
        "items-center",
        "rounded-[10px]",
        url ? "bg-transparent" : "bg-grayscale-300"
      )}
    >
      {url ? (
        <Image
          src={url}
          alt="Avatar image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-[10px]"
        />
      ) : (
        <AvatarIcon className="w-[10.64px]" />
      )}
      {showBadge && (
        <NotificationBadgeIcon className="w-[9px] absolute top-[-2.5px] right-[-2.5px]" />
      )}
    </div>
  );
}

export default Avatar;
