// import React from "react";
// import { DatePicker } from "antd";
// import "./MyRangePicker.scss";

// const { RangePicker } = DatePicker;

// const MyRangePicker = ({ onChange }) => {
//   const handleRangePickerChange = (dates, dateStrings) => {
//     // console.log("Selected Range:", dates);
//     console.log("Selected Date Strings:", dateStrings);
//     onChange(dates); // Pass the selected dates to the parent component
//   };

//   return <RangePicker className="range" onChange={handleRangePickerChange} />;
// };

// export default MyRangePicker;

import React from "react";
import { DatePicker } from "antd";
import moment from "moment"; // Import moment
import "./MyRangePicker.scss";

const { RangePicker } = DatePicker;

const MyRangePicker = ({ onChange }) => {
  const disabledDate = current => {
    // Disable past dates
    return current && current < moment().startOf('day');
  };

  const handleRangePickerChange = (dates, dateStrings) => {
    console.log("Selected Date Strings:", dateStrings);
    onChange(dates); // Pass the selected dates to the parent component
  };

  return (
    <RangePicker
      className="range"
      onChange={handleRangePickerChange}
      disabledDate={disabledDate}
    />
  );
};

export default MyRangePicker;
