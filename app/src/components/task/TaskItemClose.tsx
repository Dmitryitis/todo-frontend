import { FC } from "react"
import styles from "styles/modules/task/TaskItem.module.scss"
import { dateFormatter } from "utils/formatters"
import TaskItemLine from "./TaskItemLine"
import ArrowSvg from "../UI/svg/ArrowSvg"

interface Props {
  task_date: string | undefined
  handleClick: () => void
}

const TaskItemClose: FC<Props> = ({ handleClick, task_date }) => {
  return (
    <button type="button" className={styles.TaskItem} onClick={handleClick}>
      <div className={styles.TaskItemFlex}>
        <TaskItemLine />
        <span className={styles.TaskItemTitle}>
          {dateFormatter(task_date)} Tasks
        </span>
      </div>
      <ArrowSvg />
    </button>
  )
}

export default TaskItemClose
