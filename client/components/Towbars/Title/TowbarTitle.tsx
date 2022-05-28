import React, { useEffect } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";
import { ITowbar } from "interfaces/towbar";

import styles from "./TowbarTitle.module.scss";

interface TowbarTitleProps {
  towbar: ITowbar;
}

const TowbarTitle = ({ towbar }: TowbarTitleProps) => {
  const { car } = useTypedSelector((state) => state.car);

  const { fetchCarById } = useActions();

  useEffect(() => {
    towbar?.autoId && fetchCarById(towbar?.autoId);
  }, []);

  return (
    <div className={styles.title}>
      <h1>
        Фаркоп на {car?.brand} {car?.model} {car?.generation}{" "}
        {car?.year_of_issue} {car?.bodyStyle}
      </h1>
    </div>
  );
};

export default TowbarTitle;
