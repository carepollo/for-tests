CREATE DATABASE fatcim;
USE fatcim;

CREATE TABLE users (
    id_user int (10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR (180) NOT NULL,
    password_user VARCHAR (180) NOT NULL,
    profilepic VARCHAR(200),
    createddate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    permission int (3) DEFAULT 0
);

DESCRIBE users;