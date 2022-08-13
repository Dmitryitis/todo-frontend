import { FC } from "react"
import styles from "styles/modules/Header.module.scss"
import Logo from "components/UI/logo/Logo"
import HeaderAction from "./HeaderAction"

const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <HeaderAction />
    </div>
  )
}

export default Header
