import Link from "next/link";
import React, { useEffect } from "react";
import { CallBlock } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

import styles from "./Header.module.scss";

const Header = () => {
  const { isAuth } = useTypedSelector((state) => state.user);

  const { setIsAuth, checkAuth } = useActions();

  useEffect(() => {
    async function checkFullAuth() {
      if (localStorage.getItem("token")) {
        checkAuth();
        setIsAuth(true);
      }
    }
    checkFullAuth();
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <Link href={"/"}>
          <div className={styles.leftBlock}>
            <img
              className={styles.logo}
              src="/static/images/logo.png"
              alt="logo-icon"
            />
          </div>
        </Link>
        <div className={styles.centralBlock}>
          <CallBlock />
          <input type="text" placeholder="Поиск" />
        </div>
        <div className={styles.rightBlock}>
          <Link href={"/profile/auto"}>
            <div className={styles.blockAuto}>
              <img src="/static/images/auto.png" alt="" />
              <span>Ваш авто</span>
            </div>
          </Link>
          {isAuth ? (
            <Link href={"/profile"}>
              <div className={[styles.block, styles.blockActive].join(" ")}>
                <img src="/static/images/user.png" alt="user-icon" />
                <span>Профиль</span>
              </div>
            </Link>
          ) : (
            <Link href={"/auth/login"}>
              <div className={styles.block}>
                <img src="/static/images/login.png" alt="login-icon" />
                <span>Войти</span>
              </div>
            </Link>
          )}
          <Link href={"/cart"}>
            <div className={styles.blockCart}>
              <img src="/static/images/cart.png" alt="" />
              <span className={styles.cartText}>Корзина</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
