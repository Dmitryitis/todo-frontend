import { FC, useState } from "react"
import { Tasks_TasksRead } from "api/__generated__"
import styles from "styles/modules/task/TaskItem.module.scss"
import Switch from "components/UI/buttons/Switch"
import { dateFormatter } from "utils/formatters"
import TaskItemLine from "./TaskItemLine"
import { TaskItemText, TaskItemTitle } from "./TaskItemInfo"
import { useUpdateTask } from "../../hooks/tasks/useTask"
import { UpdateTaskRequest } from "../../types"
import ArrowSvg from "../UI/svg/ArrowSvg"

interface Props {
  task: Tasks_TasksRead
  indexPage: number
  handleClose: () => void
}

const TaskItemOpen: FC<Props> = ({ task, indexPage, handleClose }) => {
  const [openId, setOpenId] = useState<number>(0)

  const { mutate } = useUpdateTask(indexPage)

  const handleClick = (id: number | undefined, is_done: boolean) => {
    const dataRequest: UpdateTaskRequest = {
      id: `${id}`,
      task_id: task.id || 0,
      data: {
        is_done,
      },
    }
    mutate(dataRequest)
  }

  return (
    <div className={styles.TaskItemOpen}>
      <button
        type="button"
        className={styles.TaskItemHeader}
        onClick={handleClose}
      >
        <ArrowSvg rotate />
        <span>{dateFormatter(task.task_date)} Tasks:</span>
      </button>
      <div className={styles.TaskItemOpenBlock}>
        {task.task_items &&
          task.task_items.map((item) => (
            <div key={item.id} className={styles.FlexBlockItem}>
              <div className={styles.FlexBetween}>
                <button
                  type="button"
                  className={styles.TaskItemFlex}
                  onClick={() => setOpenId(item.id || 0)}
                >
                  <TaskItemLine color={item.color} />
                  <div className={styles.TaskItemFlexInfo}>
                    <TaskItemTitle title={item.title} />
                    <TaskItemText text={item.text} open={openId === item.id} />
                  </div>
                </button>
                <Switch
                  value={item.is_done}
                  handleClick={() => handleClick(item.id, !item.is_done)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TaskItemOpen
