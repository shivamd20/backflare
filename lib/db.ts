
export async function getUserById(db: D1Database, id: string) {
  return await db.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
}

export async function insertToken(db: D1Database, token: any) {
  const { id, userId, provider, accessToken, refreshToken, expiresAt, scope } = token;
  return await db.prepare(
    'INSERT INTO user_tokens (id, user_id, provider, access_token, refresh_token, expires_at, scope) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).bind(id, userId, provider, accessToken, refreshToken, expiresAt, scope).run();
}

export async function getUserTokens(db: D1Database, userId: string) {
  return await db.prepare('SELECT * FROM user_tokens WHERE user_id = ?').bind(userId).all();
}

export async function insertUserEvent(db: D1Database, event: any) {
  const { id, userId, eventType, eventData } = event;
  return await db.prepare(
    'INSERT INTO user_events (id, user_id, event_type, event_data) VALUES (?, ?, ?, ?)'
  ).bind(id, userId, eventType, JSON.stringify(eventData)).run();
}