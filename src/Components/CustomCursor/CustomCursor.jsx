import { React, useRef, useEffect } from "react";
import styles from "./customCursor.module.scss";
function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef.current?.clientWidth / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
    const allLinks = document.getElementsByTagName("a");
    const cursorDot = document.getElementById("dot");
    const appCursor = document.getElementById("appCursor");
  

    Array.from(allLinks).forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursorDot.classList.add("linkGrow");
        cursorDot.style.transform = "scale(7)";
        cursorDot.style.opacity = ".3"; 
      });
    });
    Array.from(allLinks).forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("linkGrow");
        cursorDot.style.opacity = "1"; 
        cursorDot.style.transform = "scale(1)";
      });
    });
  }, []);

  return (
    <>
      <div id="appCursor" className={styles.appCursor} ref={cursorRef}>
        <div id="dot" className={styles.dot}></div>
      </div>
    </>
  );
}

export default CustomCursor;
