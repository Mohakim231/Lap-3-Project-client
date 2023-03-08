DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    profile_pic VARCHAR(255),
    isAdmin BOOLEAN DEFAULT FALSE NOT NULL
);
