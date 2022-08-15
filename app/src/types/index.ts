import {
  TaskItem_TaskItemUpdate,
  TaskItem_TaskItemWrite,
  Tasks_TasksRead,
} from "api/__generated__"

export interface ChangeState {
  change: boolean
  index: number
  task: TaskItem_TaskItemWrite | null
}

export interface UpdateTaskRequest {
  id: string
  task_id: number
  data: TaskItem_TaskItemUpdate
}

export interface PageTask {
  count: number
  next?: string | null
  previous?: string | null
  results: Array<Tasks_TasksRead>
}

export interface UpdateTaskData {
  pageParams: string[] | undefined
  pages: PageTask[] | undefined
}
