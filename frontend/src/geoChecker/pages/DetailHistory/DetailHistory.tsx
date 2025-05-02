import React from "react";
import DetailHistoryForm from "../../components/DetailHistoryForm/DetailHistoryForm";

const DetailHistory = (): React.ReactElement => {
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
