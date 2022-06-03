import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ date, setDate }) => {
  return (
    <DatePicker
      selected={date}
      onChange={(date = Date()) => setDate({ date })}
      customInput={}
    ></DatePicker>
  );
};

export default Datepicker;
