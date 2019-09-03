-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2019 at 03:14 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_affairs`
--

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Acara', '2019-08-06 00:00:00', '2019-08-06 00:00:00'),
(2, 'Konsumsi', '2019-08-06 00:00:00', '2019-08-06 00:00:00'),
(3, 'Transportasi', '2019-08-06 00:00:00', '2019-08-06 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `endpoints`
--

CREATE TABLE `endpoints` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `endpoints`
--

INSERT INTO `endpoints` (`id`, `path`, `method`, `createdAt`, `updatedAt`) VALUES
(1, '*', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(2, '/user/login', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(3, '/organization/add', 'POST', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(4, '/organization/add', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(5, '/organization', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(6, '/user/login', 'POST', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(7, '/user/logout', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(8, '/', 'GET', '2019-07-17 02:39:34', '2019-07-17 02:39:34'),
(9, '/permission', 'GET', '2019-07-17 02:49:57', '2019-07-17 02:49:57'),
(10, '/user/assign-endpoint', 'GET', '2019-07-17 03:12:24', '2019-07-17 03:12:24'),
(11, '/user/assign-endpoint/:userId', 'GET', '2019-07-17 03:13:11', '2019-07-17 03:13:11'),
(12, '/user/assign-endpoints/:userId', 'GET', '2019-07-17 03:13:28', '2019-07-17 03:13:28'),
(13, '/user/assign-endpoints', 'POST', '2019-07-17 03:38:01', '2019-07-17 03:38:01'),
(14, '/user', 'GET', '2019-07-17 05:09:11', '2019-07-17 05:09:11'),
(15, '/user/add', 'GET', '2019-07-18 07:28:08', '2019-07-18 07:28:08'),
(16, '/organization/propose/:userId', 'POST', '2019-07-18 21:17:43', '2019-07-18 21:17:43'),
(17, '/organization/propose/:userId', 'GET', '2019-07-18 21:19:12', '2019-07-18 21:19:12'),
(18, '/organization/propose', 'POST', '2019-07-18 21:41:12', '2019-07-18 21:41:12'),
(19, '/organization/propose/:organizationId', 'GET', '2019-07-22 03:51:14', '2019-07-22 03:51:14'),
(20, '/organization/get-proposals', 'GET', '2019-08-08 02:32:19', '2019-08-08 02:32:19'),
(21, '/proposal/:id', 'GET', '2019-08-08 03:35:25', '2019-08-08 03:35:25'),
(22, '/proposal/propose', 'POST', '2019-08-08 08:29:33', '2019-08-08 08:29:33'),
(23, '/user/add', 'POST', '2019-08-09 07:11:07', '2019-08-09 07:11:07'),
(24, '/proposal/all-pending', 'GET', '2019-08-09 07:23:11', '2019-08-09 07:23:11'),
(25, '/proposal/get-all-pending', 'GET', '2019-08-09 07:30:13', '2019-08-09 07:30:13'),
(26, '/proposal/id/:id', 'GET', '2019-08-09 07:57:34', '2019-08-09 07:57:34'),
(27, '/proposal/ajax-get-data/:id', 'GET', '2019-08-12 02:19:03', '2019-08-12 02:19:03'),
(28, '/proposal/ajax-get-data', 'GET', '2019-08-12 02:25:36', '2019-08-12 02:25:36'),
(29, '/proposalBackground/ajax-get-data', 'GET', '2019-08-12 03:03:05', '2019-08-12 03:03:05'),
(30, '/proposal-background/ajax-get-data', 'GET', '2019-08-12 03:08:37', '2019-08-12 03:08:37'),
(31, '/proposal-purpose/ajax-get-data', 'GET', '2019-08-12 03:22:45', '2019-08-12 03:22:45'),
(32, '/proposal-participant/ajax-get-data', 'GET', '2019-08-12 03:28:39', '2019-08-12 03:28:39'),
(33, '/proposal-committee/ajax-get-data', 'GET', '2019-08-12 03:53:45', '2019-08-12 03:53:45'),
(34, '/proposal-schedule/ajax-get-data', 'GET', '2019-08-12 04:11:16', '2019-08-12 04:11:16'),
(35, '/proposal-rundown/ajax-get-data', 'GET', '2019-08-12 04:21:02', '2019-08-12 04:21:02'),
(36, '/proposal-budget/ajax-get-data', 'GET', '2019-08-12 04:34:00', '2019-08-12 04:34:00'),
(37, '/proposal-income/ajax-get-data', 'GET', '2019-08-12 08:21:51', '2019-08-12 08:21:51'),
(38, '/proposal/ajax-revise', 'POST', '2019-08-19 22:13:24', '2019-08-19 22:13:24'),
(39, '/proposal-revision/ajax-get-data', 'GET', '2019-08-19 22:33:51', '2019-08-19 22:33:51'),
(40, '/proposal/all-revised', 'GET', '2019-08-19 22:51:34', '2019-08-19 22:51:34'),
(41, '/organization/get-proposed-proposals', 'GET', '2019-08-20 20:20:18', '2019-08-20 20:20:18'),
(42, '/organization/get-revised-proposals', 'GET', '2019-08-20 20:22:44', '2019-08-20 20:22:44'),
(43, '/proposal-background/revise', 'POST', '2019-08-30 21:11:29', '2019-08-30 21:11:29');

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `abbreviation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `abbreviation`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Barudak Seni Komputer', 'Bascom', '2019-07-12 13:57:59', '2019-07-12 13:57:59', 1),
(3, 'Badan Eksekutif Mahasiswa', 'BEM', '2019-07-12 21:01:23', '2019-07-12 21:01:23', 3);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `endpointId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `createdAt`, `updatedAt`, `userId`, `endpointId`) VALUES
(1, '2019-07-17 03:51:31', '2019-07-17 03:51:31', 1, 1),
(2, '2019-07-17 03:51:31', '2019-07-17 03:51:31', 1, 8),
(3, '2019-07-17 03:53:59', '2019-07-17 03:53:59', 1, 11),
(4, '2019-07-17 03:53:59', '2019-07-17 03:53:59', 1, 7),
(5, '2019-07-17 03:55:33', '2019-07-17 03:55:33', 1, 10),
(6, '2019-07-17 04:16:53', '2019-07-17 04:16:53', 1, 5),
(7, '2019-07-17 04:17:05', '2019-07-17 04:17:05', 3, 8),
(8, '2019-07-17 04:17:05', '2019-07-17 04:17:05', 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `proposalbackgrounds`
--

CREATE TABLE `proposalbackgrounds` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalbackgrounds`
--

