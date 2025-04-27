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
      </div>
    </>
  );
};

export default CheckIn;
