import { FC, useState } from "react"
import {
  Button as MuiButton,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material"
import stylesMargin from "styles/modules/Margin.module.scss"
import stylesWrapper from "styles/modules/task/TaskItemRedact.module.scss"
import clsx from "clsx"
import FieldDate from "components/UI/form/FieldDate"
import { Task_TaskWrite, TaskItem_TaskItemWrite } from "api/__generated__"
import FormTaskItem from "components/form/FormTaskItem"
import TaskItemRedact from "components/task/TaskItemRedact"
import { ChangeState } from "types"
import { useQueryClient } from "react-query"
import { formatterDateCreateTask } from "../../utils/formatters"
import { useCreateTask } from "../../hooks/tasks/useTask"

interface Props {
  onClick: () => void
}

const FormTask: FC<Props> = ({ onClick }) => {
  const initialChange: ChangeState = {
    index: -1,
    change: false,
    task: null,
  }

  const [date, setDate] = useState<Date>(new Date())
  const [tasks, setTasks] = useState<Array<TaskItem_TaskItemWrite> | []>([])
  const [change, setChange] = useState<ChangeState>(initialChange)

  const queryClient = useQueryClient()

  const { isLoading, mutateAsync } = useCreateTask(function onSuccess() {
    queryClient.invalidateQueries(["tasks"], {
      refetchPage: () => true,
    })
    setTasks([])
    setDate(new Date())
    onClick()
  })

  const addTask = (task: TaskItem_TaskItemWrite) => {
    if (change.change && tasks) {
      const newTodos = [...tasks]
      newTodos[change.index] = task
      setTasks(newTodos)
      setChange(initialChange)
    } else if (tasks === null) {
      setTasks(() => [task])
    } else {
      const newTodos = [...tasks]
      newTodos.push(task)
      setTasks(newTodos)
    }
  }

  const deleteTask = (index: number) => {
    if (tasks) {
      const newTodos = [...tasks]
      newTodos.splice(index, 1)
      setTasks(newTodos)
    }
  }

  const changeTask = (index: number) => {
    if (tasks) {
      const task = tasks[index]
      const data: ChangeState = {
        change: true,
        index,
        task,
      }
      setChange(data)
    }
  }

  const createTask = async () => {
    const data: Task_TaskWrite = {
      task_date: formatterDateCreateTask(date),
      task_items: tasks?.map((item, index) => {
        return { ...item, index: index + 1 }
      }),
    }

    await mutateAsync(data)
  }

  return (
    <>
      <DialogContent dividers>
        <DialogContentText className={stylesMargin.MarginBottom20}>
          Choose time
        </DialogContentText>
        <FieldDate date={date} setDate={setDate} />
        <DialogContentText
          className={clsx(
            stylesMargin.MarginBottom20,
            stylesMargin.MarginTop20,
          )}
        >
          Create todo item
        </DialogContentText>
        <div className={stylesWrapper.Wrapper}>
          {tasks &&
            tasks.map((item: TaskItem_TaskItemWrite, index) => (
              <TaskItemRedact
                key={index}
                task={item}
                handleDelete={() => deleteTask(index)}
                handleChange={() => changeTask(index)}
              />
            ))}
        </div>
        <FormTaskItem addTask={addTask} change={change} />
      </DialogContent>
      <DialogActions>
        <MuiButton disabled={isLoading} onClick={onClick}>
          Cancel
        </MuiButton>
        <MuiButton disabled={isLoading} onClick={createTask}>
          Create
        </MuiButton>
      </DialogActions>
    </>
  )
}

export default FormTask
