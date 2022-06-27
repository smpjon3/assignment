import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Avatar from "@/components/pages/markets/profile/Avatar";
import Tabs from "@/components/Tabs";
import Tab from "@/components/Tabs/Tab";
import NotificationsSection from "@/components/pages/markets/profile/NotificationsSection";

import { PROFILE_TABS } from "@/common/constants";

function Profile() {
  const [activeTabValue, setActiveTabValue] = useState(
    PROFILE_TABS.find((tab) => tab.default)?.value ?? PROFILE_TABS[0].value
  );

  function handleTabSelection(value) {
    if (value !== activeTabValue) setActiveTabValue(value);
  }

  return (
    <div>
      <Breadcrumbs />
      <div className="container mx-auto flex flex-col mt-20">
        <header className="w-full py-6 pl-5 pr-6 flex items-center gap-[19px]">
          <Avatar />
          <div className="flex flex-col flex-auto">
            <h1 className="p-0 m-0 font-sans font-bold text-2xl text-grayscale-900">
              anastako21
            </h1>
            <p className="m-0 p-0 font-sans text-sm text-gray-2 select-none">
              <span>
                This is used to display your name publically across the
                platform.&nbsp;
              </span>
              <span className="font-medium text-sm text-gray-0">
                You can change the public username only once.
              </span>
            </p>
          </div>
          <button className="text-primary underline border-none font-sans font-medium text-base">
            Edit Username
          </button>
        </header>
        <div className="w-full pl-5 pr-6 mt-12">
          <Tabs value={activeTabValue} onChange={handleTabSelection}>
            {PROFILE_TABS.map((tab) => (
              <Tab key={tab.value} {...tab} />
            ))}
          </Tabs>
        </div>
        <main className="w-full mt-[83px] pb-[180px] pl-5 pr-4">
          <div className="w-full px-10 pt-4 bg-gray-6 pb-[42px]">
            <NotificationsSection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
