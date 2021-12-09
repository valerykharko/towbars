import React, {useCallback, useEffect, useState } from "react";
import { Slider, Switch } from "antd";
import { CatalogMenu, TreeMenu } from "components";

import styles from "./Catalog.module.scss";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

const Catalog = () => {
  const [active, setActive] = useState<boolean>(true);
  const [value, setValue] = useState<[number, number]>([0, 1000]);
  const [isBumperCutOut, setIsBumperCutOut] = useState<boolean>(false);

  const { manufacturers, stateToFind } = useTypedSelector(
    (state) => state.manufacturer
  );

  const { fetchManufacturers, setStateForFindAction } = useActions();

  const onChangeSlider = (value: [number, number]) => {
    setValue(value);
  };

  const onChangeSwitch = () => {
    setIsBumperCutOut(!isBumperCutOut);
  };

  useEffect(() => {
    fetchManufacturers();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <TreeMenu />
      </div>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.catalogTitle}>
            <button onClick={() => setActive(!active)}>
              <img src="/static/images/menu_catalog/list.png" alt="list-icon" />
              <span>Категории</span>
            </button>
          </div>
          {active && <CatalogMenu />}
          <div className={styles.price}>
            <div className={styles.priceTitle}>
              <span>Цена</span>
            </div>
            <div>
              <Slider
                min={0}
                max={1000}
                range={true}
                value={value}
                onChange={onChangeSlider}
              />
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputsItem}>
                <span>от</span>
                <input type="number" value={value[0]} />
              </div>
              <div className={styles.inputsItem}>
                <span>до</span>
                <input type="number" value={value[1]} />
              </div>
            </div>
          </div>
          <div className={styles.manufacturers}>
            <div className={styles.manufacturersTitle}>
              <span>Производитель</span>
            </div>
            <div className={styles.listOf}>
              {manufacturers.map((manufacturer) => (
                <div key={manufacturer.id}>
                  <input
                    type="checkbox"
                    checked={
                      !!stateToFind.find(
                        (elem) => elem?.name === manufacturer?.name
                      )
                    }
                    onChange={() => setStateForFindAction(manufacturer)}
                  />
                  <span>{manufacturer.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.ballTypes}>
            <div className={styles.ballTypesTitle}>
              <span>Тип шара</span>
            </div>
            <div className={styles.listOfBallTypes}>
              {manufacturers.map((manufacturer) => (
                <div key={manufacturer.id}>
                  <input
                    type="checkbox"
                    checked={
                      !!stateToFind.find(
                        (elem) => elem?.name === manufacturer?.name
                      )
                    }
                    onChange={() => setStateForFindAction(manufacturer)}
                  />
                  <span>{manufacturer.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.IsBumperCutOut}>
            <span>Вырез бампера</span>
            <Switch onChange={onChangeSwitch} />
          </div>
          <div className={styles.isImage}>
            <span>Товары с фото</span>
            <Switch onChange={onChangeSwitch} />
          </div>
          <div className={styles.searchButton}>
            <button>
              <span>Поиск</span>
            </button>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div>
            <div>
              <button></button>
            </div>
          </div>
          <div>
            <div>Сортировка</div>
            <div>
              <button>
                <img src="/static/images/catalog/menu.png" alt="menu-icon" />
              </button>
              <button>
                <img src="/static/images/catalog/list.png" alt="list-icon" />
              </button>
            </div>
          </div>
          <div>
            <span>Фаркопы</span>
            <span>Фаркопы</span>
            <span>Фаркопы</span>
            <span>Фаркопы</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
