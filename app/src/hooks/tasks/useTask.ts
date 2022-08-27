import { useMutation, useQueryClient } from "react-query"
import {
  Task_TaskWrite,
  TaskItemService,
  TaskService,
} from "../../api/__generated__"
import { UpdateTaskData, UpdateTaskRequest } from "../../types"

// eslint-disable-next-line import/prefer-default-export
export const useUpdateTask = (indexPage: number) => {
  const queryClient = useQueryClient()
  return useMutation(
    "update task",
    (data: UpdateTaskRequest) =>
      TaskItemService.taskItemUpdate(data.id, data.data),
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries("tasks")
        const previousTaskData: UpdateTaskData | undefined =
          queryClient.getQueryData("tasks")

        if (previousTaskData && previousTaskData.pages) {
          const newTaskData: UpdateTaskData = {
            pageParams: previousTaskData?.pageParams,
            pages: previousTaskData?.pages.map((page) => {
              return {
                ...page,
                results: page.results.map((task) => {
                  if (task.id === data.task_id) {
                    return {
                      ...task,
                      task_items: task.task_items?.map((item) => {
                        if (item.id === parseInt(data.id, 10)) {
                          return { ...item, is_done: data.data.is_done }
                        }
                        return item
                      }),
                    }
                  }
                  return task
                }),
              }
            }),
          }

          queryClient.setQueryData("tasks", () => {
            return newTaskData
          })
        }

        return { previousTaskData }
      },
      onError: (_err, _newTodo, context) => {
        queryClient.setQueryData("tasks", context?.previousTaskData)
      },
      onSettled: () => {
        queryClient.invalidateQueries("tasks", {
          refetchPage: (lastPage, index) => index === indexPage,
        })
      },
    },
  )
}

export const useCreateTask = (onSuccess: any) => {
  return useMutation(
    "create task",
    (data: Task_TaskWrite) => TaskService.taskCreate(data),
    { onSuccess },
  )
}
