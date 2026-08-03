import React, { useState } from "react";

import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar from "@skyscanner/backpack-web/bpk-component-calendar";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

const getClassName = cssModules(STYLES);

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={getClassName("App")}>
      <header className={getClassName("App__header")}>
        <div className={getClassName("App__header-inner")}>
          <BpkText
            tagName="h1"
            textStyle="xxl"
            className={getClassName("App__heading")}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>

      <main className={getClassName("App__main")}>
        <BpkCalendar
          id="calendar"
          selectedDate={selectedDate}
          onDateSelect={(date) => setSelectedDate(date)}
        />

        <div style={{ marginTop: "24px" }}>
          <BpkButton onClick={() => alert("It works!")}>
            Continue
          </BpkButton>
        </div>
      </main>
    </div>
  );
};

export default App;