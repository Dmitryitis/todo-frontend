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
import { TaskItem_TaskItemWrite } from "api/__generated__"
import FormTaskItem from "components/form/FormTaskItem"
import TaskItemRedact from "components/task/TaskItemRedact"
import {
  closestCenter,
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { ChangeState } from "types"

interface Props {
  onClick: () => void
}

const FormTask: FC<Props> = ({ onClick }) => {
  const initialChange: ChangeState = {
    index: -1,
    change: false,
    task: null,
  }

  const [date, setDate] = useState<Date | null>(new Date())
  const [tasks, setTasks] = useState<Array<TaskItem_TaskItemWrite> | null>(null)
  const [change, setChange] = useState<ChangeState>(initialChange)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
        distance: 10,
      },
    }),
  )

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

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (tasks) {
      const newTodos = [...tasks]

      const tmp = newTodos[active.id]
      newTodos[active.id] = newTodos[over.id]
      newTodos[over.id] = tmp
      setTasks(newTodos)
    }
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
          {tasks && (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={Object.keys(tasks).map((item) => parseInt(item, 10))}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((item: TaskItem_TaskItemWrite, index) => (
                  <TaskItemRedact
                    key={index}
                    id={index}
                    task={item}
                    handleDelete={() => deleteTask(index)}
                    handleChange={() => changeTask(index)}
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </div>
        <FormTaskItem addTask={addTask} change={change} />
      </DialogContent>
      <DialogActions>
        <MuiButton onClick={onClick}>Cancel</MuiButton>
        <MuiButton onClick={onClick}>Create</MuiButton>
      </DialogActions>
    </>
  )
}

export default FormTask
