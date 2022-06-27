import Logo from "@/components/svg/Logo";
import BackToTopIcon from "@/components/svg/BackToTopIcon";
import AppStoreBadge from "@/components/svg/AppStoreBadge";
import PlayStoreBadge from "@/components/svg/PlayStoreBadge";
import FacebookIcon from "@/components/svg/FacebookIcon";
import InstagramIcon from "@/components/svg/InstagramIcon";
import TwitterIcon from "@/components/svg/TwitterIcon";
import GitHubIcon from "@/components/svg/GitHubIcon";
import DribbbleIcon from "@/components/svg/DribbbleIcon";

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="w-full px-8 xl:px-16 2xl:px-32 pb-8">
      <div className="w-full px-8">
        <div className="w-full h-[60px] px-20 flex items-end justify-end border-b-2 border-gray-0/[0.15]">
          <button
            className="aspect-square w-6 flex justify-center items-center"
            onClick={scrollToTop}
          >
            <BackToTopIcon className="w-[18px]" />
          </button>
        </div>
        <div className="w-full pt-[30px] flex flex-col gap-y-[22px]">
          <section className="w-full flex flex-col gap-y-[30px]">
            <Logo className="w-[121px]" />
            <div className="flex">
              <div className="flex gap-x-8 flex-auto">
                <div className="w-44 xl:w-[217px] flex flex-col gap-y-2">
                  <h6 className="font-sans font-bold text-sm text-grayscale-900">
                    Support
                  </h6>
                  <ul className="flex flex-col gap-y-2">
                    <li className="font-sans text-sm text-grayscale-900">
                      Pricing
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Documentation
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Guides
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      API Status
                    </li>
                  </ul>
                </div>
                <div className="w-44 xl:w-[217px] flex flex-col gap-y-2">
                  <h6 className="font-sans font-bold text-sm text-grayscale-900">
                    Product
                  </h6>
                  <ul className="flex flex-col gap-y-2">
                    <li className="font-sans text-sm text-grayscale-900">
                      Pricing
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Documentation
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Guides
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      API Status
                    </li>
                  </ul>
                </div>
                <div className="w-44 xl:w-[217px] flex flex-col gap-y-2">
                  <h6 className="font-sans font-bold text-sm text-grayscale-900">
                    Education
                  </h6>
                  <ul className="flex flex-col gap-y-2">
                    <li className="font-sans text-sm text-grayscale-900">
                      Pricing
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Documentation
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Guides
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      API Status
                    </li>
                  </ul>
                </div>
                <div className="w-44 xl:w-[217px] flex flex-col gap-y-2">
                  <h6 className="font-sans font-bold text-sm text-grayscale-900">
                    About
                  </h6>
                  <ul className="flex flex-col gap-y-2">
                    <li className="font-sans text-sm text-grayscale-900">
                      Pricing
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Documentation
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      Guides
                    </li>
                    <li className="font-sans text-sm text-grayscale-900">
                      API Status
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-end items-center gap-y-4">
                <AppStoreBadge className="w-[135px] cursor-pointer" />
                <PlayStoreBadge className="w-[135px] cursor-pointer" />
              </div>
            </div>
          </section>
          <section className="w-full py-9 flex justify-between items-center">
            <ul className="py-1 flex items-center gap-x-4 list-none">
              <li className="font-sans text-sm text-grayscale-900">
                &copy;2022 Equityset, Inc. All rights reserved
              </li>
              <li className="font-sans text-sm text-grayscale-900">
                Privacy Policy
              </li>
              <li className="font-sans text-sm text-grayscale-900">
                Terms of Service
              </li>
              <li className="font-sans text-sm text-grayscale-900">Sitemap</li>
            </ul>
            <ul className="py-1 flex items-center gap-x-7 list-none">
              <li className="w-6 aspect-square flex justify-center items-center cursor-pointer">
                <FacebookIcon className="w-5" />
              </li>
              <li className="w-6 aspect-square flex justify-center items-center cursor-pointer">
                <InstagramIcon className="w-5" />
              </li>
              <li className="w-6 aspect-square flex justify-center items-center cursor-pointer">
                <TwitterIcon className="w-5" />
              </li>
              <li className="w-6 aspect-square flex justify-center items-center cursor-pointer">
                <GitHubIcon className="w-5" />
              </li>
              <li className="w-6 aspect-square flex justify-center items-center cursor-pointer">
                <DribbbleIcon className="w-5" />
              </li>
            </ul>
          </section>
          <section className="w-full border-t-[3px] border-b border-gray-0/[0.15]">
            <p className="px-2 py-4 font-sans text-xs text-gray-0">
              Disclaimers: EquitySet LLC is not operated by a broker, a dealer,
              or a registered investment adviser. Under no circumstances does
              any information posted on EquitySet LLC represent an
              individualized recommendation to buy or sell a security. The
              information on this site, and in its related emails and
              newsletters, is not intended to be, nor does it constitute
              individual investment advice or recommendations. The users may buy
              and sell securities before and after any particular article and
              report and information herein is published, with respect to the
              securities discussed in any article and report posted herein. In
              no event shall EquitySet LLC be liable to any member, guest or
              third party for any damages of any kind arising out of the use of
              any content or other material published or available on EquitySet
              LLC, or relating to the use of, or inability to use,
              equitysetdata.com or any content, including, without limitation,
              any investment losses, lost profits, lost opportunity, special,
              incidental, indirect, consequential or punitive damages. Past
              performance is a poor indicator of future performance. The
              information on this site is in no way guaranteed for completeness,
              accuracy or in any other way. The companies listed on this website
              are not affiliated with EquitySet LLC .
            </p>
            <p className="w-full py-2 font-sans text-xs text-center text-primary bg-gray-5">
              Equityset does not provide individualized investment advice or
              recommendations for individual portfolios.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
