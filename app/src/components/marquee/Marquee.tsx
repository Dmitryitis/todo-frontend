import { FC, ReactNode } from "react"
import styles from "styles/modules/Marguee.module.scss"

interface Props {
  children: ReactNode
}

const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className={styles.MarqueeContainer}>
      <div className={styles.Overlay} />
      <div className={styles.Marquee}>{children}</div>
      <div className={styles.Marquee} aria-hidden="true">
        {children}
      </div>
    </div>
  )
}

export default Marquee
