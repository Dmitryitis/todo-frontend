import { FC } from "react"
import { Tasks_TasksRead } from "api/__generated__"
import TaskItemClose from "./TaskItemClose"
import TaskItemOpen from "./TaskItemOpen"

interface Props {
  task: Tasks_TasksRead
  id?: number
  handleClick: () => void
}

const TaskItem: FC<Props> = ({ task, id, handleClick }) => {
  return task.id === id ? (
    <TaskItemOpen task={task} />
  ) : (
    <TaskItemClose task_date={task.task_date} handleClick={handleClick} />
  )
}

export default TaskItem
