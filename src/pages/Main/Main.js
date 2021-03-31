import React from "react";
import { connect } from "react-redux";

import ServerForm from "../../components/Forms/Server-form/Server-form";
import { formCreate } from "../../services/forms-actions";

import "./Main.scss";

const Main = ({ createNewForm, currentAmount, formsInformation }) => {
	
  const handleConsole = () => {
    console.log(formsInformation);
  };

  return (
    <div className="main-page">
      <div className="main-page__container container">
        <div className="main-page__content">
          {currentAmount ? (
            Array(currentAmount)
              .fill("")
              .map((item, index) => {
                return (
                  <ServerForm
                    locationNumber={index}
                    formIndex={index}
                    key={formsInformation[index].unicIdForItems}
                    unicId={formsInformation[index].unicIdForItems}
                  />
                );
              })
          ) : (
            <div className="notification">
              У вас ещё нет ни одной тестовой формы
            </div>
          )}
        </div>

        <div className="main-page__btns">
          <button
            type="button"
            className=" main-page__btn btn btn_blue"
            onClick={createNewForm}
          >
            Добавить тестовую локацию
          </button>
          <button
            onClick={handleConsole}
            type="button"
            className=" main-page__btn btn btn_blue"
          >
            Вывести результат в консоль
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentAmount: state.forms.currentAmount,
  formsInformation: state.forms.formsInformation,
});

const mapDispatchToProps = (dispatch) => ({
  createNewForm: () => dispatch(formCreate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
