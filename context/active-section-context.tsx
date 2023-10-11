import { useState } from "react";
import { links } from "@/lib/data";
import { type } from "os";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProvider = {
  children: React.ReactNode;
};
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProvider) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return children;
}
