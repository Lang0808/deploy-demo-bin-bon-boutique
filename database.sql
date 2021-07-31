-- CREATE DATABASE Clothes

CREATE TABLE clothes (
    productid serial primary key,
    productname varchar(50),
    quantity int,
    price int,
    description varchar(300),
    discount int,
    gender varchar(7),
    agestart int,
    ageend int
);

CREATE TABLE banner (
    productid int primary key
);

CREATE TABLE url (
    id int,
    url varchar(100),
    primary key(id, url)
);