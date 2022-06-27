import Link from "next/link";

function Section({ name, title, showFreeBlocker, blockerLabel, children }) {
  function handlePropagation(e) {
    e.stopPropagation();
  }

  return (
    <section className="w-5/6 xl:w-3/4 flex flex-col">
      {title && (
        <div className="pl-3 pb-2 flex items-center gap-x-4">
          <h3 className="font-sans font-medium text-xl leading-none text-grayscale-900 select-none">
            {title}
          </h3>
          {showFreeBlocker && (
            <div className="flex items-center gap-x-1.5">
              {blockerLabel && (
                <p className="font-sans text-sm text-gray-2">{blockerLabel}</p>
              )}
              <Link href="/markets/profile?premium=true" passHref>
                <a className="font-sans font-medium text-sm text-primary">
                  Try Premium
                </a>
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="relative">
        {children}
        {showFreeBlocker && (
          <div
            className="absolute w-full h-full left-0 top-0 backdrop-blur-[15px] bg-white/25"
            onClick={handlePropagation}
          >
            <div className="absolute right-[59px] bottom-[37px] py-1.5 px-[15px] flex flex-col items-center rounded-md bg-grayscale-900">
              <p className="font-sans text-sm text-white">Enable {name}?</p>
              <p className="font-sans font-bold text-base text-white">
                Try PREMIUM
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
