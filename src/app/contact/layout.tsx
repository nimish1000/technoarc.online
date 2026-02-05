import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - TechnoArc",
  description: "Get in touch with TechnoArc for your technology project needs",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
