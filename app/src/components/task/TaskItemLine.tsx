import { FC, memo } from "react"
import styles from "styles/modules/task/TaskItem.module.scss"

interface Props {
  color?: string
}

const TaskItemLine: FC<Props> = ({ color = "#A9A9A9" }) => {
  return (
    <span style={{ backgroundColor: color }} className={styles.TaskItemLine} />
  )
}

export default memo(TaskItemLine)
