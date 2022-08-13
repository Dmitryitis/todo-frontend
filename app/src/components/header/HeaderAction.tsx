import { FC, memo } from "react"
import styles from "styles/modules/Header.module.scss"
import HeaderActionDropdown from "components/header/HeaderActionDropdown"
import HeaderActionDialog from "components/header/HeaderActionDialog"

const HeaderAction: FC = () => {
  return (
    <div className={styles.HeaderAction}>
      <HeaderActionDialog />
      <HeaderActionDropdown />
    </div>
  )
}

export default memo(HeaderAction)
