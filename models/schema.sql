DROP DATABASE IF EXISTS MuySalsa_db;
CREATE DATABASE MuySalsa_db;

CREATE TABLE Places
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(70) NOT NULL,
	zone varchar(70) NOT NULL,
	url varchar(200) NOT NULL,
	budget varchar(20) NOT NULL,
	type varchar(20) NOT NULL,
	long decimal(13,10) NOT NULL,
	lat decimal(13,10) NOT NULL,
	address varchar(200),
    PRIMARY KEY (id)
);

CREATE TABLE Dish 
(
    id int NOT NULL AUTO_INCREMENT,
    dish varchar(50) NOT NULL,
    image varchar(200) NOT NULL,
    id_places int NOT NULL,
    PRIMARY KEY (id)
)