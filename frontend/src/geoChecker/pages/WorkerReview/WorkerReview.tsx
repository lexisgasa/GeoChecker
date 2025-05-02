import { useState } from "react";
import WorkerReviewForm from "../../components/WorkerReviewForm/WorkerReviewForm";
import { IdUserData } from "../../types";

const WorkerReview = (): React.ReactElement => {
  const [workerData, setWorkerData] = useState<IdUserData>({
    userId: "",
  });

  return (
    <>
      {/* // TODO LOGICA breadcrumbs */}
      <h2>Consulta por trabajador</h2>
      <div className="general-form">
        <p>Introduce el número de identificación del trabajador</p>
        <WorkerReviewForm
          workerData={workerData}
          setWorkerData={setWorkerData}
        />
      </div>
    </>
  );
};

export default WorkerReview;
