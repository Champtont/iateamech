import { useLocation } from "react-router-dom";
import IAMLogo from "../assets/IAMLogo.png";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const checkOpen = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div id="navContainer" className={isOpen ? "showNav" : ""}>
      <div id="sideNavigation">
        <div id="logoBox">
          <img src={IAMLogo} alt="I Ate A Mech" />
        </div>
        <div id="IAteAMech">IAteAMech</div>
        <hr style={{ width: isOpen ? "30%" : "" }} />
        <div id="locations">
          <a href="/About" className={isOpen ? "navAnimation" : "navClosed"}>
            <div
              className={location.pathname === "/About" ? "selectedPage" : ""}
            >
              About
            </div>
          </a>
          <a
            href="/ContactUs"
            className={isOpen ? "navAnimation" : "navClosed"}
            style={{ animationDelay: isOpen === false ? "0s" : "" }}
          >
            <div
              className={
                location.pathname === "/ContactUs" ? "selectedPage" : ""
              }
            >
              Contact Us
            </div>
          </a>
          <a
            href="/"
            className={isOpen ? "navAnimation" : "navClosed"}
            style={{ animationDelay: isOpen === false ? "0s" : "" }}
          >
            <div className={location.pathname === "/" ? "selectedPage" : ""}>
              Home
            </div>
          </a>
        </div>
      </div>
      <div
        id="arrowOut"
        onClick={() => {
          checkOpen();
        }}
      >
        {isOpen ? (
          <BsArrowRightCircle size={36} className={isOpen ? "navOpened" : ""} />
        ) : (
          <BsArrowLeftCircle
            size={36}
            className={isOpen === false ? "navOpened" : ""}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
