import { useInfiniteQuery } from "react-query"
import { TasksService } from "api/__generated__"

const fetchTask = () => {
  return ({ pageParam = 1 }) => TasksService.tasksList(pageParam)
}

const urlSearchParam = (text: string | undefined) => {
  if (text) {
    const searchString = new URL(text)
    return searchString.searchParams.get("page")
  }
  return 1
}

export default function useTasks() {
  return useInfiniteQuery("tasks", fetchTask(), {
    getNextPageParam: (curPage) =>
      curPage.next === null ? undefined : urlSearchParam(curPage.next),
  })
}
