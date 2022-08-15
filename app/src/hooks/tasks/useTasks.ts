import { useInfiniteQuery } from "react-query"
import { TasksService } from "api/__generated__"

const fetchTask = (offset: number) => {
  return () => TasksService.tasksList(100, offset)
}

export default function useTasks(offset: number) {
  return useInfiniteQuery(["tasks"], fetchTask(offset), {
    getNextPageParam: (page) => (page.next === null ? undefined : offset),
  })
}
