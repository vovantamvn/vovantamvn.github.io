rm -rf .git/
cd public
git init
git checkout -b gh-pages
remote add origin git@github.com:vovantamvn/vovantamvn.github.io.git  
git add .
git commit -m "Deploy by circleci"
git push origin gh-pages -f
echo "Deploy success!"