INSERT INTO `proposalbackgrounds` (`id`, `name`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(16, 'Kegiatan ini merupakan sarana pertukaran informasi, pengembangan pola pikir, daya nalar dan kreatifitas mahasiswa yang diharapkan bermanfaat untuk mahasiswa itu sendiri', '2019-08-31 01:11:20', '2019-08-31 01:11:20', 1),
(17, 'Untuk meningkatkan pengetahuan mahasiswa tentang Sistem Keorganisasian Mahasiswa yang akan dilakukan', '2019-08-31 01:11:20', '2019-08-31 01:11:20', 1),
(18, 'Kegiatan ini merupakan wadah kegiatan', '2019-08-31 01:11:20', '2019-08-31 01:11:20', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalbudgets`
--

CREATE TABLE `proposalbudgets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL,
  `divisionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalbudgets`
--

INSERT INTO `proposalbudgets` (`id`, `name`, `quantity`, `price`, `createdAt`, `updatedAt`, `proposalId`, `divisionId`) VALUES
(1, 'Doorprize', 10, 15000, '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1, 1),
(2, 'Konsumsi', 20, 50000, '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1, 2),
(3, 'Sewa Long Elf 18 Seat', 1, 1700000, '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `proposalcommittees`
--

CREATE TABLE `proposalcommittees` (
  `id` int(11) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalcommittees`
--

INSERT INTO `proposalcommittees` (`id`, `position`, `name`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, 'Ketua Pelaksana', 'Rizqia Alfajrin', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(2, 'Bendahara', 'Lisna Sari', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(3, 'Sekretaris', 'Devi Romadhona', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(4, 'Seksi Transportasi', 'Ilham Yanuar Praditia', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(5, 'Seksi Acara', 'Annisa Yourinda', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(6, 'Seksi Acara', 'Anggia Sukma Ramadhan', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(7, 'Seksi Transportasi', 'Vallen Rigananta', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(8, 'MC', 'Skolastika Anastasya Naibaho', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(9, 'MC', 'Liawan', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(10, 'Seksi Dokumentasi', 'Aditya Dimas', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(11, 'Seksi Konsumsi', 'Silmi Silvia Ramadhani', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalincomes`
--

CREATE TABLE `proposalincomes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalincomes`
--

INSERT INTO `proposalincomes` (`id`, `name`, `quantity`, `amount`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, '-', 0, 0, '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalparticipants`
--

CREATE TABLE `proposalparticipants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalparticipants`
--

INSERT INTO `proposalparticipants` (`id`, `name`, `number`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, 'BPM', 20, '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalpurposes`
--

CREATE TABLE `proposalpurposes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalpurposes`
--

INSERT INTO `proposalpurposes` (`id`, `name`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, 'Untuk mengetahui bagaimana sebuah kebijakan publik dibuat oleh DPR RI', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(2, 'Untuk mengetahui berbagai landasan, kepentingan dan alasan yang melandasi sebuah kebijakan yang telah dibuat oleh DPR RI', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(3, 'Dapat saling tukar pikiran dan mengoptimalkan informasi guna memperlancar roda organisasi', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(4, 'Untuk dijadikan barometer dan pembanding yang kemudian akan dianalisis serta untuk pembaharuan yang aplikatif agar bisa diterapkan untuk BPM LPKIA', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(5, 'Menjalin silaturahmi antara fungsionaris dari tiap-tiap Universitas', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalrevisions`
--

CREATE TABLE `proposalrevisions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalrevisions`
--

INSERT INTO `proposalrevisions` (`id`, `name`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(10, 'Latar belakang ngaco', '2019-08-31 01:07:41', '2019-08-31 01:07:41', 1),
(11, 'Tujuan aneh', '2019-08-31 01:07:41', '2019-08-31 01:07:41', 1),
(12, 'Isinya kemana-mana', '2019-08-31 01:07:41', '2019-08-31 01:07:41', 1),
(13, 'Tidak ada pendapatan', '2019-08-31 01:07:41', '2019-08-31 01:07:41', 1),
(14, 'Panitia kebanyakan', '2019-08-31 01:07:41', '2019-08-31 01:07:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposalrundowns`
--

CREATE TABLE `proposalrundowns` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `start` time DEFAULT NULL,
  `finish` time DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalrundowns`
--

INSERT INTO `proposalrundowns` (`id`, `name`, `start`, `finish`, `pic`, `notes`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, 'Prepare Keberangkatan', '04:30:00', '05:00:00', 'Seluruh Peserta', 'Kampus LPKIA', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(2, 'Berangkat menuju DPR RI', '05:00:00', '08:00:00', 'Seluruh Peserta', 'Kampus LPKIA', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(3, 'Prepare Kegiatan di DPR RI', '08:00:00', '09:00:00', 'Seluruh Peserta', 'Kampus LPKIA', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `proposals`
--

CREATE TABLE `proposals` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `theme` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `forms` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `organizationId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposals`
--

INSERT INTO `proposals` (`id`, `name`, `theme`, `date`, `place`, `forms`, `status`, `createdAt`, `updatedAt`, `organizationId`) VALUES
(1, 'Kunjungan Ke DPR RI dan Studi Banding Ke Universitas Tarumanagara Jakarta Serta Universitas Negeri Jakarta', 'Safari dan Ngopi (Ngobrol Pintar)', '2019-07-04 02:00:00', 'DPR RI, Universitas Tarumanagara, UNJ', 'Kunjungan, Studi Banding dan Diskusi', 'revised', '2019-08-08 07:39:17', '2019-08-31 01:07:41', 3);

-- --------------------------------------------------------

--
-- Table structure for table `proposalschedules`
--

CREATE TABLE `proposalschedules` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `proposalId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proposalschedules`
--

INSERT INTO `proposalschedules` (`id`, `name`, `date`, `pic`, `createdAt`, `updatedAt`, `proposalId`) VALUES
(1, 'Pembentukan Panitia', '2019-06-14', 'Ketua Pelaksana', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(2, 'Pemesanan Transport Isuzu Elf Long (18 Seat)', '2019-06-15', 'Sie. Transportasi', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(3, 'Konfirmasi Kunjungan DPR RI', '2019-06-28', 'Sie. Acara', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(4, 'Konfirmasi Kunjungan UNJ', '2019-06-25', 'Sie. Acara', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(5, 'Konfirmasi Kunjungan UNTAR', '2019-06-28', 'Sie. Acara', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(6, 'Penyusunan Surat-surat', '2019-06-28', 'Sekretaris', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(7, 'Konfirmasi Susunan Acara Rundown', '2019-06-28', 'Sie. Acara', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(8, 'Penyusunan Proposal', '2019-06-29', 'Sekretaris', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(9, 'Rapat Awal', '2019-06-17', 'Seluruh Panitia', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(10, 'Rapat Pembahasan 1', '2019-06-19', 'Seluruh Panitia', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1),
(11, 'Rapat Pembahasan 2', '2019-08-20', 'Seluruh Panitia', '2019-08-08 07:39:17', '2019-08-08 07:39:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(1, 'bascom', '$2a$10$XIn8zxxXcQ.lfF1.nwr5DObylJk5YgXKo1ow3E2.hnjB0NKaTD0Z.', 'organization', '2019-07-12 13:57:59', '2019-07-12 13:57:59'),
(3, 'bem', '$2a$10$j2cKeLkR35diFjuB8hORXekGb9uVtg/Ai97taLyWTf9QBBdTVSsk.', 'organization', '2019-07-12 21:01:23', '2019-07-12 21:01:23'),
(5, 'admin', '$2a$10$uhcFFw9U3BxN0Xg1eKIituUl4AoAsLdkwHWD6Dq4WAGo47WUmxHmO', 'admin', '2019-07-18 08:04:29', '2019-07-18 08:04:29'),
(6, 'kmhs', '$2a$10$2Jj.Ikwp6HTwhF.25IgdLuBdD.zX8TNU01SvlYVcp5FJRoZFGTxvG', 'coach', '2019-08-09 07:16:41', '2019-08-09 07:16:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `endpoints`
--
ALTER TABLE `endpoints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `endpointId` (`endpointId`);

--
-- Indexes for table `proposalbackgrounds`
--
ALTER TABLE `proposalbackgrounds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalbudgets`
--
ALTER TABLE `proposalbudgets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`),
  ADD KEY `divisionId` (`divisionId`);

--
-- Indexes for table `proposalcommittees`
--
ALTER TABLE `proposalcommittees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalincomes`
--
ALTER TABLE `proposalincomes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalparticipants`
--
ALTER TABLE `proposalparticipants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalpurposes`
--
ALTER TABLE `proposalpurposes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalrevisions`
--
ALTER TABLE `proposalrevisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposalrundowns`
--
ALTER TABLE `proposalrundowns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `proposals`
--
ALTER TABLE `proposals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organizationId` (`organizationId`);

--
-- Indexes for table `proposalschedules`
--
ALTER TABLE `proposalschedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proposalId` (`proposalId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `endpoints`
--
ALTER TABLE `endpoints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `proposalbackgrounds`
--
ALTER TABLE `proposalbackgrounds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `proposalbudgets`
--
ALTER TABLE `proposalbudgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `proposalcommittees`
--
ALTER TABLE `proposalcommittees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `proposalincomes`
--
ALTER TABLE `proposalincomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proposalparticipants`
--
ALTER TABLE `proposalparticipants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proposalpurposes`
--
ALTER TABLE `proposalpurposes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `proposalrevisions`
--
ALTER TABLE `proposalrevisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `proposalrundowns`
--
ALTER TABLE `proposalrundowns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `proposals`
--
ALTER TABLE `proposals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proposalschedules`
--
ALTER TABLE `proposalschedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `organizations`
--
ALTER TABLE `organizations`
  ADD CONSTRAINT `organizations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `permissions_ibfk_2` FOREIGN KEY (`endpointId`) REFERENCES `endpoints` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalbackgrounds`
--
ALTER TABLE `proposalbackgrounds`
  ADD CONSTRAINT `proposalbackgrounds_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalbudgets`
--
ALTER TABLE `proposalbudgets`
  ADD CONSTRAINT `proposalbudgets_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `proposalbudgets_ibfk_2` FOREIGN KEY (`divisionId`) REFERENCES `divisions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalcommittees`
--
ALTER TABLE `proposalcommittees`
  ADD CONSTRAINT `proposalcommittees_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalincomes`
--
ALTER TABLE `proposalincomes`
  ADD CONSTRAINT `proposalincomes_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalparticipants`
--
ALTER TABLE `proposalparticipants`
  ADD CONSTRAINT `proposalparticipants_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalpurposes`
--
ALTER TABLE `proposalpurposes`
  ADD CONSTRAINT `proposalpurposes_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalrevisions`
--
ALTER TABLE `proposalrevisions`
  ADD CONSTRAINT `proposalrevisions_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalrundowns`
--
ALTER TABLE `proposalrundowns`
  ADD CONSTRAINT `proposalrundowns_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposals`
--
ALTER TABLE `proposals`
  ADD CONSTRAINT `proposals_ibfk_1` FOREIGN KEY (`organizationId`) REFERENCES `organizations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `proposalschedules`
--
ALTER TABLE `proposalschedules`
  ADD CONSTRAINT `proposalschedules_ibfk_1` FOREIGN KEY (`proposalId`) REFERENCES `proposals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;