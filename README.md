# texastoc-v2-angular
First attempt to write an angular 6 front end for v2 of texastoc.

## Setup Steps

Created an angular project
* `ng new texastoc-v2-angular`

Change directory
* `cd texastoc-v2-angular`

Git steps
* `rm -rf .git/`
* `git init`

Created github repo **texastoc-v2-angular** and set it as the remote origin
* `git remote add origin https://github.com/gpratte/texastoc-v2-angular.git`

More git steps
* `git pull origin master`
* `git add .`
* `git commit -m "initial version after creating angular project"
* `git push origin master`

The front end can be viewed by running the angular server
* `ng serve`

And then hit it in a browser
* `http://localhost:4200`

## Login

Create a login branch from the master branch
* `git checkout -b 01-login`

Create the login component
* `ng generate component login/login`

Copied the html and css from the wireframes repo (https://github.com/gpratte/texastoc-v2-wireframes) to the login html and css files.

Changed index.html to load the bootstrap css and javascript files from the internet (CDN).

Added the images from the wireframes repo to the angular assets.

Changed app.component.html to be
```<app-login></app-login>```

Pushed to branch 01-login.

Merged 01-login into master.
