CREATE DATABASE IF NOT EXISTS mysite CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER IF NOT EXISTS 'mysiteuser'@'%' IDENTIFIED BY 'mysitepass';
GRANT ALL PRIVILEGES ON *.* TO 'mysiteuser'@'%';

FLUSH PRIVILEGES;
