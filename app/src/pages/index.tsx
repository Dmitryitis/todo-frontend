import { FC, useCallback, useState } from "react"
import { Tasks_TasksRead } from "api/__generated__"
import TaskItem from "components/task/TaskItem"
import { Grid } from "@mui/material"
import TaskSkeleton from "components/task/TaskSkeleton"

const Home: FC = () => {
  const task: Array<Tasks_TasksRead> = [
    {
      id: 1,
      task_date: "2022-08-14",
      task_items: [
        {
          id: 1,
          index: 1,
          title: "sdfs",
          text: "sdf fs fs fs fs fs fs f sf s",
          color: "white",
          is_done: true,
        },
        {
          id: 2,
          index: 2,
          title: "sdfs",
          text: "sdf",
          color: "white",
          is_done: true,
        },
      ],
    },
    {
      id: 2,
      task_date: "2022-08-16",
      task_items: [
        {
          id: 1,
          index: 1,
          title: "sdfs",
          text: "sdf fs fs fs fs fs fs f sf s",
          color: "white",
          is_done: true,
        },
      ],
    },
    {
      id: 3,
      task_date: "2022-08-16",
      task_items: [
        {
          id: 1,
          index: 1,
          title: "sdfs",
          text: "sdf fs fs fs fs fs fs f sf s",
          color: "white",
          is_done: true,
        },
      ],
    },
  ]
  const [taskId, setTaskId] = useState<number>(task[0].id || 0)

  const handleClick = useCallback(
    (id: number) => {
      setTaskId(id)
    },
    [taskId],
  )

  return (
    <div className="marginTop20">
      <Grid container spacing={3}>
        <TaskSkeleton />
        {task &&
          task.map((item) => (
            <Grid wrap="wrap" key={item.id} item xs={12} sm={6} md={4}>
              <TaskItem
                id={taskId}
                task={item}
                handleClick={() => handleClick(item.id || 0)}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default Home
