/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskItem_TaskItemDelete } from "../models/TaskItem_TaskItemDelete"
import type { TaskItem_TaskItemUpdate } from "../models/TaskItem_TaskItemUpdate"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

export class TaskItemService {
  /**
   * @param data
   * @returns void
   * @throws ApiError
   */
  public static taskItemDeleteMultiple(
    data: TaskItem_TaskItemDelete,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/task_item/delete_multiple/",
      body: data,
    })
  }

  /**
   * @param id
   * @param data
   * @returns TaskItem_TaskItemUpdate
   * @throws ApiError
   */
  public static taskItemUpdate(
    id: string,
    data: TaskItem_TaskItemUpdate,
  ): CancelablePromise<TaskItem_TaskItemUpdate> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/task_item/{id}/",
      path: {
        id: id,
      },
      body: data,
    })
  }

  /**
   * @param id
   * @returns any
   * @throws ApiError
   */
  public static taskItemPartialUpdate(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/task_item/{id}/",
      path: {
        id: id,
      },
    })
  }

  /**
   * @param id
   * @returns void
   * @throws ApiError
   */
  public static taskItemDelete(id: string): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/task_item/{id}/",
      path: {
        id: id,
      },
    })
  }
}
