import { TaskItem_TaskItemWrite } from "api/__generated__"

export interface ChangeState {
  change: boolean
  index: number
  task: TaskItem_TaskItemWrite | null
}
