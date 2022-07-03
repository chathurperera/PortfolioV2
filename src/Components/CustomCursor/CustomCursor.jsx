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
        console.log('cursorDot.classList entered',cursorDot.classList) 
        cursorDot.style.transform = "scale(7)";
        cursorDot.style.opacity = ".3"; 
      });
    });
    Array.from(allLinks).forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("linkGrow");
        console.log('cursorDot.classList left',cursorDot.classList);
        // cursorDot.style.width = "10px";
        // cursorDot.style.height = "10px"; 
        cursorDot.style.opacity = "1"; 
        cursorDot.style.transform = "scale(1)";
      });
    });

    // return allLinks.forEach((element) => {
    //   element.addEventListener("mouseleave", () => {
    //     cursorDot.style.mixBlendMode = "normal";
    //     cursorDot.style.transform = "scale(1)";
    //   });
    // });
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
