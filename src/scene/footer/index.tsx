import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-">
        <div className="justify-content mx-auto w-5/6 gap-16 py-10 sm:py-16 md:flex md:py-20">
            <div className="basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Find your rhythm, push your limits, and grow stronger every day. Each class 
                    is built to support your goals in a space that feels both motivating and welcoming.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-10 basis-1/4 md:mt-0">
                <h4 className="font-bold text-lg">Links</h4>
                <div className="flex flex-col">
                    <AnchorLink href="#home" className="mt-4 cursor-pointer w-[23%]"><p>Home</p></AnchorLink>
                    <AnchorLink href="#benefits" className="mt-4 cursor-pointer w-[28%]">Benefits</AnchorLink>
                    <AnchorLink href="#ourclasses" className="mt-4 cursor-pointer w-[40%]">Our Classes</AnchorLink>
                    <AnchorLink href="#contactus" className="mt-4 cursor-pointer w-[38%]">Contact Us</AnchorLink>
                </div>
            </div>
            <div className="mt-10 basis-1/4 md:mt-0">
                <h4 className="text-lg font-bold">Contact Us</h4>
                <p className="my-5">742 Redwood Grove Avenue
                    Springfield Heights, CA 92874.
                </p>
                <p>(333)425-6825</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;