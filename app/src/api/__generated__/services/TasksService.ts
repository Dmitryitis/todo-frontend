/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Tasks_TasksRead } from "../models/Tasks_TasksRead"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

export class TasksService {
  /**
   * @param page A page number within the paginated result set.
   * @returns any
   * @throws ApiError
   */
  public static tasksList(page?: number): CancelablePromise<{
    count: number
    next?: string | null
    previous?: string | null
    results: Array<Tasks_TasksRead>
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tasks/",
      query: {
        page: page,
      },
    })
  }

  /**
   * @param id
   * @returns Tasks_TasksRead
   * @throws ApiError
   */
  public static tasksRead(id: string): CancelablePromise<Tasks_TasksRead> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tasks/{id}/",
      path: {
        id: id,
      },
    })
  }
}
