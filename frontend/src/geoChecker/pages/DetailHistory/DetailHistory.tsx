import React from "react";
import ReturnButton from "../../../components/Buttons/ReturnButton";
import "./DetailHistory.css";

const DetailHistory: React.FC = () => {
  return (
    <>
      <h2>Detalle de registro</h2>
      <div className="general-form">
        <p>Selecciona la fecha que deseas consultar</p>
        <form className="form-group">
          <div className="button-group">
            <label htmlFor="start-date">Desde</label>
            <input type="date" id="start-date" />
          </div>
          <div className="button-group">
            <label htmlFor="end-date">Hasta</label>
            <input type="date" id="end-date" />
          </div>

          <div className="button-group">
            <button type="submit" className="action-button">
              Visualizar
            </button>
            <ReturnButton />
          </div>
        </form>
      </div>
    </>
  );
};

export default DetailHistory;
