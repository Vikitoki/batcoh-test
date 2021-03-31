import React from "react";

import ServerForm from "../../components/Forms/Server-form/Server-form";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main-page">
      <div className="main-page__container container">
        <ServerForm />
      </div>
    </div>
  );
};

export default Main;
