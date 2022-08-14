import { FC } from "react"
import styles from "styles/modules/task/TaskItemRedact.module.scss"
import RedactSvg from "components/UI/svg/RedactSvg"
import TrashSvg from "components/UI/svg/TrashSvg"
import { TaskItem_TaskItemWrite } from "api/__generated__"
import { shortTextFormatter, shortTitleFormatter } from "../../utils/formatters"

interface Props {
  task: TaskItem_TaskItemWrite
  handleDelete: () => void
  handleChange: () => void
}

const TaskItemRedact: FC<Props> = ({ task, handleDelete, handleChange }) => {
  return (
    <div className={styles.TaskItem}>
      <div className={styles.TaskItemInfo}>
        <h3 className={styles.TaskItemTitle}>
          {shortTitleFormatter(task.title)}
        </h3>
        <span className={styles.TaskItemText}>
          {shortTextFormatter(task.text)}
        </span>
      </div>
      <div className={styles.TaskItemActions}>
        <button
          type="button"
          className={styles.TaskItemButton}
          onClick={(e) => {
            e.stopPropagation()
            handleChange()
          }}
        >
          <span className={styles.TaskItemButtonContent}>
            <RedactSvg />
          </span>
        </button>
        <button
          type="button"
          className={styles.TaskItemButton}
          onClick={(e) => {
            e.stopPropagation()
            handleDelete()
          }}
        >
          <span className={styles.TaskItemButtonContent}>
            <TrashSvg />
          </span>
        </button>
      </div>
    </div>
  )
}

export default TaskItemRedact
