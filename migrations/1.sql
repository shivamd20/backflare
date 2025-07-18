-- users table
CREATE TABLE IF NOT EXISTS user (
                                    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4)) || '-' || hex(randomblob(2)) || '-4' || substr(hex(randomblob(2)),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(hex(randomblob(2)),2) || '-' || hex(randomblob(6)))),
                                    name TEXT,
                                    email TEXT UNIQUE,
                                    emailVerified INTEGER,
                                    image TEXT
);

-- account table
CREATE TABLE IF NOT EXISTS account (
                                       userId TEXT NOT NULL,
                                       type TEXT NOT NULL,
                                       provider TEXT NOT NULL,
                                       providerAccountId TEXT NOT NULL,
                                       refresh_token TEXT,
                                       access_token TEXT,
                                       expires_at INTEGER,
                                       token_type TEXT,
                                       scope TEXT,
                                       id_token TEXT,
                                       session_state TEXT,
                                       PRIMARY KEY (provider, providerAccountId),
                                       FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

-- session table
CREATE TABLE IF NOT EXISTS session (
                                       sessionToken TEXT PRIMARY KEY,
                                       userId TEXT NOT NULL,
                                       expires INTEGER NOT NULL,
                                       FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

-- verificationToken table
CREATE TABLE IF NOT EXISTS verificationToken (
                                                 identifier TEXT NOT NULL,
                                                 token TEXT NOT NULL,
                                                 expires INTEGER NOT NULL,
                                                 PRIMARY KEY (identifier, token)
);

-- authenticator table
CREATE TABLE IF NOT EXISTS authenticator (
                                             credentialID TEXT NOT NULL UNIQUE,
                                             userId TEXT NOT NULL,
                                             providerAccountId TEXT NOT NULL,
                                             credentialPublicKey TEXT NOT NULL,
                                             counter INTEGER NOT NULL,
                                             credentialDeviceType TEXT NOT NULL,
                                             credentialBackedUp INTEGER NOT NULL CHECK (credentialBackedUp IN (0, 1)),
                                             transports TEXT,
                                             PRIMARY KEY (userId, credentialID),
                                             FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);
