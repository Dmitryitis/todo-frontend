import { FC } from "react"
import styles from "styles/modules/task/TaskItemRedact.module.scss"
import RedactSvg from "components/UI/svg/RedactSvg"
import TrashSvg from "components/UI/svg/TrashSvg"
import { TaskItem_TaskItemWrite } from "api/__generated__"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface Props {
  task: TaskItem_TaskItemWrite
  id: string | number
  handleDelete: () => void
  handleChange: () => void
}

const TaskItemRedact: FC<Props> = ({
  task,
  id,
  handleDelete,
  handleChange,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.TaskItem}
    >
      <div className={styles.TaskItemInfo}>
        <h3 className={styles.TaskItemTitle}>{task.title}</h3>
        <span className={styles.TaskItemText}>{task.text}</span>
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
