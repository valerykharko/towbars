import React from "react";
import { useRouter } from "next/router";

import styles from "./TreeMenu.module.scss";

const TreeMenu = () => {
  const router = useRouter();

  const link = router.asPath.slice(1) === "catalog" ? "Каталог" : "Фаркопы";

  return (
    <div className={styles.container}>
      <div className={styles.homeLink}>
        <img src="/static/images/tree_menu/home-icon.png" alt="home-icon" />
      </div>
      <div className={styles.separator}>
        <img src="/static/images/tree_menu/diag-line.png" alt="diag-line" />
      </div>
      <div className={styles.link}>
        <span>{link}</span>
      </div>
    </div>
  );
};

export default TreeMenu;
