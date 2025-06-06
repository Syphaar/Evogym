import AnchorLink from "react-anchor-link-smooth-scroll"
import type { SelectedPage } from "../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  closeMenu?: () => void;
}

const Link = ({ page, selectedPage, setSelectedPage, closeMenu }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""} transition duration-300 hover:text-primary-300`} 
     href={`#${lowerCasePage}`} onClick={() => { console.log("Link clicked, closing menu");
        setSelectedPage(lowerCasePage);
        closeMenu?.(); // close side menu
      }}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;