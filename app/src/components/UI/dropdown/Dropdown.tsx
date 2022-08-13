import { FC, useCallback, useState } from "react"
import clsx from "clsx"
import styles from "styles/modules/dropdown/Dropdown.module.scss"
import { Switch } from "@mui/material"

interface Props {
  open: boolean
}

const Dropdown: FC<Props> = ({ open }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = useCallback(() => {
    setChecked((prevState) => !prevState)
  }, [checked])

  return (
    <div className={clsx(styles.Dropdown, { [styles.DropdownOpen]: open })}>
      <div className={styles.DropdownHeader}>
        <span className={styles.DropdownText}>Hide the news feed?</span>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  )
}

export default Dropdown
