import { FC, memo } from "react"
import styles from "styles/modules/svg/AddSvg.module.scss"

const AddSvg: FC = () => {
  return (
    <svg
      className={styles.AddSvg}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="AddIcon"
    >
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  )
}

export default memo(AddSvg)
