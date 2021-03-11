import { useEffect } from "react";
import { Scrollbox, Toparrow } from "./scrolltop.elements";
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
  const showScrollTop = () => {
    if (window.scrollY >= 625) {
      document.getElementById("scrollTop").style.display = "flex";
    } else {
      document.getElementById("scrollTop").style.display = "none";
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", showScrollTop);
  }, []);

  return (
    <Scrollbox id="scrollTop" onClick={scrollToTop}>
      <Toparrow />
    </Scrollbox>
  );
};

export default ScrollTop;
