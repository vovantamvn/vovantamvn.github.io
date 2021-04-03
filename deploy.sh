rm -rf .git/
cd public

git config --global user.email "vovantam.dev@gmail.com"
git config --global user.name "tamvv"

git init
git remote add origin git@github.com:vovantamvn/vovantamvn.github.io.git

git checkout -b gh-pages
git add .
git commit -m "Deploy by circleci"
git push origin gh-pages -f
echo "Deploy success!"
