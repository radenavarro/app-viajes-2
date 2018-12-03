### Archivo de scripts
# Variables

DBPASSWD=root

echo -e "\n---- Creando base de datos ----\n"
sudo mysql -uroot -p$DBPASSWD -e'SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"'
sudo mysql -uroot -p$DBPASSWD -e"SET AUTOCOMMIT = 0"
sudo mysql -uroot -p$DBPASSWD -e"START TRANSACTION"
sudo mysql -uroot -p$DBPASSWD -e'SET time_zone = "+00:00"'

sudo mysql -uroot -p$DBPASSWD -e"USE travels;CREATE TABLE datosuser(id int(11) NOT NULL, usuario varchar(45) NOT NULL, email varchar(45) NOT NULL, password varchar(80) NOT NULL, hash varchar(80) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1; ALTER TABLE datosuser ADD PRIMARY KEY (id);ALTER TABLE datosuser MODIFY id int(11) NOT NULL AUTO_INCREMENT;COMMIT"
