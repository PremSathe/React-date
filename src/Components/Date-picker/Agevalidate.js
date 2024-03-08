import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "./MyDatePicker.scss";

const Agevalidate = ({ onChange }) => {
  const disabledDate = (current) => {
    // Calculate the minimum birth date to be 18 years ago
    const minBirthDate = moment().subtract(18, "years").startOf("day");

    // Disable dates before the past 18 years
    return current && current > minBirthDate;
  };

  return (
    <DatePicker
      className="cal"
      onChange={onChange}
      disabledDate={disabledDate}
    />
  );
};

export default Agevalidate;
