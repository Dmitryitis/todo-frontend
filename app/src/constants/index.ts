export const IS_PRODUCTION = process.env.NODE_ENV === "production"
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development"

export const APP_NAME = "ToDo"
export const DESCRIPTION = "ToDo list"
export const { REACT_APP_NEWS_TOKEN } = process.env
export const NEWS_API = `https://api.thenewsapi.com/v1/news/top?api_token=${REACT_APP_NEWS_TOKEN}`

export const API_URL =
  process.env.REACT_APP_API_URL !== undefined
    ? process.env.REACT_APP_API_URL
    : "http://141.8.195.213/api"
