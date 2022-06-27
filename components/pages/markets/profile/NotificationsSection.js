import { useRouter } from "next/router";
import clsx from "clsx";
import CategoryHeader from "@/components/pages/markets/profile/CategoryHeader";
import Section from "@/components/pages/markets/profile/Section";
import ContentBox from "@/components/pages/markets/profile/ContentBox";
import Input from "@/components/Input";
import InfoIcon from "@/components/svg/InfoIcon";
import Select from "@/components/Select";
import PlusIcon from "@/components/svg/PlusIcon";
import Checkbox from "@/components/Checkbox";
import Accordion from "@/components/pages/markets/profile/Accordion";
import Table from "@/components/pages/markets/profile/Table";
import TableRow from "@/components/pages/markets/profile/Table/TableRow";
import TableHeader from "@/components/pages/markets/profile/Table/TableHeader";
import EquityCell from "@/components/pages/markets/profile/Table/EquityCell";
import WhenCell from "@/components/pages/markets/profile/Table/WhenCell";
import CheckboxCell from "@/components/pages/markets/profile/Table/CheckboxCell";
import ButtonCell from "@/components/pages/markets/profile/Table/ButtonCell";
import PencilOutlineIcon from "@/components/svg/PencilOutlineIcon";
import GarbageIcon from "@/components/svg/GarbageIcon";
import { PROFILE_NOTIFICATION_OPTIONS } from "@/common/constants";

