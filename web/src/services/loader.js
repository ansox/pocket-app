import { db } from './db'

export async function saveArticles(articles) {
  db.articles.bulkAdd(articles).catch((error) => console.log(error))
}

export async function loadArticles() {
  const articles = await db.articles.orderBy('time_added').reverse().toArray()

  return articles.filter((article) => article.status === '0')
}

export function saveLastSync() {
  const unixTime = Math.floor(Date.now() / 1000)
  localStorage.setItem('last_sync', unixTime)
}

export function loadLastSync() {
  return localStorage.getItem('last_sync') || ''
}
