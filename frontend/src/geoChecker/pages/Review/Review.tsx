import ReviewForm from "../../components/ReviewForm/ReviewForm";

const Review = (): React.ReactElement => {
  return (
    <>
      <h2>Enviar revisión</h2>
      <div className="general-form">
        <p>
          Si ha habido algún error o deseas hacer una corrección del tiempo
          puedes enviar una petición de revisión a tu superior rellenando los
          siguientes datos
        </p>
        <ReviewForm />
      </div>
    </>
  );
};

export default Review;
