import { FC, useEffect, useState } from "react"
import {
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import styles from "styles/modules/Date.module.scss"
import { TextField } from "@mui/material"

interface Props {
  date: Date | null
  setDate: (newValue: Date | null) => void
}

const FieldDate: FC<Props> = ({ date, setDate }) => {
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
  )
}

export default FieldDate
