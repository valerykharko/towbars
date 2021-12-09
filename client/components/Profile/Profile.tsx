import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { useTypedSelector } from "hooks/useTypedSelector";

import PhoneInput from "react-phone-input-2";
import ru from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import styles from "./Profile.module.scss";
import { Popover } from "antd";

const Profile = () => {
  const routes = [
    { index: 0, link: "profile/orders" },
    { index: 1, link: "profile/drafts" },
    { index: 2, link: "profile/favorites" },
    { index: 3, link: "profile/notifications" },
    { index: 4, link: "profile/comment" },
    { index: 5, link: "profile/settings" },
  ];
  const [active, setActive] = useState("profile");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { user } = useTypedSelector((state) => state.user);

  useEffect(() => {
    setActive(Router.asPath);
  }, []);

  const content = (
    <div>
      <span>
        Для активации аккаунта перейдите по ссылке, напраленной на Ваш Email
      </span>
    </div>
  );
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.header}>
          <div className={styles.mainInfo}>
            <div className={styles.left}>
              <div>
                <img
                  src="/static/images/profile/user-profile.png"
                  alt="user-profile"
                />
              </div>
              <span>
                {user?.firstName} {user?.secondName}
              </span>
            </div>
            <div className={styles.right}>
              <button>
                <img src="/static/images/profile/edit.png" alt="edit-icon" />
                <span>Изменить</span>
              </button>
              {user?.role === "ADMIN" && (
                <Link href={"/admin-panel"}>
                  <button>
                    <img
                      src="/static/images/profile/admin-panel.png"
                      alt="admin-panel"
                    />
                    <span>Админ-панель</span>
                  </button>
                </Link>
              )}
              <button>
                <img src="/static/images/profile/exit.png" alt="exit-icon" />
                <span>Выйти</span>
              </button>
            </div>
          </div>
          <div className={styles.otherInfo}>
            <div>
              <div className={styles.phone}>
                <span>Телефон:</span>
                <PhoneInput
                  localization={ru}
                  country={"by"}
                  onlyCountries={["by", "ru", "pl", "ua"]}
                  masks={{ by: "(..) ...-..-..", at: "(....) ...-...." }}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  countryCodeEditable={false}
                  inputStyle={{
                    width: "200px",
                  }}
                />
              </div>
              <div className={styles.email}>
                <span>Email:</span>
                <span>{user?.email}</span>
              </div>
            </div>
            <div className={styles.lastInfo}>
              {user?.role === "ADMIN" && (
                <div className={styles.isAdmin}>
                  <span>role:</span>
                  <span>ADMIN</span>
                  <img
                    src="/static/images/profile/admin.png"
                    alt="admin-icon"
                  />
                </div>
              )}
              {user?.isActivated ? (
                <div className={styles.idActivated}>
                  <span>Ваш аккаунт успешно активирован</span>
                  <img
                    src="/static/images/profile/checked.png"
                    alt="checked-icon"
                  />
                </div>
              ) : (
                <>
                  <Popover content={content}>
                    <div>
                      <span>Ваш аккаунт не активирован</span>
                      <img
                        src="/static/images/profile/cancel.png"
                        alt="cancel-icon"
                      />
                    </div>
                  </Popover>
                </>
              )}
            </div>
          </div>
          <div className={styles.links}>
            <Link href={"/profile"}>
              <button
                className={
                  active === "/profile" ? styles.activeLink : styles.link
                }
              >
                <span>Заказы</span>
              </button>
            </Link>
            <Link href={"/profile/orders-history"}>
              <button
                className={
                  active === "/profile/orders-history"
                    ? styles.activeLink
                    : styles.link
                }
              >
                <span>История заказов</span>
              </button>
            </Link>
            <Link href={"/profile/favorites"}>
              <button
                className={
                  active === "/profile/favorites"
                    ? styles.activeLink
                    : styles.link
                }
              >
                <span>Избранное</span>
              </button>
            </Link>
            <Link href={"/profile/feedbacks"}>
              <button
                className={
                  active === "/profile/feedbacks"
                    ? styles.activeLink
                    : styles.link
                }
              >
                <span>Отзывы и оценки</span>
              </button>
            </Link>
            <Link href={"/profile/auto"}>
              <button
                className={
                  active === "/profile/auto" ? styles.activeLink : styles.link
                }
              >
                <span>Автомобиль</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
