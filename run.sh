git clone https://github.com/wudysoft/HinataBot
cd HinataBot
apt update -y && curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - && apt install nodejs ffmpeg imagemagick -y
npm i -g
npm i -g pm2
pm2 start index.js
pm2 logs
