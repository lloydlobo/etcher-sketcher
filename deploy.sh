#!/usr/bin/env sh

# https://vitejs.dev/guide/static-deploy.html#github-pages# 

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:lloydlobo/lloydlobo.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lloydlobo/etcher-sketcher.git main:gh-pages

     

    
cd 
     

    