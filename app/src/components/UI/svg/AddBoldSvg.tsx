import { FC, memo } from "react"
import styles from "styles/modules/svg/AddSvg.module.scss"

const AddBoldSvg: FC = () => {
  return (
    <svg version="1.1" viewBox="0 0 31 31" className={styles.AddSvgBold}>
      <path
        d="M18.04 2.625a2.625 2.625 0 00-5.25 0V12.79H2.625a2.625 2.625 0 000 5.25H12.79v10.166a2.625 2.625 0 105.25 0V18.04h10.166a2.625 2.625 0 100-5.25H18.04V2.625z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default memo(AddBoldSvg)
