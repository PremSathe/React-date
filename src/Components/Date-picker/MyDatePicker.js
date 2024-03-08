
import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "./MyDatePicker.scss";

const MyDatePicker = ({ onChange }) => {
  const disabledDate = (current) => {
    // Calculate the minimum birth date to be 18 years ago
    let isValid = true;
    const minBirthDate = moment().subtract(18, "years").startOf("day");

    // Disable dates before the past 18 years
    if (current && current > minBirthDate) {
      isValid = false;
      return true;
    }

    if(isValid === false)
    alert("Kuch bhi kar")

    if (isValid) {
      // Disable future dates
      if (current && current > moment().endOf("day")) {
        return true;
      }

      return false;
    }
  };

  return (
    <DatePicker
      className="cal"
      onChange={onChange}
      disabledDate={disabledDate}
    />
  );
};

export default MyDatePicker;


// import React from "react";
// import { DatePicker } from "antd";
// import moment from "moment";
// import "./MyDatePicker.scss";

// const MyDatePicker = ({ onChange }) => {
//   const disabledDate = (current) => {
//     // Calculate the minimum birth date to be 18 years ago
//     const minBirthDate = moment().subtract(18, "years").startOf("day");

//     // Check if current date is after the minimum birth date
//     if (current && current > minBirthDate) {
//       // Disable dates after the minimum birth date
//       return true;
//     }

//     // Disable future dates
//     if (current && current > moment().endOf("day")) {
//       return true;
//     }

//     // Enable all other dates
//     return false;
//   };

//   return (
//     <DatePicker
//       className="cal"
//       onChange={onChange}
//       disabledDate={disabledDate}
//     />
//   );
// };

// export default MyDatePicker;
