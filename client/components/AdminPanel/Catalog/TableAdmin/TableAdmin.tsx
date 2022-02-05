import React, { useMemo, useState } from "react";
import { Table } from "antd";
// import { json } from "../db";

import styles from "./TableAdmin.module.scss";

const TableAdmin = () => {
  const [data, setData] = useState<[]>([]);
  const [valuePlN, setValuePlN] = useState<number>(0.614);
  const [valueRUB, setValueRUB] = useState<number>(0.034257);
  const [vendorCode, setVendorCode] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const columns = [
    {
      title: "Марка",
      dataIndex: "brand",
      width: "8%",
    },
    {
      title: "Модель",
      dataIndex: "model",
      width: "15%",
    },
    {
      title: "Поколение",
      dataIndex: "generation",
      width: "10%",
    },
    {
      title: "Год выпуска",
      dataIndex: "year_of_issue",
      width: "8%",
    },
    {
      title: "Тип кузова",
      dataIndex: "body_style",
      width: "10%",
    },
    {
      title: "Производитель",
      dataIndex: "manufacturer",
      width: "8%",
    },
    {
      title: "Артикул",
      dataIndex: "vendor_code",
      width: "7%",
    },
    {
      title: "Цена (Польша)",
      dataIndex: "price_pl",
      width: "7%",
    },
    {
      title: "Цена (Россия)",
      dataIndex: "price_ru",
      width: "7%",
    },
    {
      title: "Цена (Капитал)",
      dataIndex: "price_cap",
      width: "7%",
    },
  ];

  const array = useMemo(() => {
    const dataSource: any = [];
    const newDataWithSR: any = [];

    // json["Imiola"].map((item: any, index: any) => {
    //   dataSource.push({
    //     key: index,
    //     brand: item.brand,
    //     model: item.info,
    //     generation: null,
    //     year_of_issue: item.year_of_issue,
    //     body_style: null,
    //     manufacturer: "Imiola",
    //     vendor_code: item.vendor_code,
    //     price_pl: Math.round(item.main_price * valuePlN) + " BYN",
    //     price_ru: null,
    //     price_cap: null,
    //   });
    // });

    // json["Steinhov"].map((item: any, index: any) => {
    //   dataSource.push({
    //     key: 1000 + index,
    //     brand: item.brand,
    //     model: item.model,
    //     generation: null,
    //     year_of_issue: item.start_of + " ... " + item?.end_of,
    //     body_style: item.body_style,
    //     manufacturer: "Steinhov",
    //     vendor_code: item.vendor_code,
    //     price_pl: Math.round(item.price * valuePlN) + " BYN",
    //     price_ru: null,
    //     price_cap: null,
    //   });
    // });

    // json["Steinhov_Russia"].map((item: any) => {
    //   dataSource.map((elem: any) => {
    //     if (!newDataWithSR.includes(elem)) {
    //       if (elem.vendor_code === item.vendor_code) {
    //         return newDataWithSR.push({
    //           ...elem,
    //           price_ru: Math.round(item.price * valueRUB) + " BYN",
    //         });
    //       } else {
    //         return newDataWithSR.push(elem);
    //       }
    //     }
    //   });
    // });

    console.log(dataSource);

    return dataSource;
  }, []);

  const onClickHandler = () => {
    const arrayAfterFilter = array.filter((elem: any) => {
      elem.vendor_code === vendorCode &&
        console.log(elem.vendor_code, vendorCode);
      return elem.vendor_code === vendorCode;
    });
    setData(arrayAfterFilter);
  };

  const onClickWithRUB = () => {
    const arrayAfterFilter = array.filter(
      (elem: any) => elem.price_ru !== null
    );
    setData(arrayAfterFilter);
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Поиск по артиклу"
            value={vendorCode}
            onChange={(e) => setVendorCode(e.target.value)}
          />
          <button onClick={onClickHandler}>Поиск</button>
          <button onClick={onClickWithRUB}>Поиск c цена (Россия)</button>
        </div>
        <div className={styles.filters}>
          <div>
            <span>Курс PLN</span>
            <input
              type="number"
              value={valuePlN}
              onChange={(e) => setValuePlN(Number(e.target.value))}
            />
          </div>
          <div>
            <span>Курс RUB</span>
            <input
              type="number"
              value={valueRUB}
              onChange={(e) => setValueRUB(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <Table
        bordered
        dataSource={data.length > 0 ? data : array}
        columns={columns}
      />
    </div>
  );
};

export default TableAdmin;
