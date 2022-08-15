import { FC } from "react"
import { Tasks_TasksRead } from "api/__generated__"
import TaskItemClose from "./TaskItemClose"
import TaskItemOpen from "./TaskItemOpen"

interface Props {
  task: Tasks_TasksRead
  id?: number
  handleClick: () => void
  handleClose: () => void
}

const TaskItem: FC<Props> = ({ task, id, handleClick, handleClose }) => {
  return task.id === id ? (
    <TaskItemOpen task={task} handleClose={handleClose} />
  ) : (
    <TaskItemClose task_date={task.task_date} handleClick={handleClick} />
  )
}

export default TaskItem
