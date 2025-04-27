import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";

const CheckOut = () => {
  return (
    <>
      <h2>Check out</h2>
      <div className="general-form">
        <p>
          Registra la hora de salida, si lo consideras necesario puedes escribir
          un comentario
        </p>
        <CheckOutForm />
      </div>
    </>
  );
};

export default CheckOut;
