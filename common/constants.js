export const PROFILE_TABS = [
  { value: "profile", label: "Profile" },
  { value: "pricing", label: "Pricing & Billing" },
  { value: "notifications", label: "Notifications & Alerts", default: true },
  { value: "portfolio", label: "Portfolio " },
];

export const PROFILE_NOTIFICATION_OPTIONS = [
  {
    id: "investor-summary",
    title: "Investor Summary",
    description:
      "Important product updates from Equityset. New features and new research tools",
    badge: "Recommended",
  },
  {
    id: "important-updates",
    title: "Important updates",
    description:
      "Important product updates from Equityset. New features and new research tools",
  },
  {
    id: "marketing-campaigns",
    title: "Marketing Campaigns",
    description: "Offers, discounts, referrals and other exclusive offers",
  },
  {
    id: "account-and-security",
    title: "Account and Security",
    description: "Emails about suspicious login attempts",
  },
];

export const PROFILE_TRIGGERS_STOCK_RATING_CHANGES_TABLE = {
  headers: ["", "When", "SMS", "Email", "In Summary", "", ""],
};
