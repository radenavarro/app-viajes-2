### Archivo de scripts
# Variables
DBHOST=localhost
DBNAME=travels
DBUSER=root
DBPASSWD=root

echo -e "\n --- Iniciando el proceso de instalación ----\n"
echo -e "\n --- Actualizando la máquina virtual ---\n"
apt-get update && apt-get upgrade -y

echo -e "\n --- Instalando paquetes base ---\n"
apt-get -y install curl build-essential python-software-properties git >> /vagrant/vm_build.log

echo -e "\n --- Instalando apache ---\n"
apt-get -y install apache2 >> /vagrant/vm_apache_build.log

echo -e "\n --- Instalando MySql ---\n"
debconf-set-selections <<< "mysql-server mysql-server/root_password password $DBPASSWD"
debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DBPASSWD"
apt-get -y install mysql-server >> /vagrant/vm_mysql_build.log

echo -e "\n --- Dando permisos a MySql ---\n"
mysql -uroot -p$DBPASSWD -e"CREATE DATABASE $DBNAME" >> /vagrant/vm_mysql_p_build.log
mysql -uroot -p$DBPASSWD -e"grant all privileges on $DBNAME, * to '$DBUSER'@'%'identified by '$DBPASSWD'" >> /vagrant/vm_mysql_p_build

echo -e "\n --- Instalando Node, Npm ---\n"

curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt install nodejs -y

sudo npm i -g bower

echo -e "\n --- Descargando repositorio ---\n"
sudo rm -rf /var/www/html
sudo git clone https://github.com/ruldelnav/app-viajes-2.git
sudo npm install
bower install
mv /home/vagrant/app-viajes-2 /var/www/html
# service apache2 restart

echo -e "\n---- Creando base de datos ----\n"
# mysql -uroot -p <<< "$DBPASSWD" 
# mysql -uroot -p$DBPASSWD travels < /home/vagrant/travels.sql
sudo chmod 755 /var/lib/mysql
sudo chmod 755 /var/lib/mysql/travels