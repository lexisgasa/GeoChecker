import ReturnButton from "../../../components/Buttons/ReturnButton";
import CheckInForm from "../../components/CheckInForm/CheckInForm";

const CheckIn = () => {
  return (
    <>
      <h2>Check in</h2>
      <div className="general-form">
        <p>
          Registra la hora de entrada, si lo consideras necesario puedes
          escribir un comentario
        </p>
        <CheckInForm />
        <div className="button-group">
          <button type="submit" className="action-button">
            Check in
          </button>
          <ReturnButton />
        </div>
      </div>
    </>
  );
};

export default CheckIn;
