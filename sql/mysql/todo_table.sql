CREATE TABLE `TODO` (
    `ID` int(16) NOT NULL AUTO_INCREMENT,
    `TITLE` varchar(64) COLLATE utf8_bin NOT NULL,
    `DESCRIPTION` varchar(255) COLLATE utf8_bin NOT NULL,
    PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin
AUTO_INCREMENT=1 ;
