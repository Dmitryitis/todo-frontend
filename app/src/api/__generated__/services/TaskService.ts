/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task_TaskUpdate } from "../models/Task_TaskUpdate"
import type { Task_TaskWrite } from "../models/Task_TaskWrite"

import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"

export class TaskService {
  /**
   * @param data
   * @returns Task_TaskWrite
   * @throws ApiError
   */
  public static taskCreate(
    data: Task_TaskWrite,
  ): CancelablePromise<Task_TaskWrite> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/task/",
      body: data,
    })
  }

  /**
   * @param id
   * @param data
   * @returns Task_TaskUpdate
   * @throws ApiError
   */
  public static taskUpdate(
    id: string,
    data: Task_TaskUpdate,
  ): CancelablePromise<Task_TaskUpdate> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/task/{id}/",
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
  public static taskPartialUpdate(id: string): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PATCH",
      url: "/task/{id}/",
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
  public static taskDelete(id: string): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/task/{id}/",
      path: {
        id: id,
      },
    })
  }
}
