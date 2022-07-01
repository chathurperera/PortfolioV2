import React from 'react';
import styles from './sectionTitle.module.scss';
export default function SectionTitle(props) {
  return (
    <div className={styles.titleWrap}>
        <h3>
          {props.title} <hr />
        </h3>
    </div>
  )
}
