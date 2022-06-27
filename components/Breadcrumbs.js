import { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import { formatPathSegment } from "@/utils/string";

function Breadcrumbs() {
  const router = useRouter();

  const segmentList = useMemo(() => {
    if (router.asPath.split("?")[0] === "/") return ["Home"];
    const pathWithoutQuery = router.asPath.split("?")[0];
    return pathWithoutQuery
      .split("/")
      .filter((segment) => segment)
      .map((segment) => {
        const segmentEndIndex =
          pathWithoutQuery.indexOf(segment) + segment.length;
        return {
          path: pathWithoutQuery.substring(0, segmentEndIndex),
          label: formatPathSegment(segment),
        };
      });
  }, [router]);

  return (
    <div className="w-fit py-3 px-8 xl:px-16 2xl:px-32 flex items-center gap-x-2 select-none">
      {segmentList.map((segment, index) => {
        if (index + 1 === segmentList.length) {
          return (
            <p
              key={index}
              className="p-0 m-0 font-sans font-normal text-xs text-grayscale-300"
            >
              {segment.label}
            </p>
          );
        }
        return (
          <Fragment key={index}>
            <Link href={segment.path} passHref>
              <a className="font-sans font-normal text-xs text-grayscale-300 hover:underline">
                {segment.label}
              </a>
            </Link>
            <ArrowRightIcon className="w-[3.89px]" />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
