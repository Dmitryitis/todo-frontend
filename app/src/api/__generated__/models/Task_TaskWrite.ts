/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskItem_TaskItemWrite } from "./TaskItem_TaskItemWrite"

export type Task_TaskWrite = {
  task_date: string
  task_items: Array<TaskItem_TaskItemWrite>
}
