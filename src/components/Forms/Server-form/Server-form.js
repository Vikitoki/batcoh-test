import React from "react";

import DeleteImg from "../../../images/garbage.svg";

const ServerForm = () => {
  return (
    <div className="form">
      <div className="form__top">
        <div className="form__title">
          <h2>Тестовая локация 1</h2>
        </div>
        <button type="button" className="form__delete">
          <img src={DeleteImg} alt="" />
        </button>
      </div>
      <div className="form__content">
        <div className="form__row">
          <div className="form__item">
            <label className="form__label">
              Локация
            </label>
            <div className="form__select form__select_location">
              <select name="location" id="location">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="form__item">
            <label className="form__label">
              Среда
            </label>
            <div className="form__select form__select_enviroment">
              <select
                name="enviroment"
                id="enviroment"
                className="form__select"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="form__item">
            <label className="form__label">Серверы</label>
            <ul className="form__list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <div className="form__row">
          <div className="form__item form__item_hint">
            <label htmlFor="hint" className="form__label form__label_hint">
              Подсказка
            </label>
            <div className="form__input">
              <input
                name="hint"
                type="text"
                id="hint"
                placeholder="Комментарий по локации"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerForm;
