
## 捕获错误
set -e 

yarn build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:czv6803892/czv6803892.github.io.git master

cd -