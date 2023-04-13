import { useLocation } from "react-router-dom";
import IAMLogo from "../assets/IAMLogo.png";
import { BsArrowRightCircle } from "react-icons/bs";

const Navigation = () => {
  const location = useLocation();

  return (
    <div id="navContainer">
      <div id="sideNavigation">
        <div id="logoBox">
          <img src={IAMLogo} alt="I Ate A Mech" />
        </div>
        <div id="IAteAMech">IAteAMech</div>
        <div id="locations">
          <a href="">
            <div>About</div>
          </a>
          <a href="">
            <div>Contact Us</div>
          </a>
          <a href="">
            <div>Home</div>
          </a>
        </div>
      </div>
      <div id="arrowOut">
        <BsArrowRightCircle size={36} />
      </div>
    </div>
  );
};

export default Navigation;
