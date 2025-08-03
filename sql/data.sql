-- Create database if not exists
CREATE DATABASE IF NOT EXISTS finalProjectIT647;
USE finalProjectIT647;

-- Drop table if exists
DROP TABLE IF EXISTS finalProjectIT647Table;

-- Create table
CREATE TABLE finalProjectIT647Table (
    confirmationNumber VARCHAR(50) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(20) NOT NULL
);

-- Insert test data
INSERT INTO finalProjectIT647Table (confirmationNumber, Name, Email, Phone) VALUES
('CONF12345', 'Alice Johnson', 'alice@example.com', '555-1234'),
('CONF23456', 'Bob Smith', 'bob@example.com', '555-2345'),
('CONF34567', 'Charlie Davis', 'charlie@example.com', '555-3456');
