systemctl stop mysqld.service
cd ../client
yarn build
yes | cp -rf ./build/* /usr/share/nginx/html
systemctl start mysqld.service
