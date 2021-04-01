import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import DeleteImg from "../../../images/garbage.svg";
import ModernImg from "../../../images/pencil.svg";
import CompleteImg from "../../../images/check.svg";

import getDataFromServer from "../../../services/get-data-from-server";
import { formDelete, formModified } from "../../../services/forms-actions";

const ServerForm = ({
  getData,
  locations,
  envs,
  servers,
  unicId,
  deleteCurrentForm,
  locationNumber,
  formIndex,
  modifiedCurrentForm,
  error,
  loading,
}) => {
  const [visibleComplite, setVisibleComplite] = useState(false);
  const [location, setLocation] = useState("testenter.ru_01");
  const [enviroment, setEnviroment] = useState("Test_192.168.112.23");
  const [hintValue, setHintValue] = useState("");

  useEffect(() => {
    getData();
    return () => {};
    // eslint-disable-next-line
  }, []);

  const handleComplite = () => {
    setVisibleComplite(false);
    modifiedCurrentForm(formIndex, location, enviroment, hintValue);
  };

  const deleteForm = () => {
    deleteCurrentForm(unicId);
  };

  return (
    <div className={visibleComplite ? "form active" : "form"}>
      <div className="form__top">
        <div className="form__title">
          <h2>Тестовая локация {locationNumber + 1}</h2>
        </div>
        <div className="form__actions">
          {!visibleComplite ? (
            <button
              onClick={deleteForm}
              type="button"
              className="form__btn form__btn_delete"
            >
              <img src={DeleteImg} alt="" />{" "}
            </button>
          ) : null}
          {visibleComplite ? (
            <button
              onClick={handleComplite}
              type="button"
              className="form__btn form__btn_complete"
            >
              <img src={CompleteImg} alt="" />
            </button>
          ) : (
            <button
              onClick={() => setVisibleComplite(true)}
              type="button"
              className="form__btn form__btn_modern"
            >
              <img src={ModernImg} alt="" />
            </button>
          )}
        </div>
      </div>
      {loading ? (
        <div className="notification">Загрузка данных с сервера</div>
      ) : error ? (
        <div className="notification">
          Произошла ошибка выгрузки данных, повторите попытку в следующей жизни! А если серьёзно проверьте README файл :)
        </div>
      ) : (
        <div className="form__content">
          <div className="form__row">
            <div className="form__item">
              <label className="form__label">Локация</label>
              <div className="form__select form__select_location">
                <select
                  className={visibleComplite ? "active" : null}
                  name="location"
                  id="location"
                  disabled={!visibleComplite}
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                >
                  {locations.map((item) => {
                    return (
                      <option key={`${item.locationID}`} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form__item">
              <label className="form__label">Среда</label>
              <div className="form__select form__select_enviroment">
                <select
                  className={visibleComplite ? "active" : null}
                  name="enviroment"
                  id="enviroment"
                  value={enviroment}
                  disabled={!visibleComplite}
                  onChange={(event) => setEnviroment(event.target.value)}
                >
                  {envs.map((item) => {
                    return (
                      <option key={item.envID} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form__item">
              <label className="form__label">Серверы</label>
              <ul className="form__list">
                {servers.map((server) => {
                  return (
                    <li key={server.serverID}>
                      {server.name}
                      <span>,</span>
                    </li>
                  );
                })}
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
                  className={visibleComplite ? "active" : null}
                  disabled={!visibleComplite}
                  name="hint"
                  type="text"
                  id="hint"
                  value={hintValue}
                  placeholder="Комментарий по локации"
                  onChange={(event) => {
                    setHintValue(event.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  locations: state.getDataFromServer.locations,
  loading: state.loadingAndError.loading,
  error: state.loadingAndError.error,
  envs: state.getDataFromServer.envs,
  servers: state.getDataFromServer.servers,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataFromServer()),
  deleteCurrentForm: (unicId) => dispatch(formDelete(unicId)),
  modifiedCurrentForm: (index, location, enviroment, hintValue) =>
    dispatch(formModified(index, location, enviroment, hintValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
