CREATE DATABASE twit;

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY ,
    users CHARACTER VARYING(32) NOT NULL
);

CREATE TABLE posts (
    id SERIAL NOT NULL PRIMARY KEY,
    post_text TEXT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL
);

CREATE TABLE comments (
    id SERIAL NOT NULL PRIMARY KEY,
    comment_text TEXT NOT NULL, 
    user_id INT REFERENCES users(id) NOT NULL,
    post_id INT REFERENCES posts(id) NOT NULL
);

INSERT INTO users (users) VALUES ('AKAMAL29');

ALERT TABLE USERS

INSERT INTO users (users) VALUES ('Baxa30');
INSERT INTO  posts (post_text,user_id) VALUES ('bugun bayam',2)
INSERT INTO comments(comment_text, user_id, post_id ) VALUES ('Ha togri ayytiz',2,1);



