-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: test3
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clicksbyproducts`
--

DROP TABLE IF EXISTS `clicksbyproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clicksbyproducts` (
  `id` int(11) NOT NULL,
  `numberOfClicks` int(11) DEFAULT 0,
  `lastRestarted` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_19637d65-761d-4b62-b0d7-d2a0d2b9c005` FOREIGN KEY (`id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clicksbyproducts`
--

LOCK TABLES `clicksbyproducts` WRITE;
/*!40000 ALTER TABLE `clicksbyproducts` DISABLE KEYS */;
INSERT INTO `clicksbyproducts` VALUES (1,2,'18/5/2022 20:46:39'),(2,2,'18/5/2022 20:46:39'),(3,3,'18/5/2022 20:46:39'),(4,3,'18/5/2022 20:46:39'),(5,1,'18/5/2022 20:46:39'),(6,0,'18/5/2022 20:46:39'),(7,1,'18/5/2022 20:46:39'),(8,0,'18/5/2022 20:46:39'),(9,1,'18/5/2022 20:46:39'),(10,0,'18/5/2022 20:46:39'),(11,0,'18/5/2022 20:46:39'),(12,2,'18/5/2022 20:46:39'),(13,0,'18/5/2022 20:46:39'),(14,0,'18/5/2022 20:46:39'),(15,0,'18/5/2022 20:46:39'),(34,0,'18/5/2022 20:46:39'),(35,0,'18/5/2022 20:46:39'),(36,0,'18/5/2022 20:46:39'),(37,0,'18/5/2022 20:46:39'),(38,0,'18/5/2022 20:46:39');
/*!40000 ALTER TABLE `clicksbyproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loggedusers`
--

DROP TABLE IF EXISTS `loggedusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loggedusers` (
  `id` int(11) NOT NULL,
  `numberOfUsers` int(11) DEFAULT 0,
  `lastRestarted` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loggedusers`
--

LOCK TABLES `loggedusers` WRITE;
/*!40000 ALTER TABLE `loggedusers` DISABLE KEYS */;
INSERT INTO `loggedusers` VALUES (1,1,'18/5/2022 20:46:54');
/*!40000 ALTER TABLE `loggedusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newusers`
--

DROP TABLE IF EXISTS `newusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numberOfNewUsers` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newusers`
--

LOCK TABLES `newusers` WRITE;
/*!40000 ALTER TABLE `newusers` DISABLE KEYS */;
INSERT INTO `newusers` VALUES (1,0);
/*!40000 ALTER TABLE `newusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `caract1` varchar(70) NOT NULL,
  `caract2` varchar(70) NOT NULL,
  `caract3` varchar(70) DEFAULT NULL,
  `caract4` varchar(70) DEFAULT NULL,
  `dailyOnSale` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(50) NOT NULL,
  `productsCategoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_86652ee9-9c2d-4ca2-a1d5-e44cb18a9d10` (`productsCategoryId`),
  CONSTRAINT `FK_86652ee9-9c2d-4ca2-a1d5-e44cb18a9d10` FOREIGN KEY (`productsCategoryId`) REFERENCES `productscategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Auriculares Gamer JBL Quantum 400 PC/PS4/XBOX',10000,35,'Modelo: Quantum 400','Es inalámbrico: No','Con Bluetooth: No','Tipo de conector: Jack 3.5 mm',0,'Auriculares diseñados con precisión junto a un software personalizado y de vanguardia para llevarte al corazón de la acción. \r\nExperimenta un sonido hiper preciso e inmersivo que revela cada detalle del mundo que te rodea, para que puedas superar a tus rivales.','auriculares-real.jpg',1),(2,'Camara Digital POWERSHOT',80000,25,'Color: Negro','Tipo De Maquina: Digital Semiprofesional','Zoom: 50x','Resolución De Video: Full HD',0,'Camara CANON, de 20.3mpx y con procesador digic6 que es mas rapido y de mayor calidad! Pantalla de 3.0 pulgadas y estabilizador de imagen!','camara-real.jpg',2),(3,'Silla Gamer Makkax',39999,40,'Material del tapizado: Cuero sintético/Plástico/Mesh','Con altura regulable: Sí','Con apoyabrazos: Sí','Con respaldo reclinable: Sí',0,'La experiencia de jugar como un verdadero PRO. Este modelo viene con todo lo necesario para que puedas vivir intensamente cada partida.  Además cuenta con un sistema regulable en altura, y una reclinacion de hasta 180°.','silla-gamer.jpg',1),(4,'Consola Playstation 5 825Gb Fisica Edition Ps5',202699,15,'Marca: Sony','Modelo: Playstation 5','Procesador: AMD Ryzen X86-64, 8 núcleos','Motor gráfico: AMD Radeon',1,'Experimentá una carga increíblemente rápida con un SSD de ultra alta velocidad, inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D, y una nueva generación de juegos increíbles de PlayStation!','image-1644782887887.jpg',1),(5,'Silla Gamer Aerocool Admiral Ice Blue',43590,5,'Aerocool','Con respaldo reclinable: Sí','Con altura regulable: Sí','Con apoyabrazos: Sí',1,'Regulable. De cuero sintético. Con apoya brazos, reclinable, completamente confortable para uso de muchas horas.  En color negro, con detalles celestes.','image-1644958057536.jpg',1),(6,'Silla Gamer Vertagear Racing',58190,7,'Series SL-2000','Color negro carbón','Anatómica','Con altura regulable: Sí',1,'Una combinación de forma y función, la silla para juegos Vertagear Racing Series S-Line SL2000 se centra en la ergonomía, el diseño y la funcionalidad. Diseñada para brindar una amplia gama de ajustes que brindan a los jugadores la mejor comodidad y soporte en cada posición de juego durante un período prolongado de tiempo, esta silla S-Line es perfecta para los usuarios que desean jugar largas sesiones de juego.\r\n\r\n','image-1644958235964.jpg',1),(7,'Silla Gamer Ergonómica',21999,15,'Escritorio-PC','Anatómica','Con altura regulable: Sí','Con apoyabrazos: Sí',1,'Base de mecanismo “mariposa” de acero inoxidable, con 5 ruedas.\r\n- Altura regulable: 125 cm a 133 cm.\r\n- Ancho del respaldo: 42 cm\r\n- Medida del asiento: 38 cm de ancho x 48 cm de largo.\r\n- Diámetro de base: 70 cm.\r\n- Función giratoria 360°\r\n- Tapizado: Cuero sintético.\r\n- Altura Regulable.\r\n- Levantamiento Hidráulico 10 cm.\r\n- Base cromada\r\n','image-1644958339093.jpeg',1),(8,'AURICULARES GAMING ZIVA TRUST',1440,5,'AUR523','Es inalámbrico: No','Tiene bluetooth: No','Sonido Deluxe',1,'Ideal para juegos en línea, música y aplicaciones de chat\r\nDiadema ajustable y almohadillas blandas para los oídos\r\nMicrófono escamoteable de alta sensibilidad\r\nControl de volumen en los tapones para oídos\r\nFunciona con todos los PC y ordenadores portátiles\r\nCable de 1,8 mts\r\n','image-1644958456112.jpg',1),(9,'AURICULARES CORSAIR VIRTUOSO WIRELESS',33535,10,'SE RGB HIFI GAMING GUN M','Es inalámbrico: Si','Tiene bluetooth: Si','Sonido Deluxe',1,'Los CORSAIR VIRTUOSO RGB Wireless SE ofrecen una experiencia de sonido de alta fidelidad y una comodidad continua gracias a las orejeras de espuma con memoria premium y una conectividad hiperrápida con tecnología SLIPSTREAM WIRELESS.\r\nCalidad de sonido impecable\r\nCon los VIRTUOSO RGB Wireless podrá escucharlo todo, desde la pisada más fuerte hasta el tono bajo más profundo. Un par de transductores de neodimio de alta densidad de 50 mm ajustados con precisión ofrecen un rango de frecuencia de 20 Hz-40 000 Hz, el doble que casi todos los auriculares de juego.\r\nLa comodidad es la clave\r\nLas almohadillas de espuma viscoelástica premium se adaptan a la forma de su cabeza.','image-1644958616087.jpg',1),(10,'AURICULARES HYPERX CLOUD',28260,20,'Modelo: Orbit S','Es inalámbrico: Si','Tiene bluetooth: Si','Sonido Deluxe',1,'Modelo : Cloud Orbit S\r\n- P/N : HX-HSCOS-GM/WW\r\n- UPC : 740617289664\r\n- Tipo de salida : Stereo\r\n- Tipo de copa : Circumaural\r\n- Material Diadema : Plástico\r\n- Plegable : No\r\n- Vibración : No\r\n- Modos : Audio 3D con seguimiento de cabeza\r\n- Respuesta en frecuencia : 10 Hz - 50.000 Hz\r\n- Sensibilidad : 120 dB\r\n- Retroiluminación : No\r\n- Conectividad : Miniplug 3.5mm - USB-C (Tipo A y Tipo B)\r\n- Bluetooth : No\r\n- Control de volumen : Integrado en auricular\r\n- Largo de cable : USB tipo A 3M - USB tipo C 1.5m - Miniplug 3.5mm 1.2m\r\n- Peso : 368 g\r\n- Software : Si\r\n- Microfono : Desmontable, unidireccional\r\n- Compatibilidad : PC, PS4, Xbox One, Mac, Mobile, Nintendo Switch, VR\r\n- Duración de la bateria : Modo analógico de 3,5mm 10 horas\r\n- Contenido de la caja : Headset, Cables USB tipo A, USB tipo C, y 3,5mm\r\n(de 4 polos), Micrófono\r\n','image-1644958766379.jpg',1),(11,'TECLADO Y MOUSE GAMER RGB GTX3000',1587,15,'MODELO RGB GTX3000','Con reposamuñecas','Luces','Impermeable',1,'Botones de teclado: conector USB 1.1 / 2.0, longitud del cable de aproximadamente 1,5 metros, 104 botones estándar, botones claros y precisos, barra de espacio grande y cómodo reposamuñecas para minimizar la fatiga. Botones intercambiables, Win puede desactivar el juego. Un botón para encender/apagar las luces, diseño impermeable, fácil de limpiar; duradero, no se decolora, grabado con láser color de la tapa, ideal para el hogar y la oficina.','image-1644958877310.jpg',1),(12,'Apple IPhone SE 2nd Generacion 64Gb',140000,30,'Marca: Apple','Línea: iPhone','Modelo: iPhone SE (2nd Generacion)','Memoria interna: 64 GB',0,'El iPhone SE llegó con todo: El chip más potente en el tamaño más popular. Justo lo que estabas esperando.Brillante pantalla Retina HD de 4.7 pulgadas. Velocidad y seguridad Touch ID. Resistencia al agua hasta 1 metro por 30 minutos. Y todo en un diseño ligero y delgado.','celular-real.jpg',3),(13,'iPhone 12',284999,5,'Color Verde','Memoria de 256GB','Camara frontal HD','IOS',1,'El chip A14 Bionic, el más rápido en un smartphone. Una pantalla OLED de borde a borde. Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas. Además, ahora el modo Noche viene en todas las cámaras.','image-1644959251650.png',3),(14,'CÁMARA NIKON D3500',209202,10,'Modelo D3500','Ligera','Facil de Usar','Calidad Deluxe',1,'La D3500 se siente de maravilla en sus manos. Es ligera y su peso está equilibrado, incluso cuando se usa un lente telefoto. Sus botones y diales están ubicados estratégicamente para proporcionar comodidad y facilidad de uso, mientras que el menú del sistema es simple e intuitivo. La D3500 es rápida, tiene gran capacidad de respuesta y es fácil de usar.','image-1644959023462.png',2),(15,'Cámara Fotográfica CANON PowerShot ZOOM Blanco',62700,5,'Modelo Digital Compacta','SuperZoom!','Fotos y videos HD','Perfecta para la Familia',1,'La PowerShot ZOOM es una cámara superzoom monocular de bolsillo que captura fotos y vídeos Full HD con solo pulsar un botón.','image-1644959149682.jpg',2),(34,'Celular Samsung Galaxy S22 Ultra 256GB',219999,20,'El primer Galaxy S con S Pen integrado','Carga ultra rápida','PowerShare inalámbrico','Sensor de píxeles grandes',1,'El S Pen se adapta directamente en la S por primera vez. Expulsalo desde la parte inferior del smartphone para escribir, hacer un dibujo o controlar tu smartphone. La latencia mejorada en Samsung Notes hace que cada pincelada se sienta tan natural como la tinta en papel, y podés convertir esas ideas escritas apresuradamente en texto legible.','image-1652050393733.jpg',3),(35,'CELULAR SAMSUNG SM-F926B Z FOLD3 PLATA',239999,15,'Color: PLATA',' Memoria RAM: 12 GB','Camara principal: 12 + 12 + 12 MP','Bluetooth: SI',1,'Esto es todo lo que querías en un smartphone 5G duradero y de primera calidad.1 Lo creamos plegable para revelar una enorme pantalla en la que puedas ver, trabajar y divertirte como nunca antes.','image-1652050665907.png',3),(36,' CELULAR MOTOROLA MOTO G60S AQUA',52999,35,'Color: AQUA','Memoria RAM: 6 GB','Camara principal: 64 + 8 + 5 + 2MP','Bluetooth: SI',1,'Celular de 6.78\" IPS (20.5:9). Procesador Octa Core (Velocidad 1.8Ghz). Mediatek Helio G95. Resolucion 1080 x 2460, 396ppi, HiD, 120Hz. Almacenamiento 128 Gb (Expandible 1 Tb) / RAM 6GB LPDDR4x uMCP, UFS2.1. Lector de tarjeta SD. Camara Principal: 64MP (80.1) F1.7Ultra Gran Angular: 8MP (118) F2.2 Macro: 5MP (87.4) F2.2Profundidad: 2MP (80.1) F2.4\". Zoom digital (8x fotos / 8x video). Flash LED. Camara frontal 16MP (74.5) F2.2. Resolucion de video UHD 4K 9:16 a 30fps 2160 x 3840UHD 4K 9:20.5 a 30fps 1686 x 3840FHD 9:16 a 30fps 1080 x 1920FHD 20.5:9 a 30fps 842 x 1920\".','image-1652050926129.jpg',3),(37,'CÁMARA DEPORTIVA ACTION CAM 4K ACN4K1 - NOBLEX',13200,25,'Pantalla Dual: Delantera de 0.66” y Trasera 2.0”','Cámara de fotos 16MP','Potente procesador Resolución de video 4K','Lente 6G de ángulo ultra amplio',1,'Formato de video MP4. Formato de imagen JPG. App para iOS/ Android Tarjeta de Memoria Micro SD hasta 64GB (no incluida) Batería de Litio de 1050mAh, de alta duración Puertos Micro-HDMI y Micro-USB Micrófono Integrado Sumergible hasta 30 metros Color Negro (*) Interpolado Medidas (Alto x Ancho x Prof.): 58 x 30 x 42 mm','image-1652051316927.jpg',2),(38,'Cámara Blackmagic Design Pocket Cinema 6k Hdr Para Cine',749000,12,'Marca: Blackmagic Design','Sensor de imagen HDR 6K','13 paradas de rango dinámico','Baterías estándar extraíbles',1,'La Blackmagic Pocket Cinema Camera 6K es una nueva cámara de cine digital portátil con un sensor de imagen HDR 6K Super 35 de tamaño completo, 13 paradas de rango dinámico, una montura de lente EF y doble ISO nativo de hasta 25,600 para un rendimiento increíble con poca luz. Este nuevo modelo se basa en la popularidad de la Blackmagic Pocket Cinema Camera 4K, pero tiene un tamaño de sensor Super 35 más grande con una resolución de 6K, lo que permite una mayor calidad de imagen. El modelo de montura de lente EF funciona con una amplia gama de lentes de compañías como Canon, Zeiss, Sigma y Schneider.\r\n','image-1652051809084.jpeg',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productscategory`
--

DROP TABLE IF EXISTS `productscategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productscategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productscategory`
--

LOCK TABLES `productscategory` WRITE;
/*!40000 ALTER TABLE `productscategory` DISABLE KEYS */;
INSERT INTO `productscategory` VALUES (1,'gamer'),(2,'video'),(3,'phones');
/*!40000 ALTER TABLE `productscategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sendedcomments`
--

DROP TABLE IF EXISTS `sendedcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sendedcomments` (
  `id` int(11) NOT NULL,
  `numberOfComments` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sendedcomments`
--

LOCK TABLES `sendedcomments` WRITE;
/*!40000 ALTER TABLE `sendedcomments` DISABLE KEYS */;
INSERT INTO `sendedcomments` VALUES (1,0);
/*!40000 ALTER TABLE `sendedcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profilePicture` varchar(50) NOT NULL,
  `terms` varchar(10) NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_48befb0f-ebf6-4d1e-a562-7f6bc803e5bd` (`categoryId`),
  CONSTRAINT `FK_48befb0f-ebf6-4d1e-a562-7f6bc803e5bd` FOREIGN KEY (`categoryId`) REFERENCES `userscategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Will','Marriaga','usuariopedroperez@gmail.com','$2a$10$FGY9yx3FrG9YO3yPTljRzuvRp0V0n9d2TIDArHm/Fqwcdn/pRnjNy','any-3.png','on',2),(2,'Admin','Test','admtest@gmail.com','$2a$10$FGY9yx3FrG9YO3yPTljRzuvRp0V0n9d2TIDArHm/Fqwcdn/pRnjNy','profilePicture-1652837065789.png','on',2),(3,'User2','Test2','usertest@gmail.com','$2a$10$FGY9yx3FrG9YO3yPTljRzuvRp0V0n9d2TIDArHm/Fqwcdn/pRnjNy','profilePicture-1652914403083.PNG','on',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscategory`
--

DROP TABLE IF EXISTS `userscategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userscategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscategory`
--

LOCK TABLES `userscategory` WRITE;
/*!40000 ALTER TABLE `userscategory` DISABLE KEYS */;
INSERT INTO `userscategory` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `userscategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userslog`
--

DROP TABLE IF EXISTS `userslog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userslog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(200) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cff6bcf9-4d22-4959-8cbb-1136545c1acd` (`userId`),
  CONSTRAINT `FK_cff6bcf9-4d22-4959-8cbb-1136545c1acd` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userslog`
--

LOCK TABLES `userslog` WRITE;
/*!40000 ALTER TABLE `userslog` DISABLE KEYS */;
INSERT INTO `userslog` VALUES (17,'VKTHjv2z10FvgUDKbnZvQM81rVL+7YiBtPSrxVTxf9pECmyMadhNjFBoe+OqaIDLl7RbnfEW3IoHBijztroI5g==',2),(22,'Je1FcuNBa7nEXhkpU4kquEqqsI0agSCeMv+uu7O5G22qglTGF6B9QFQ4k43cW/aT9P9h1lG3cFwEFxLse6F36A==',2),(23,'BlC39W/jQ1lS91L0a9yz9DQBomAXsVL+rT3AdAFjFq0pEdbJOA3IeVncLkjnTad8jHvYTNKE8a1dbDWemldEZw==',2),(41,'P8JzlOhq/LNofQNWLWJWrSbenrwDedgfaKmGIfyoX69SzMMLZfSgEPbnHRGGUZYVz+jzXNPTjay6OTCarfP0hw==',2),(52,'2eFVjnSu0ohs2L0rTrRXvRCHXw+edsxgdIqk7NP7XeTRnkUQJY2RAS9aTBkuVDpA0DiPMNklh60w91db5zhfwg==',2);
/*!40000 ALTER TABLE `userslog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitedpages`
--

DROP TABLE IF EXISTS `visitedpages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitedpages` (
  `page` varchar(50) NOT NULL,
  `numberOfVisits` int(11) DEFAULT 0,
  `url` varchar(100) DEFAULT NULL,
  `lastRestarted` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`page`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitedpages`
--

LOCK TABLES `visitedpages` WRITE;
/*!40000 ALTER TABLE `visitedpages` DISABLE KEYS */;
INSERT INTO `visitedpages` VALUES ('Carrito de Compras',0,'http://localhost:3001/products/cart','18/5/2022 20:46:47'),('Contacto',1,'http://localhost:3001/contact','18/5/2022 20:46:47'),('Detalle de Productos',15,'http://localhost:3001/products/details/3','18/5/2022 20:46:47'),('Home',2,'http://localhost:3001/','18/5/2022 20:46:47'),('Login',1,'http://localhost:3001/user/login','18/5/2022 20:46:47'),('Perfil de Usuario',0,'http://localhost:3001/user/userProfile','18/5/2022 20:46:47'),('Productos',1,'http://localhost:3001/products','18/5/2022 20:46:47'),('Quienes Somos',1,'http://localhost:3001/whoWeAre','18/5/2022 20:46:47'),('Register',0,'http://localhost:3001/user/register','18/5/2022 20:46:47');
/*!40000 ALTER TABLE `visitedpages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'test3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18 21:09:02