function NotificationsSection() {
  const router = useRouter();
  const premium = router.query?.premium === "true";

  return (
    <section className="w-full">
      <CategoryHeader
        title="Notifications & Alerts"
        subtitle="Customize the notifications and alerts experience"
      />
      <div className="mt-6 flex flex-col gap-y-10">
        <Section name="Contact">
          <div className="flex flex-col gap-y-10">
            <ContentBox>
              <div className="grid grid-cols-[312px_auto] gap-y-1 gap-x-3">
                <label
                  htmlFor="email"
                  className="col-span-2 font-sans font-medium text-sm text-grayscale-900 select-none"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="konstantinos.a@toptal.com"
                />
                <p className="font-['Open_Sans'] font-semibold text-sm self-center select-none">
                  This is the same email you have in your profile account.
                </p>
              </div>
            </ContentBox>
            <ContentBox>
              <div className="flex">
                <div className="flex flex-col gap-y-[23px]">
                  <div className="w-[312px] flex flex-col gap-y-1">
                    <label
                      htmlFor="mobileNumber"
                      className="col-span-2 font-sans font-medium text-sm text-grayscale-900 select-none"
                    >
                      Mobile Number
                    </label>
                    <Input
                      IconComponent={<InfoIcon className="w-5" />}
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      placeholder="Not provided"
                    />
                  </div>
                  <div className="w-full flex items-center gap-x-5 xl:gap-x-9">
                    <label className="font-sans text-sm text-grayscale-900 select-none">
                      Do not deliver SMS between:
                    </label>
                    <div className="flex items-center gap-x-3">
                      <Select label="No restriction" />
                      <p className="font-sans text-sm text-grayscale-900 select-none">
                        Until
                      </p>
                      <Select label="No restriction" />
                    </div>
                  </div>
                </div>
                <div className="pt-4 ml-auto">
                  <button className="px-1 py-[9px] flex items-center gap-x-2 font-sans font-medium text-sm text-primary underline">
                    <span className="aspect-square w-4 flex justify-center items-center">
                      <PlusIcon className="w-[9.33px]" />
                    </span>
                    <span>Add Phone Number</span>
                  </button>
                </div>
              </div>
              <footer className="w-full mt-[42px] p-1 border-t-2 border-solid border-gray-0/[0.15]">
                <p className="font-sans font-medium text-xs text-gray-2 select-none">
                  By providing your phone number, you agree to receive text
                  messages from triggers you enable on your account.
                  <br />
                  Equityset never will share your phone number with third
                  parties.
                </p>
              </footer>
            </ContentBox>
          </div>
        </Section>
        <Section name="Fair Value Updates" title="Fair Value Updates">
          <ContentBox>
            <ul className="p-0 m-0 list-none flex flex-col gap-y-3">
              <li className="flex pb-2 border-b border-gray-5">
                <div className="w-[312px] flex flex-col gap-y-1">
                  <h4 className="font-sans font-bold text-base text-gray-0 select-none">
                    Daily
                  </h4>
                  <p className="font-sans text-sm text-gray-500 select-none">
                    Securities that hit their Fair Value
                  </p>
                </div>
                <div className="pl-20 flex gap-x-20">
                  <fieldset className="flex flex-col items-center gap-y-0.5">
                    <label
                      htmlFor="daily-sms"
                      className="font-sans font-medium text-sm text-grayscale-900 select-none"
                    >
                      SMS
                    </label>
                    <div className="p-1 flex justify-center items-center">
                      <Checkbox
                        id="daily-sms"
                        name="daily-sms"
                        value="daily-sms"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="flex flex-col items-center gap-y-0.5">
                    <label
                      htmlFor="daily-email"
                      className="font-sans font-medium text-sm text-grayscale-900 select-none"
                    >
                      Email
                    </label>
                    <div className="p-1 flex justify-center items-center">
                      <Checkbox
                        id="daily-email"
                        name="daily-email"
                        value="daily-email"
                      />
                    </div>
                  </fieldset>
                </div>
              </li>
              <li className="flex">
                <div className="w-[312px] flex flex-col gap-y-1">
                  <h4 className="font-sans font-bold text-base text-gray-0 select-none">
                    Weekly
                  </h4>
                  <p className="font-sans text-sm text-gray-500 select-none">
                    Securities that hit their Fair Value
                  </p>
                </div>
                <div className="pl-20 flex gap-x-20">
                  <fieldset className="flex flex-col items-center gap-y-0.5">
                    <label
                      htmlFor="weekly-sms"
                      className="font-sans font-medium text-sm text-grayscale-900 select-none"
                    >
                      SMS
                    </label>
                    <div className="p-1 flex justify-center items-center">
                      <Checkbox
                        id="weekly-sms"
                        name="weekly-sms"
                        value="weekly-sms"
                      />
                    </div>
                  </fieldset>
                  <fieldset className="flex flex-col items-center gap-y-0.5">
                    <label
                      htmlFor="weekly-email"
                      className="font-sans font-medium text-sm text-grayscale-900 select-none"
                    >
                      Email
                    </label>
                    <div className="p-1 flex justify-center items-center">
                      <Checkbox
                        id="weekly-email"
                        name="weekly-email"
                        value="weekly-email"
                      />
                    </div>
                  </fieldset>
                </div>
              </li>
            </ul>
          </ContentBox>
        </Section>
        <Section name="Notifications" title="Notifications">
          <ContentBox>
            <div className="flex flex-col gap-y-3">
              <h4 className="font-sans font-medium text-sm text-grayscale-900 select-none">
                Select which types of emails you would like to receive
              </h4>
              <ul className="flex flex-col list-none">
                {PROFILE_NOTIFICATION_OPTIONS.map((option) => (
                  <li
                    key={option.id}
                    className="px-3 pt-2 pb-5 flex gap-x-[18px] border-b border-gray-5 last:border-none"
                  >
                    <fieldset className="aspect-square h-fit flex justify-center items-center p-1">
                      <Checkbox name={option.id} />
                    </fieldset>
                    <div className="flex flex-col w-[422px] select-none">
                      <h5
                        className={clsx(
                          "flex",
                          "items-center",
                          "gap-x-2.5",
                          "font-sans",
                          "font-bold",
                          "text-base",
                          option.id === "investor-summary"
                            ? "text-gray-900"
                            : "text-gray-0"
                        )}
                      >
                        {option.title}
                        {option.badge && (
                          <span className="px-2 py-0.5 font-sans font-medium text-xs text-white rounded bg-primary">
                            {option.badge}
                          </span>
                        )}
                      </h5>
                      <p className="font-sans text-sm text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ContentBox>
        </Section>
        <Section
          name="Triggers"
          title={`Triggers (${premium ? 2 : 0})`}
          blockerLabel="Add triggers to make smarter decisions"
          showFreeBlocker={!premium}
        >
          <div className="flex flex-col gap-y-3">
            <Accordion
              title="Stock Price and Fair Value & Price (0)"
              premium={premium}
            />
            <Accordion title="Stock Rating Changes (2)" premium={premium}>
              <div className="py-3">
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeader>&nbsp;</TableHeader>
                      <TableHeader align="left">When</TableHeader>
                      <TableHeader>SMS</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>In Summary</TableHeader>
                      <TableHeader>&nbsp;</TableHeader>
                      <TableHeader>&nbsp;</TableHeader>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <EquityCell
                        name="APPL"
                        description="Apple Computers Inc."
                      />
                      <WhenCell label="Rating Change" value="ANY" />
                      <CheckboxCell
                        id="APPL-rating-change-sms"
                        name="APPL-rating-change-sms"
                        value="APPL-rating-change-sms"
                      />
                      <CheckboxCell
                        id="APPL-rating-change-email"
                        name="APPL-rating-change-email"
                        value="APPL-rating-change-email"
                      />
                      <CheckboxCell
                        id="APPL-rating-change-summary"
                        name="APPL-rating-change-summary"
                        value="APPL-rating-change-summary"
                      />
                      <ButtonCell
                        Icon={<PencilOutlineIcon className="w-3" />}
                      />
                    </TableRow>
                    <TableRow>
                      <EquityCell name="DIS" description="Walt Disney Co" />
                      <WhenCell label="Rating Change" value="BUY" />
                      <CheckboxCell
                        id="DIS-rating-change-sms"
                        name="DIS-rating-change-sms"
                        value="DIS-rating-change-sms"
                      />
                      <CheckboxCell
                        id="DIS-rating-change-email"
                        name="DIS-rating-change-email"
                        value="DIS-rating-change-email"
                      />
                      <CheckboxCell
                        id="DIS-rating-change-summary"
                        name="DIS-rating-change-summary"
                        value="DIS-rating-change-summary"
                      />
                      <ButtonCell
                        Icon={<PencilOutlineIcon className="w-3" />}
                      />
                    </TableRow>
                    <TableRow>
                      <EquityCell
                        name="DELL"
                        description={`Securites that hit their\nFair Value`}
                      />
                      <WhenCell label="Rating Change" value="SELL" />
                      <CheckboxCell
                        id="DELL-rating-change-sms"
                        name="DELL-rating-change-sms"
                        value="DELL-rating-change-sms"
                      />
                      <CheckboxCell
                        id="DELL-rating-change-email"
                        name="DELL-rating-change-email"
                        value="DELL-rating-change-email"
                      />
                      <CheckboxCell
                        id="DELL-rating-change-summary"
                        name="DELL-rating-change-summary"
                        value="DELL-rating-change-summary"
                      />
                      <ButtonCell
                        Icon={<PencilOutlineIcon className="w-3" />}
                        withBackground
                      />
                      <ButtonCell Icon={<GarbageIcon className="w-3.5" />} />
                    </TableRow>
                  </tbody>
                </Table>
              </div>
            </Accordion>
            <Accordion title="Stock Rating Changes (2)" premium={premium}>
              <div className="py-3">
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeader></TableHeader>
                      <TableHeader align="left">When</TableHeader>
                      <TableHeader>SMS</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>In Summary</TableHeader>
                      <TableHeader></TableHeader>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <EquityCell name="S&P 500" description="Apple   Inc." />
                      <WhenCell
                        label="Rating Change"
                        value={[
                          "On Announcement",
                          "On announced date",
                          "On divident date",
                        ].join(", ")}
                      />
                      <CheckboxCell
                        id="SP500-APPL-rating-change-sms"
                        name="SP500-APPL-rating-change-sms"
                        value="SP500-APPL-rating-change-sms"
                      />
                      <CheckboxCell
                        id="SP500-APPL-rating-change-email"
                        name="SP500-APPL-rating-change-email"
                        value="SP500-APPL-rating-change-email"
                      />
                      <CheckboxCell
                        id="SP500-APPL-rating-change-summary"
                        name="SP500-APPL-rating-change-summary"
                        value="SP500-APPL-rating-change-summary"
                      />
                      <ButtonCell
                        Icon={<PencilOutlineIcon className="w-3" />}
                      />
                    </TableRow>
                    <TableRow>
                      <EquityCell name="S&P 500" description="Walt Disney Co" />
                      <WhenCell label="Earnings" value="Announcement" />
                      <CheckboxCell
                        id="SP500-DIS-rating-change-sms"
                        name="SP500-DIS-rating-change-sms"
                        value="SP500-DIS-rating-change-sms"
                      />
                      <CheckboxCell
                        id="SP500-DIS-rating-change-email"
                        name="SP500-SP500-DIS-rating-change-email"
                        value="SP500-DIS-rating-change-email"
                      />
                      <CheckboxCell
                        id="SP500-DIS-rating-change-summary"
                        name="SP500-DIS-rating-change-summary"
                        value="SP500-DIS-rating-change-summary"
                      />
                      <ButtonCell
                        Icon={<PencilOutlineIcon className="w-3" />}
                      />
                    </TableRow>
                  </tbody>
                </Table>
              </div>
            </Accordion>
            <Accordion title="Dividents & Earnings (1)" premium={premium} />
            <Accordion
              title="Valuation Technical Analysis (0)"
              premium={premium}
            />
            <Accordion title="Ideas & News (0)" premium={premium} />
          </div>
        </Section>
      </div>
    </section>
  );
}

export default NotificationsSection;
