import Dexie from 'dexie'

export const db = new Dexie('Pocket')
db.version(1).stores({
  articles:
    '++id, item_id, resolved_id, given_url, given_title, favorite, ' +
    'status, time_added, time_updated, time_read, time_favorited, sort_id, ' +
    'resolved_title, resolved_url, excerpt, is_article, is_index, has_video, ' +
    'has_image, word_count, lang, top_image_url, listen_duration_estimate',
})
