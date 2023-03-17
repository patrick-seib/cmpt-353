SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sampledb`
--


CREATE TABLE `sample` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `sample` (`id`, `name`) VALUES
(1, 'Mercury'),
(2, 'Venus'),
(3, 'Earth'),
(4, 'Mars'),
(5, 'Jupiter'),
(6, 'Saturn'),
(7, 'Uranus'),
(8, 'Neptune');


ALTER TABLE `sample`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `sample`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

CREATE TABLE `posts` (
  `topic` varchar(100) NOT NULL,
  `data` varchar(255) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sample`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;