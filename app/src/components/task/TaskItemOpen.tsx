import { FC, useState } from "react"
import { Tasks_TasksRead } from "api/__generated__"
import styles from "styles/modules/task/TaskItem.module.scss"
import Switch from "components/UI/buttons/Switch"
import { dateFormatter } from "utils/formatters"
import TaskItemLine from "./TaskItemLine"
import { TaskItemText, TaskItemTitle } from "./TaskItemInfo"

interface Props {
  task: Tasks_TasksRead
}

const TaskItemOpen: FC<Props> = ({ task }) => {
  const [openId, setOpenId] = useState<number>(0)
  const handleClick = (id: number | undefined) => {
    console.log(id)
  }

  return (
    <div className={styles.TaskItemOpen}>
      <div className={styles.TaskItemHeader}>
        {dateFormatter(task.task_date)} Tasks:
      </div>
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
                  handleClick={() => handleClick(item.id)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TaskItemOpen
