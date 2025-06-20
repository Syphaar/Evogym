import type React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
   <AnchorLink className="rounded-md bg-secondary-500 px-6 py-2 font-semibold transition duration-300 hover:bg-primary-500 hover:text-white md:px-10"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
   >
        {children}
   </AnchorLink>
  )
}

export default ActionButton; 