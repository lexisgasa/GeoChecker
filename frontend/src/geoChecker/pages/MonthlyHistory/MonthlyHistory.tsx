import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import ReturnButton from "../../../components/Buttons/ReturnButton";

const MonthlyHistory: React.FC = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="monthly-history">
      <h2>Registro mensual</h2>
      <div className="general-form">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          locale={es}
          className="custom-calendar"
          modifiersClassNames={{
            selected: "selected",
            today: "today",
          }}
        />
        <ReturnButton />
      </div>
    </div>
  );
};

export default MonthlyHistory;
