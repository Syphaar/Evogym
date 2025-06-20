// import React from 'react'
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import type { SelectedPage } from "../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    closeMenu?: () => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img src={Logo} alt="logo" />

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <button className="bg-primary-500 px-5 py-2 rounded-md font-semibold text-white transition duration-300 hover:bg-secondary-500 hover:text-black">Sign In</button>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>) : (
                            <button className="rounded-full bg-secondary-500 p-2 transition duration-300" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white transition duration-300" />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[16%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} closeMenu={() => setIsMenuToggled(false)} />
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} closeMenu={() => setIsMenuToggled(false)} />
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} closeMenu={() => setIsMenuToggled(false)} />
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} closeMenu={() => setIsMenuToggled(false)} />
                </div>
            </div>
        )}
    </nav>   
  )
}

export default Navbar;