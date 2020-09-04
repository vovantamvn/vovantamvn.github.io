#!/bin/sh

# Config username and email
git config --global user.email "vovantam.dev@gmail.com"
git config --global user.name "Võ Văn Tâm"

# Remote git
rm -rf .git
cp .circleci _site/ -r
cd _site

# Init git
git init
git remote add origin git@github.com:vovantamvn/vovantamvn.github.io.git

# Push to github repository
git add .
git commit -m "Publishing github pages [skip ci]"

# Checkout new branch
git checkout -b gh-pages
git push origin gh-pages -f