## NUXT Simple Static Generated SSR PWA

See the live version here https://projects.danielwakefield.co.uk/

This is my first attempt using Nuxt.js to build a simple static generated SSR PWA

**CLONE THIS REPO**

cd c:\xampp\htdocs\[project-folder]

git init

git pull https://github.com/dubcode/Nuxt-Simple-SSR-PWA.git master

git status

git remote add origin https://github.com/dubcode/Nuxt-Simple-SSR-PWA.git

git add -A

git commit -m “my first commit”

git push origin master

**If you are cloning this repository you will need to manually install the node modules into the folder first by running the following command in the root folder of your local repository.**

npm install

npm run dev

Go to http://localhost:3000/” to view your app.

**PRODUCTION BUILD**

npm run generate

**DEPLOY**

Upload the contents of the /dist/ folder to your server.

