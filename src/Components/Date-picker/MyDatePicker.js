// MyDatePicker.js
import React from "react";
import { DatePicker } from "antd";
import "./MyDatePicker.scss";


const MyDatePicker = ({ onChange }) => {
  return (
    <DatePicker
      className="cal"
      onChange={onChange}
    />
  );
};

export default MyDatePicker;
