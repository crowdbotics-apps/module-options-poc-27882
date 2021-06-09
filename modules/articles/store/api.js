import axios from "axios"

const articlesAPI = axios.create({
  // baseURL: "https://module-options-poc-27882.botics.co/modules/articles/",
  baseURL: "https://5gdtltkps0.execute-api.us-east-2.amazonaws.com/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export function article_list() {
  return articlesAPI.get(`/article/`)
}

export function article_read(id) {
  return articlesAPI.get(`/article/${id}/`)
}

export const api = {
  article_list,
  article_read
}
