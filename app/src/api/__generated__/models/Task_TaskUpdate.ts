/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskItem_TaskItemWrite } from "./TaskItem_TaskItemWrite"

export type Task_TaskUpdate = {
  task_date: string
  task_items: Array<TaskItem_TaskItemWrite>
  task_items_id: Array<number>
  task_id: number
}
