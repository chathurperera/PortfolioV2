import React from "react";
import styles from "./work.module.scss";

export default function Project({
  projectTitle,
  techStack,
  imageUrl,
  description,
  previewUrl,
  codeUrl,
}) {
  // const techArray = props.techStack;
  // const techList =  techArray.map((tech) => {
  //     <span>{tech}</span>
  // })
  const techList = techStack?.map((tech, index) => (
    <span key={index}>{tech}</span>
  ));

  return (
    <div>
      <div className={styles.project}>
        <div className={styles.projectImage}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className={styles.projectContent}>
          <div className={styles.projectTitle}>
            <p>{projectTitle}</p>
            <div className={styles.iconsWrap}>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <div className={styles.icon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0242 3.50437C14.6308 4.23237 14.9335 5.08171 14.9335 6.05237C14.9335 9.57037 12.9322 10.6017 11.0515 10.905C11.2942 11.3297 11.3548 11.815 11.3548 12.3004V14.787C11.3548 15.0904 11.1728 15.2724 10.9302 15.2724C10.8662 15.2733 10.8027 15.2613 10.7434 15.2373C10.6841 15.2132 10.6302 15.1775 10.585 15.1322C10.5397 15.087 10.504 15.0331 10.4799 14.9738C10.4559 14.9145 10.4439 14.851 10.4448 14.787V12.3004C10.4768 12.0461 10.4496 11.7879 10.3654 11.5459C10.2812 11.3039 10.1423 11.0846 9.95949 10.905L10.2628 10.1164C12.1435 9.87371 14.0848 9.26704 14.0848 5.99171C14.0848 5.20304 13.7815 4.47504 13.2355 3.86837L13.1142 3.38371C13.3449 2.8024 13.3661 2.15894 13.1742 1.56371C12.8715 1.62371 12.2648 1.74571 11.2342 2.47371L10.8695 2.53371C9.43667 2.16988 7.93565 2.16988 6.50283 2.53371L6.13816 2.47371C5.04749 1.80637 4.44083 1.62437 4.13683 1.62437C3.95483 2.23104 3.95483 2.89771 4.19683 3.44437L4.07616 3.92904C3.46949 4.53571 3.16616 5.32437 3.16616 6.05237C3.16616 9.26704 4.98616 9.93437 6.98749 10.177L7.23016 10.9657C6.86616 11.3297 6.68416 11.815 6.74483 12.3004V14.8477C6.74573 14.9117 6.73379 14.9752 6.70971 15.0345C6.68564 15.0938 6.64992 15.1476 6.60468 15.1929C6.55943 15.2381 6.50557 15.2739 6.44628 15.2979C6.38699 15.322 6.32348 15.3339 6.25949 15.333C6.19551 15.3339 6.132 15.322 6.07271 15.2979C6.01342 15.2739 5.95956 15.2381 5.91431 15.1929C5.86907 15.1476 5.83335 15.0938 5.80928 15.0345C5.7852 14.9752 5.77326 14.9117 5.77416 14.8477V13.453C3.77283 13.8777 2.98416 12.8464 2.37749 12.0584C2.07416 11.6944 1.83149 11.391 1.52816 11.3304C1.46816 11.2697 1.28549 11.027 1.34616 10.7844C1.40683 10.5417 1.64949 10.3597 1.89283 10.481C2.49949 10.6024 2.86283 11.0877 3.22616 11.5124C3.77283 12.2404 4.31883 12.907 5.95616 12.5437V12.301C5.89616 11.8157 6.01683 11.3304 6.25949 10.9057C4.43949 10.5417 2.31683 9.51037 2.31683 6.05304C2.31683 5.08237 2.62016 4.23304 3.22683 3.50504C3.04483 2.65637 3.10549 1.74637 3.40883 1.01837L3.71216 0.775705C3.83349 0.715039 4.68283 0.533039 6.44083 1.62437C7.89439 1.26042 9.41526 1.26042 10.8688 1.62437C12.5682 0.471705 13.4782 0.653039 13.5995 0.714372L13.9028 0.957039C14.2062 1.80637 14.2668 2.65571 14.0242 3.50437Z"
                      fill="#111111"
                    />
                  </svg>
                </div>
              </a>
              <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                <div className={styles.icon}>
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8125 8.125H10.9375C10.8215 8.125 10.7102 8.1678 10.6281 8.24399C10.5461 8.32017 10.5 8.42351 10.5 8.53125V11.375H1.75V3.25H5.6875C5.80353 3.25 5.91481 3.2072 5.99686 3.13101C6.07891 3.05483 6.125 2.95149 6.125 2.84375V2.03125C6.125 1.92351 6.07891 1.82017 5.99686 1.74399C5.91481 1.6678 5.80353 1.625 5.6875 1.625H1.3125C0.964403 1.625 0.630564 1.7534 0.384422 1.98196C0.138281 2.21052 0 2.52052 0 2.84375L0 11.7812C0 12.1045 0.138281 12.4145 0.384422 12.643C0.630564 12.8716 0.964403 13 1.3125 13H10.9375C11.2856 13 11.6194 12.8716 11.8656 12.643C12.1117 12.4145 12.25 12.1045 12.25 11.7812V8.53125C12.25 8.42351 12.2039 8.32017 12.1219 8.24399C12.0398 8.1678 11.9285 8.125 11.8125 8.125ZM13.3438 0H9.84375C9.25941 0 8.96738 0.657871 9.37891 1.04102L10.3559 1.94822L3.69141 8.13439C3.63023 8.19101 3.58168 8.25828 3.54856 8.33235C3.51544 8.40642 3.49839 8.48583 3.49839 8.56604C3.49839 8.64624 3.51544 8.72565 3.54856 8.79972C3.58168 8.87379 3.63023 8.94106 3.69141 8.99768L4.31129 9.57227C4.37226 9.62908 4.4447 9.67415 4.52447 9.70491C4.60424 9.73566 4.68976 9.7515 4.77613 9.7515C4.8625 9.7515 4.94803 9.73566 5.02779 9.70491C5.10756 9.67415 5.15001 9.62908 5.24098 9.57227L11.9022 3.38508L12.8789 4.29102C13.2891 4.67188 14 4.40527 14 3.85938V0.609375C14 0.447759 13.9309 0.292762 13.8078 0.178482C13.6847 0.0642018 13.5178 0 13.3438 0Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <p className={styles.techStack}>{techList}</p>
          <p className={styles.description}>{description}</p>
          {/* <p className={styles.learnMore}>Learn More </p> */}
        </div>
      </div>
    </div>
  );
}