/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskItem_TaskItemRead } from "./TaskItem_TaskItemRead"

export type Tasks_TasksRead = {
  readonly id?: number
  readonly task_date?: string
  readonly task_items?: Array<TaskItem_TaskItemRead>
}
