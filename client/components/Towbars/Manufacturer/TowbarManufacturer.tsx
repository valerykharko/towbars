import React, { useEffect } from "react";
import { Tooltip } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarManufacturer.module.scss";

interface TowbarTitleProps {
  towbar: ITowbar;
}

const TowbarManufacturer = ({ towbar }: TowbarTitleProps) => {
  const { manufacturer } = useTypedSelector((state) => state.manufacturer);

  const { fetchManufacturerById } = useActions();

  useEffect(() => {
    towbar?.manufacturerId && fetchManufacturerById(towbar?.manufacturerId);
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.vendorCode}>
        <span>Артикул: </span>
        <span>{towbar?.vendor_code}</span>
      </div>
      <div className={styles.manufacturer}>
        <div className={styles.manufacturerInfo}>
          <div>
            <span>Производитель: </span>
            <span>Страна производства: </span>
          </div>
          <div>
            <span>{manufacturer?.name}</span>
            <span>{manufacturer?.country}</span>
          </div>
        </div>
        {manufacturer?.img && (
          <div className={styles.manufacturerImage}>
            <img
              src={process.env.API_URL! + "/" + manufacturer?.img[0]}
              alt=""
            />
          </div>
        )}
      </div>
      <div className={styles.toInfo}>
        <span>Перейти к характеристикам</span>
      </div>
      <div className={styles.pdf}>
        {towbar?.doc && (
          <Tooltip title="Инструкция по установке">
            <a
              href={process.env.API_URL! + "/" + towbar?.doc[0]}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/static/images/icons/pdf/pdf.png" alt="pdf-icon" />
            </a>
          </Tooltip>
        )}
        {manufacturer?.doc && (
          <Tooltip title="Сертификат производителя">
            <a
              href={process.env.API_URL! + "/" + manufacturer?.doc[0]}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/static/images/icons/pdf/certificate.png"
                alt="certificate-icon"
              />
            </a>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default TowbarManufacturer;
