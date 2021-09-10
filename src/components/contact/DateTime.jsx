import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import { createTheme } from "@material-ui/core/styles";

import DateFnsUtils from "@date-io/date-fns";
export default function DateTime({ Date, Time }) {
  const [date, setDate] = Date;
  const [time, setTime] = Time;

  const defaultTheme = createTheme({
    palette: {
      primary: green,
    },
  });
  const dateStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={defaultTheme}>
        <div className="form">
          <label>Date</label>
          <DatePicker
            style={dateStyle}
            className="form-control "
            value={date}
            onChange={(value) => setDate(value)}
          />
          <label>Time</label>
          <TimePicker
            className="form-control"
            value={time}
            onChange={(value) => setTime(value)}
          />
        </div>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
