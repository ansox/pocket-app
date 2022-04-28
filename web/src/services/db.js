import Dexie from 'dexie'

export const db = new Dexie('Pocket')
db.version(1).stores({
  articles:
    '++id, __typename, given_title, give_url, excerpt, top_image_url, time_added, status',
})
