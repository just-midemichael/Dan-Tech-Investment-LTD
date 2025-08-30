export type PolicyItem = {
  item?: string;
  description?: string;
};

export type PolicySection = {
  title: string;
  description: string;
  content?: PolicyItem[] | string[];
};

export const privacyPolicy = [
  {
    title: "1. Information We Collect",
    description:
      "We may collect and process the following categories of personal data:",
    content: [
      {
        item: "Identity Data:",
        description:
          "Full name, date of birth, gender, nationality, BVN (where applicable)",
      },
      {
        item: "Contact Data:",
        description:
          "Email address, phone number, residential/business address",
      },
      {
        item: "Financial Data:",
        description:
          "Bank account details, investment history, transaction records",
      },
      {
        item: "Technical Data:",
        description: "IP address, browser type, device information, cookies",
      },
      {
        item: "Usage Data:",
        description:
          "How you interact with our website, services, and communications",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    description: "We use your personal data for the following purposes:",
    content: [
      "To provide and manage investment services",
      "To verify your identity and comply with KYC/AML regulations",
      "To process transactions and manage your account",
      "To send updates, newsletters, and promotional materials (with your consent)",
      "To improve our services and user experience",
      "To comply with legal obligations and regulatory requirements",
    ],
  },
  {
    title: "3. Legal Basis for Processing",
    description:
      "We process your personal data based on one or more of the following legal grounds:",
    content: [
      "Your consent",
      "Performance of a contract",
      "Compliance with legal obligations",
      "Our legitimate interests, such as fraud prevention and service improvement",
    ],
  },
  {
    title: "4. Data Sharing and Disclosure",
    description: "We may share your data with:",
    content: [
      "Regulatory bodies such as the Nigerian Data Protection Commission (NDPC) and SEC",
      "Financial institutions and payment processors",
      "Third-party service providers (e.g., IT support, analytics)",
      "Legal and tax advisors",
      "Law enforcement agencies when required by law",
      "We ensure that all third parties adhere to strict data protection standards.",
    ],
  },
  {
    title: "5. International Data Transfers",
    description:
      "If your data is transferred outside Nigeria, we ensure that appropriate safeguards are in place, such as:",
    content: [
      "Standard Contractual Clauses",
      "Adequacy decisions",
      "Your explicit consent",
    ],
  },
  {
    title: "6. Data Retention",
    description:
      "We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. When no longer needed, your data will be securely deleted or anonymized.",
  },
  {
    title: "7. Your Rights",
    description: "Under the NDPA, you have the right to:",
    content: [
      "Access your personal data",
      "Request correction or deletion",
      "Object to processing",
      "Withdraw consent at any time",
      "Lodge a complaint with the NDPC",
      "To exercise your rights, contact us at: 📧 privacy@dan-techinvestment.com, 📞 +234 [Insert Phone Number]",
    ],
  },
  {
    title: "8. Cookies and Tracking Technologies",
    description:
      "Our website uses cookies to enhance user experience and analyze traffic. You can manage your cookie preferences through your browser settings.",
  },
  {
    title: "9. Changes to This Policy",
    description:
      "We may update this Privacy Policy periodically. Any changes will be posted on our website with the updated effective date.",
  },
];
