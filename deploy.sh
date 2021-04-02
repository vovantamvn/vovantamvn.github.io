echo "Build"
npm run build
mv -r public/ docs/
git add .
git commit -m "Deploy"
git push origin ghpages -f