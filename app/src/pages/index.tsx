import { FC, Fragment, useCallback, useRef, useState } from "react"
import TaskItem from "components/task/TaskItem"
import { Grid } from "@mui/material"
import TaskSkeleton from "components/task/TaskSkeleton"
import { useUIDSeed } from "react-uid"
import useTasks from "../hooks/tasks/useTasks"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import MarqueeContainer from "../container/MarqueeContainer"

const Home: FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isSuccess } = useTasks()
  const loadMoreRef = useRef(null)
  const seed = useUIDSeed()

  useIntersectionObserver({
    root: undefined,
    rootMargin: "20px",
    threshold: 0.5,
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  const [taskId, setTaskId] = useState<number>(0)

  const handleClick = useCallback(
    (id: number) => {
      setTaskId(id)
    },
    [taskId],
  )

  const taskClose = useCallback(() => {
    setTaskId(0)
  }, [])

  return (
    <div className="marginTop20">
      <Grid container spacing={3}>
        {isSuccess &&
          data?.pages.map((pageItem, index) => (
            <Fragment key={seed(pageItem)}>
              {pageItem.results.map((task) => (
                <Grid key={task.id} item xs={12} sm={6} md={4}>
                  <TaskItem
                    id={taskId}
                    task={task}
                    indexPage={index}
                    handleClick={() => handleClick(task.id || 0)}
                    handleClose={taskClose}
                  />
                </Grid>
              ))}
            </Fragment>
          ))}
        {isLoading ? <TaskSkeleton /> : ""}
        <div ref={loadMoreRef} />
      </Grid>
      <MarqueeContainer />
    </div>
  )
}

export default Home
