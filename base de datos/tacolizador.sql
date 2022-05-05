-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2022 a las 03:44:34
-- Versión del servidor: 5.7.14-log
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tacolizador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `name`, `run_on`) VALUES
(1, '/20220425022123-update-taqueria', '2022-04-24 19:35:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taqueria`
--

CREATE TABLE `taqueria` (
  `id_taqueria` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `calidad` int(1) NOT NULL,
  `precio` int(1) NOT NULL,
  `comentario` text NOT NULL,
  `latitud` int(11) NOT NULL,
  `longitud` int(11) NOT NULL,
  `pagina_fb` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `taqueria`
--

INSERT INTO `taqueria` (`id_taqueria`, `nombre`, `calidad`, `precio`, `comentario`, `latitud`, `longitud`, `pagina_fb`) VALUES
(2, 'la esquina', 4, 26, ' maloooo', -123564, 325556, 'LaEsquina.com'),
(3, 'tormenta', 4, 26, ' regular', -123564, 325556, 'LaEsquina.com'),
(4, 'la barata', 1, 12, ' buen servicio', -12000, 21000, 'Labarata.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `taqueria`
--
ALTER TABLE `taqueria`
  ADD PRIMARY KEY (`id_taqueria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `taqueria`
--
ALTER TABLE `taqueria`
  MODIFY `id_taqueria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
