CREATE DATABASE IF NOT EXISTS guzolink;

USE guzolink;


CREATE TABLE IF NOT EXISTS users (
  id       INT AUTO_INCREMENT PRIMARY KEY,  
  fullname VARCHAR(100) NOT NULL,          
  email    VARCHAR(150) NOT NULL UNIQUE,   
  password VARCHAR(255) NOT NULL            
);


CREATE TABLE IF NOT EXISTS trips (
  id       INT AUTO_INCREMENT PRIMARY KEY,  
  title    VARCHAR(200) NOT NULL,           
  location VARCHAR(200) NOT NULL,          
  days     INT NOT NULL,                    
  price    DECIMAL(10, 2) NOT NULL,         
  image    VARCHAR(500)                     
);
