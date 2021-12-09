import React, { useEffect, useRef, useState } from "react";

const SortBlock = () => {
  const sortItems = [
    { name: "Популярные" },
    { name: "Новые" },
    { name: "Сначала дешевые" },
    { name: "Сначала дорогие" },
    { name: "По рейтингу" },
  ];
  const [value, setValue] = useState("Популярные");
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutSideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);
  }, []);

  return (
    <div ref={sortRef}>
      <div>
        <span onClick={toggleVisiblePopup}>{activeName}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeSortType === obj.type ? "active" : ""}
                  onClick={() => onSelectItem(obj)}
                  key={obj.name}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBlock;
