import { FC, useState } from "react"
import {
  TaskItem_TaskItemUpdate,
  TaskItemService,
  Tasks_TasksRead,
} from "api/__generated__"
import styles from "styles/modules/task/TaskItem.module.scss"
import Switch from "components/UI/buttons/Switch"
import { dateFormatter } from "utils/formatters"
import { useMutation, useQueryClient } from "react-query"
import TaskItemLine from "./TaskItemLine"
import { TaskItemText, TaskItemTitle } from "./TaskItemInfo"

interface Props {
  task: Tasks_TasksRead
}

interface UpdateTaskRequest {
  id: string
  data: TaskItem_TaskItemUpdate
}

const TaskItemOpen: FC<Props> = ({ task }) => {
  const [openId, setOpenId] = useState<number>(0)
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    "update task item",
    (data: UpdateTaskRequest) =>
      TaskItemService.taskItemUpdate(data.id, data.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks")
      },
    },
  )

  const handleClick = (id: number | undefined, is_done: boolean) => {
    const dataRequest: UpdateTaskRequest = {
      id: `${id}`,
      data: {
        is_done,
      },
    }
    mutate(dataRequest)
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
