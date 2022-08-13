export const IS_PRODUCTION = process.env.NODE_ENV === "production"
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development"

export const APP_NAME = "ToDo"
export const DESCRIPTION = "ToDo list"
export const API_URL =
  process.env.API_URL !== undefined
    ? process.env.API_URL
    : "http://141.8.195.213/api"
