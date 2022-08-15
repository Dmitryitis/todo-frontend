import { FC, useContext } from "react"
import clsx from "clsx"
import styles from "styles/modules/dropdown/Dropdown.module.scss"
import { Switch } from "@mui/material"
import { ContextApp } from "store/reducer"

interface Props {
  open: boolean
}

const Dropdown: FC<Props> = ({ open }) => {
  const { state, dispatch } = useContext(ContextApp)

  const handleChange = () => {
    dispatch({
      type: "update_news",
      payload: {
        isActiveNews: !state.isActiveNews,
      },
    })
  }

  return (
    <div className={clsx(styles.Dropdown, { [styles.DropdownOpen]: open })}>
      <div className={styles.DropdownHeader}>
        <span className={styles.DropdownText}>Hide the news feed?</span>
        <Switch
          checked={state.isActiveNews}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  )
}

export default Dropdown
