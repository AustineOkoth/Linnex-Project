-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2022 at 03:48 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linnexwebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `registrationwebdata`
--

CREATE TABLE `registrationwebdata` (
  `id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phonenumber` int(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `course` varchar(100) NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registrationwebdata`
--

INSERT INTO `registrationwebdata` (`id`, `name`, `phonenumber`, `email`, `course`, `date`) VALUES
(3, 'Austine Okoth Okongo', 701554630, 'austinaustine4@gmail.com', 'Computer Engineering', '12/1/2022'),
(4, 'Roddy Ricch', 701554630, 'roddyricch@gmail.com', 'Front Office Administration and Management', '12/1/2022'),
(5, 'Lupita Nyongo', 712345678, 'lupita@gmail.com', 'Proficiency in make up and hair removal', '12/1/2022');

-- --------------------------------------------------------

--
-- Table structure for table `studentfullpersonalinfo`
--

CREATE TABLE `studentfullpersonalinfo` (
  `id` int(100) NOT NULL,
  `name` varchar(70) NOT NULL,
  `admno` int(10) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `course` varchar(150) NOT NULL,
  `dateOfBirth` varchar(20) DEFAULT NULL,
  `gender` varchar(10) NOT NULL,
  `phoneNumber` int(15) DEFAULT NULL,
  `country` varchar(15) DEFAULT NULL,
  `homeaddress` varchar(20) DEFAULT NULL,
  `marital` varchar(10) DEFAULT NULL,
  `religion` varchar(50) DEFAULT NULL,
  `disability` varchar(30) DEFAULT NULL,
  `occupation` varchar(20) DEFAULT NULL,
  `language` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentfullpersonalinfo`
--

INSERT INTO `studentfullpersonalinfo` (`id`, `name`, `admno`, `email`, `course`, `dateOfBirth`, `gender`, `phoneNumber`, `country`, `homeaddress`, `marital`, `religion`, `disability`, `occupation`, `language`) VALUES
(4, 'Austine Okoth Okongo', 4321, 'austinaustine4@gmail.com', 'Computer Engineering', '2000-11-25', 'Male', 701554630, 'Kenya', '46800-0100', 'Single', 'Christianity', 'None', 'JKUAT Student', 'English, Spanish, Swahili'),
(5, 'Bill Gates', 1111, 'billgates@money.com', 'Software and Hardware Maintenance', '1977-06-14', 'Male', 701554630, 'United States', '456900-0100 Washingt', 'Married', 'Muslim', 'None', 'Business  Manager', 'English, France'),
(6, 'Lupita Nyong\'o', 3434, 'lupita@beauty.com', 'Proficiency in make up and hair removal', '1998-08-12', 'Female', 701554630, 'Kenya', 'Siaya , Bondo', 'Devorced', 'Christianity', 'None', 'Model', 'English, Spanish, Swahili, Fra');

-- --------------------------------------------------------

--
-- Table structure for table `studentsdata`
--

CREATE TABLE `studentsdata` (
  `id` int(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `admno` int(100) NOT NULL,
  `course` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentsdata`
--

INSERT INTO `studentsdata` (`id`, `name`, `admno`, `course`, `password`) VALUES
(6, 'Austine Okoth Okongo', 4321, 'Computer Engineering', '$2a$10$9mdet4quDugv/86tgjb7MO5pNNTwL2pCg.FtsytdypudXxgnSpdxe'),
(7, 'Roddy Ricch', 1234, 'Front Office Administration and Management', '$2a$10$X2xYRexn/AEe3CkIfX5/rujQgWfyKSKk4ccCUExXVxHSeutmai.W.'),
(8, 'Bill Gates', 1111, 'Software and Hardware Maintenance', '$2a$10$o8jiATxESRh.7rQq1YYwf.wkjv.CBJMgjKYeCwD59z9jwOpXzhaLC'),
(9, 'Wangari Mathae', 2222, 'Beauty Therapy', '$2a$10$AwV9ofDatcQ/Y.dm1NrgQuDke/sTY.iE67b2l7yn2gnQkcQHbywzO'),
(10, 'Lupita Nyong\'o', 3434, 'Proficiency in make up and hair removal', '$2a$10$l8DxSLK9cTOkVHh5Lf3jDeGRBklC2FKX7d/W6UcirjcSOt3zp7o5K');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registrationwebdata`
--
ALTER TABLE `registrationwebdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentfullpersonalinfo`
--
ALTER TABLE `studentfullpersonalinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentsdata`
--
ALTER TABLE `studentsdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registrationwebdata`
--
ALTER TABLE `registrationwebdata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `studentfullpersonalinfo`
--
ALTER TABLE `studentfullpersonalinfo`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `studentsdata`
--
ALTER TABLE `studentsdata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
