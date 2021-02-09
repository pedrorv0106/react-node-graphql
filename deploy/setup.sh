# Setup on CentOS 8

# User
useradd deploy
passwd deploy
chown -R deploy:deploy /home/deploy

# Nginx
dnf install -y nginx
rm -f /etc/nginx/nginx.conf
cp -f ./deploy/nginx.conf /etc/nginx/nginx.conf
systemctl enable nginx
systemctl start nginx
setsebool -P httpd_can_network_connect 1

# Open ports
firewall-cmd --permanent --add-service=http
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --reload

# Node
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
yum install -y nodejs
npm install -g pm2
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy

# MySQL
dnf install -y mysql-server
systemctl start mysqld.service
systemctl enable mysqld
# To use the MySQL security script, uncomment the following command
# mysql_secure_installation

mysql -uroot -e "CREATE DATABASE dhakabeat CHARACTER SET utf8 COLLATE utf8_general_ci";
mysql -uroot -e "CREATE USER deploy@'localhost' IDENTIFIED BY 'LiveJProd'";
mysql -uroot -e "GRANT SELECT, INSERT, UPDATE ON dhakabeat.* TO 'deploy'@'localhost'";

cd ../server/models
mysql -uroot -D dhakabeat < users.sql
mysql -uroot -D dhakabeat < rooms.sql
mysql -uroot -D dhakabeat < dj_lists.sql
mysql -uroot -D dhakabeat < listen_lists.sql
mysql -uroot -D dhakabeat < playlists.sql