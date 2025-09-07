import React from "react";
import { createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Vailery from "../assets/fonts/Vailery.ttf";
import { ThemeProvider } from "@emotion/react";
export default function Calendar() {
  // Custom styles for the DatePicker

  const theme = createTheme({
    typography: {
      fontFamily: "Light",
    },
    components: {
      MuiStack: {
        styleOverrides: {
          root: {
            height: "320px",
            overflow: "hidden",
            fontFamily: "Light",
          },
        },
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          root: {
            justifyContent: "center",
            alignContent: "center",
            alignItems: "middle",
            flexDirection: "column",
            flexWrap: "wrap",
          },
          label: {
            fontSize: "2.3rem",
            fontFamily: "Light",
          },
        },
      },
      MuiPickersArrowSwitcher: {
        styleOverrides: {
          root: { display: "none" },
        },
      },

      MuiDayCalendar: {
        styleOverrides: {
          weekContainer: {
            fontSize: "8rem",
            fontFamily: "Light",
          },
          weekDayLabel: {
            color: "#fff",
            fontSize: "1.8rem",
            fontFamily: "Light",
          },
        },
      },
      MuiPickersDay: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#384b42", // Hover color
              color: "#ffffff",
            },
            "&.Mui-selected": {
              backgroundColor: "#c08081", // Example color
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#c08081", // Hover color when selected
              },
              "&:focus": {
                backgroundColor: "#c08081", // Hover color when selected
              },
            },
            fontFamily: "Light",
            color: "#fff",
            fontSize: "1.4rem",
          },
        },
      },
    },
  });

  return (
    <div>
      <div className="App-calendar">
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar"]}>
              <DateCalendar
                defaultValue={dayjs("2025-12-29")}
                views={["day"]}
                componentProps={{
                  MuiPickersArrowSwitcher: { sx: { display: "none" } },
                }}
                readOnly
              />
            </DemoContainer>
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}
