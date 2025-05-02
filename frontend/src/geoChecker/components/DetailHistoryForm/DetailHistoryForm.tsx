import ReturnButton from "../../../components/Buttons/ReturnButton";

const DetailHistoryForm = (): React.ReactElement => {
  // TODO logica
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="start-date">Desde</label>
          <input type="date" id="start-date" />
        </div>
        <div className="form-group">
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
    </>
  );
};

export default DetailHistoryForm;
