CREATE DATABASE  IF NOT EXISTS `parkdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `parkdb`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: parkdb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `parkdetails`
--

DROP TABLE IF EXISTS `parkdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parkdetails` (
  `parkcode` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `states` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`parkcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parkdetails`
--

LOCK TABLES `parkdetails` WRITE;
/*!40000 ALTER TABLE `parkdetails` DISABLE KEYS */;
INSERT INTO `parkdetails` VALUES ('abli','KY'),('acad','ME'),('adam','MA'),('afam','DC'),('afbg','NY'),('agfo','NE'),('alag','AK'),('alca','CA'),('aleu','AK'),('alfl','TX'),('alka','HI'),('alpo','PA'),('amis','TX'),('amme','MP'),('anac','DC'),('anch','AK'),('ande','GA'),('ania','AK'),('anjo','TN'),('anti','MD'),('apco','VA'),('apis','WI'),('appa','CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV'),('arch','UT'),('arho','VA'),('arpo','AR'),('asis','MD,VA'),('azru','NM'),('badl','SD'),('band','NM'),('bawa','MD'),('bela','AK'),('beol','CO'),('bepa','DC'),('bibe','TX'),('bica','MT,WY'),('bicr','AL'),('bicy','FL'),('biho','MT'),('bisc','FL'),('biso','KY,TN'),('bith','TX'),('blca','CO'),('blri','NC,VA'),('blrv','RI,MA'),('blue','WV'),('boaf','MA'),('boha','MA'),('bost','MA'),('bowa','VA'),('brca','UT'),('brcr','MS'),('brvb','KS'),('buff','AR'),('buis','VI'),('cabr','CA'),('cach','AZ'),('cacl','NY'),('caco','MA'),('cagr','AZ'),('caha','NC'),('cahi','DC'),('cajo','VA,MD,DE,DC,PA,NY'),('cakr','AK'),('cali','CA,CO,ID,KS,MO,NE,NV,OR,UT,WY'),('calo','NC'),('came','VA'),('camo','CA'),('cana','FL'),('cane','KY'),('cany','UT'),('care','UT'),('cari','LA'),('carl','NC'),('casa','FL'),('cato','MD'),('cave','NM'),('cavo','NM'),('cawo','DC'),('cbpo','DC,DE,MD,NY,PA,VA,WV'),('cebe','VA'),('cebr','UT'),('cech','CA'),('cham','TX'),('chat','GA'),('chch','GA,TN'),('chcu','NM'),('chic','OK'),('chir','AZ'),('chis','CA'),('choh','DC,MD,WV'),('chpi','SC'),('chri','VI'),('chsc','AR'),('chyo','OH'),('ciro','ID'),('clba','MD'),('coga','DC'),('colm','CO'),('colo','VA'),('colt','CT'),('cong','SC'),('coro','AZ'),('cowp','SC'),('crla','OR'),('crmo','ID'),('cuga','KY,TN,VA'),('cuis','GA'),('cure','CO'),('cuva','OH'),('cwdw','DC,MD,VA'),('daav','OH'),('ddem','DC'),('dena','AK'),('depo','CA'),('deso','FL'),('deto','WY'),('deva','CA,NV'),('dewa','NJ,PA'),('dino','CO,UT'),('drto','FL'),('ebla','WA'),('edal','PA'),('edis','NJ'),('efmo','IA'),('eise','PA'),('elca','NM,TX'),('elis','NJ,NY'),('elma','NM'),('elmo','NM'),('elro','NY'),('elte','TX,LA'),('euon','CA'),('ever','FL'),('feha','NY'),('fiis','NY'),('fila','OH'),('flfo','CO'),('flni','PA'),('fobo','AZ'),('fobu','WY'),('foda','TX'),('fodo','KY,TN'),('fodu','DC'),('fofo','MD'),('fofr','GA'),('fola','WY'),('fols','KS'),('foma','FL'),('fomc','MD'),('fomr','VA'),('fone','PA'),('fopo','CA'),('fopu','GA'),('fora','NC'),('fosc','KS'),('fosm','AR,OK'),('fost','NY'),('fosu','SC'),('foth','DC'),('foun','NM'),('fous','MT,ND'),('fova','OR,WA'),('fowa','MD'),('frde','DC'),('frdo','DC'),('frhi','PA'),('frla','MA'),('frri','AL'),('frsp','VA'),('frst','DE,PA'),('gaar','AK'),('gari','WV'),('gate','NY,NJ'),('gegr','NY'),('gero','IN'),('gett','PA'),('gewa','VA'),('gicl','NM'),('glac','MT'),('glba','AK'),('glca','AZ,UT'),('glde','PA'),('glec','MD'),('goga','CA'),('gois','NY'),('gosp','UT'),('grba','NV'),('grca','AZ'),('gree','MD'),('greg','NJ'),('grfa','VA'),('grko','MT'),('grpo','MN'),('grsa','CO'),('grsm','NC,TN'),('grsp','VA'),('grte','WY'),('guco','NC'),('guis','FL,MS'),('gumo','TX'),('gwca','MO'),('gwmp','DC,MD,VA'),('hafe','WV,VA,MD'),('hafo','ID'),('hagr','NY'),('haha','MD'),('hale','HI'),('hamp','MD'),('hart','NY'),('hatu','MD'),('havo','HI'),('heho','IA'),('hobe','AL'),('hocu','OH'),('hofr','NY'),('hofu','PA'),('home','NE'),('hono','HI'),('hosp','AR'),('hove','CO,UT'),('hstr','MO'),('hutr','AZ'),('iafl','WA,OR,ID,MT'),('iatr','WI'),('inde','PA'),('indu','IN'),('inup','AK'),('isro','MI'),('jaga','OH'),('jame','VA'),('jazz','LA'),('jeca','SD'),('jeff','MO'),('jela','LA'),('jica','GA'),('joda','OR'),('jofi','MA'),('jofl','PA'),('jomu','CA'),('jotr','CA'),('juba','AZ,CA'),('kaho','HI'),('kala','HI'),('katm','AK'),('kaww','ME'),('keaq','DC'),('kefj','AK'),('kemo','GA'),('kewe','MI'),('kimo','SC'),('klgo','AK'),('klse','WA'),('knri','ND'),('kova','AK'),('kowa','DC'),('labe','CA'),('lacl','AK'),('lake','AZ,NV'),('lamr','TX'),('laro','WA'),('lavo','CA'),('lecl','IA,ID,IL,IN,KS,KY,MO,MT,NE,ND,OH,OR,PA,SD,WA,WV'),('lewi','OR,WA'),('libi','MT'),('libo','IN'),('liho','IL'),('linc','DC'),('liri','AL'),('lode','PA,NJ'),('loea','NY'),('long','MA'),('lowe','MA'),('lyba','DC'),('lyjo','TX'),('maac','ME'),('mabi','VT'),('maca','KY'),('malu','GA'),('mamc','DC'),('mana','VA'),('manz','CA'),('mapr','NM,WA,TN'),('mava','NY'),('mawa','VA'),('memy','MS'),('meve','CO'),('miin','ID,WA'),('mima','MA'),('mimi','SD'),('misp','KY'),('miss','MN'),('mlkm','DC'),('mnrr','SD,NE'),('moca','AZ'),('mocr','NC'),('moja','CA'),('mono','MD'),('mopi','IL,IA,NE,UT,WY'),('mora','WA'),('morr','NJ'),('moru','SD'),('muwo','CA'),('nabr','UT'),('nace','DC'),('nama','DC'),('natc','MS'),('natr','AL,MS,TN'),('natt','AL,MS,TN'),('nava','AZ'),('nebe','MA'),('neen','MA,CT'),('nepe','ID,MT,OR,WA'),('neri','WV'),('nico','KS'),('niob','NE'),('nisi','SC'),('noat','AK'),('noca','WA'),('noco','MI,MN,ND,NY,OH,PA,VT,WI'),('npnh','NY'),('npsa','AS'),('obed','TN'),('ocmu','GA'),('okci','OK'),('olsp','AZ,CA,CO,NV,NM,UT'),('olym','WA'),('orca','OR'),('oreg','ID,KS,MO,NE,OR,WA,WY'),('orpi','AZ'),('ovvi','NC,SC,TN,VA'),('oxhi','MD'),('ozar','MO'),('paal','TX'),('paav','DC'),('pagr','NJ'),('pais','TX'),('para','AZ'),('peco','NM'),('pefo','AZ'),('peri','AR'),('pete','VA'),('petr','NM'),('pevi','OH'),('pine','NJ'),('pinn','CA'),('pipe','MN'),('piro','MI'),('pisc','MD'),('pisp','AZ'),('poch','CA'),('poex','CA,CO,KS,MO,NE,NV,UT,WY'),('pohe','DC,MD,PA,VA'),('popo','LA'),('pore','CA'),('prsf','CA'),('prwi','VA'),('puhe','HI'),('puho','HI'),('pull','IL'),('rabr','UT'),('redw','CA'),('reer','SC'),('rich','VA'),('rigr','TX'),('rira','MI'),('roca','ME'),('rocr','DC'),('romo','CO'),('rori','CA'),('rowi','RI'),('ruca','AL'),('saan','TX'),('sacn','WI,MN'),('sacr','ME'),('safe','CO,KS,MO,NM,OK'),('safr','CA'),('saga','NH'),('sagu','AZ'),('sahi','NY'),('sair','MA'),('sajh','WA'),('saju','PR'),('sama','MA'),('samo','CA'),('sand','CO'),('sapa','NY'),('sapu','NM'),('sara','NY'),('sari','VI'),('scbl','NE'),('seki','CA'),('semo','AL'),('shen','VA'),('shil','TN,MS'),('sitk','AK'),('slbe','MI'),('spar','MA'),('stea','PA'),('stge','MO'),('stli','NY'),('stri','TN'),('stsp','MD,VA,DC'),('sucr','AZ'),('tapr','KS'),('thco','NY'),('this','DC'),('thje','DC'),('thko','PA'),('thrb','NY'),('thri','NY'),('thro','ND'),('thst','MD'),('tica','UT'),('timu','FL'),('tont','AZ'),('tosy','RI'),('trte','AL,AR,GA,IL,KY,MO,NC,OK,TN'),('tuai','AL'),('tuin','AL'),('tule','CA'),('tuma','AZ'),('tupe','MS'),('tusk','NV'),('tuzi','AZ'),('ulsg','MO'),('upde','NY,PA'),('vafo','PA'),('vall','NM'),('valr','HI'),('vama','NY'),('vick','MS,LA'),('vicr','VI'),('viis','VI'),('vive','DC'),('voya','MN'),('waba','OK'),('waca','AZ'),('waco','TX'),('wamo','DC'),('wapa','GU'),('waro','MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC'),('wefa','CT'),('whho','DC'),('whis','CA'),('whmi','WA'),('whsa','NM'),('wica','SD'),('wicl','AR'),('wicr','MO'),('wiho','OH'),('wing','WA'),('wori','NY'),('wotr','VA'),('wrbr','NC'),('wrst','AK'),('wupa','AZ'),('wwii','DC'),('wwim','DC'),('yell','ID,MT,WY'),('york','VA'),('yose','CA'),('yuch','AK'),('yuho','CO'),('zion','UT');
/*!40000 ALTER TABLE `parkdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Last_Name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Email` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `User_Name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Home_state_code` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Yosha','Kunnummal','yoshakunnummal@rocketmortgage.com','Yosha','abc123','MI'),(2,'Cullin','Flynn','flynncu@gmail.com','pizzahut111','abc123','NY'),(3,'Andy','Beer','andybeer@rocketmortgage.com','Just Andy','xyz321','HI');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_parks`
--

DROP TABLE IF EXISTS `users_parks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_parks` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `parkcode` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`),
  KEY `parkcode` (`parkcode`),
  CONSTRAINT `users_parks_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`),
  CONSTRAINT `users_parks_ibfk_2` FOREIGN KEY (`parkcode`) REFERENCES `parkdetails` (`parkcode`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_parks`
--

LOCK TABLES `users_parks` WRITE;
/*!40000 ALTER TABLE `users_parks` DISABLE KEYS */;
INSERT INTO `users_parks` VALUES (1,2,'anch'),(2,2,'bisc'),(3,2,'elmo');
/*!40000 ALTER TABLE `users_parks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-04 16:52:12
