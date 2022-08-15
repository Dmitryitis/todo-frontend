import { useInfiniteQuery } from "react-query"
import { TasksService } from "api/__generated__"

export default function useTasks() {
  return useInfiniteQuery(["tasks"], () => TasksService.tasksList(), {
    getNextPageParam: (page) => (page.next === null ? undefined : page.next),
  })
}
