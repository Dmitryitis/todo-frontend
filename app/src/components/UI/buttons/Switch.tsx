import { FC } from "react"
import styles from "styles/modules/Switch.module.scss"
import clsx from "clsx"
import CheckSvg from "../svg/CheckSvg"
import UnCheckSvg from "../svg/UnCheckSvg"

interface Props {
  value: boolean | undefined
  handleClick: () => void
}

const Switch: FC<Props> = ({ value = false, handleClick }) => {
  return (
    <div className={styles.Switch}>
      <button
        type="button"
        className={clsx(styles.SwitchButton, {
          [styles.SwitchButtonActive]: value,
        })}
        onClick={handleClick}
      >
        <div className={styles.SwitchButtonToddler}>
          {value ? <CheckSvg /> : <UnCheckSvg />}
        </div>
      </button>
    </div>
  )
}

export default Switch
