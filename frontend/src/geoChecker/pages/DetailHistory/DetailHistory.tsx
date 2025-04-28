import React from "react";
import "./DetailHistory.css";
import DetailHistoryForm from "../../components/DetailHistoryForm/DetailHistoryForm";

const DetailHistory: React.FC = () => {
  return (
    <>
      <h2>Detalle de registro</h2>
      <div className="general-form">
        <p>Selecciona la fecha que deseas consultar</p>
        <DetailHistoryForm />
      </div>
    </>
  );
};

export default DetailHistory;
