import { FC, useEffect, useState } from "react"
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material"
import {
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import clsx from "clsx"
import styles from "styles/modules/Date.module.scss"
import stylesMargin from "styles/modules/Margin.module.scss"

interface Props {
  onClick: () => void
}

const FormTask: FC<Props> = ({ onClick }) => {
  const [date, setDate] = useState<Date | null>(new Date())
  const [today, setTodayDate] = useState<string>("2017-01-01")

  useEffect(() => {
    let dateToday: Date | string = new Date()

    const dd = String(dateToday.getDate()).padStart(2, "0")
    const mm = String(dateToday.getMonth() + 1).padStart(2, "0")
    const yyyy = dateToday.getFullYear()

    dateToday = `${yyyy}-${mm}-${dd}`

    setTodayDate(dateToday)
  }, [today])
  return (
    <>
      <DialogContent dividers>
        <DialogContentText className={stylesMargin.MarginBottom20}>
          Choose time
        </DialogContentText>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <span className={styles.DateDesktop}>
            <DesktopDatePicker
              label="Task date"
              value={date}
              minDate={new Date(today)}
              onChange={(newValue) => {
                setDate(newValue)
              }}
              renderInput={(params) => (
                <TextField className={styles.DateDesktop} {...params} />
              )}
            />
          </span>
          <span className={styles.DateMobile}>
            <MobileDatePicker
              label="Task date"
              value={date}
              onChange={(newValue) => {
                setDate(newValue)
              }}
              minDate={new Date(today)}
              renderInput={(params) => (
                <TextField className={styles.DateMobile} {...params} />
              )}
            />
          </span>
        </LocalizationProvider>
        <DialogContentText
          className={clsx(
            stylesMargin.MarginBottom20,
            stylesMargin.MarginTop20,
          )}
        >
          Create todo item
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick}>Cancel</Button>
        <Button onClick={onClick}>Create</Button>
      </DialogActions>
    </>
  )
}

export default FormTask
