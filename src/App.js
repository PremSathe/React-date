import { ConfigProvider } from "antd";
import { useState } from "react";
import moment from "moment";
import "./app.scss";
import MyDatePicker from "../src/Components/Date-picker/MyDatePicker";
import MyRangePicker from "../src/Components/Date-Range-picker/MyRangePicker";

function App() {
  const [
    dates,
     setDates] = useState([]);
  // console.log(dates);

  const handleDatePickerChange = (date, dateString) => {
    console.log("Selected Date:", dateString);
  };

  const handleRangePickerChange = (values) => {
    // console.log("Selected Range:", values);
    if (values) {
      setDates(values.map((date) => moment(date).format("YYYY-MM-DD")));
    } else {
      setDates([]);
    }
  };

  return (
    <div style={{ margin: 20 }} className="container">
      <ConfigProvider
        theme={{
          inherit: true,
          token: {
            colorBgLayout: "red",
            colorPrimary: "red",
          },
          components: {
            DatePicker: {
              colorPrimary: "red",
            },
          },
        }}
      >
        <MyDatePicker onChange={handleDatePickerChange} />
        <MyRangePicker onChange={handleRangePickerChange} />
      </ConfigProvider>
    </div>
  );
}

export default App;


