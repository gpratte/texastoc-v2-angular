# texastoc-v2-angular
First attempt to write an angular 6 front end for v2 of texastoc.

For a better understanding of how this repository fits in the bigger picture see my blog at https://fullstack-software-development.blogspot.com/

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

Changed app.component.html to be ```<app-login></app-login>```

Pushed to branch 01-login.

Merged 01-login into master.

## Default routing

Created a default routing branch from the master branch
* `git checkout -b 02-default-routing`

Created the routing module
* `ng generate module app-routing --flat --module=app`

Added the login component as the default route in ```app-routing.module.ts```

Set the `router-outlet` element in ```app-component.html```

Pushed to branch 02-default-routing.

Merged 02-default-routing into master.

## Forgot password

Need to be able to move (route) from the login page to the forgot password page when the Forgot Password linked is clicked. Hence we need routing.

Create a forgot password from the master branch
* `git checkout -b 03-forgot-password`

Create the forgot-password component
* `ng generate component login/forgot-password`

Added forgot password route. Added link to login page to go to forgot password page.

Copied the forgot password html and css from the wireframes repo.

Diff this branch to the previous branch to see the changes.

Pushed to branch 03-forgot-password.

Merged 03-forgot-password into master.

## Reset password

When a enters the email on the forgot password page that user will get an email with a code and a link. Clicking on the link will take the user to the reset password page.

Create a reset password branch from the master branch
* `git checkout -b 04-reset-password`

Create the reset-password component
* `ng generate component login/reset-password`

Added reset password route.

Copied the reset password html and css from the wireframes repo.

The url will be **<server>/reset-password**

Diff this branch to the previous branch to see the changes.

Pushed to branch 04-reset-password.

Merged 04-reset-password into master.

## Naviation Bar

Need a reusable navbar.

Create a navbar branch from the master branch
* `git checkout -b 05-navbar`

Create the navbar component
* `ng generate component navbar`

Copied the navbar html (there is no css) from the wireframes repo.

Add the links to font awesome in index.html.

Diff this branch to the previous branch to see the changes.

Pushed to branch 05-navbar.

Merged 05-navbar into master.

## Season

See the details of a season.

Create a season branch from the master branch
* `git checkout -b 06-season`

Create the reset-password component
* `ng generate component season/season`

Added season route.
Click on Login button routes to season.
Click on the Season from the navbar hamburger routes to season.

Copied the season html (there is no css) from the wireframes repo.

Could not get the popup for the season details to work so changed it to an accordian.

Diff this branch to the previous branch to see the changes.

Pushed to branch 06-season.

Merged 06-season into master.

## Season classes

Create a season branch from the master branch
* `git checkout -b 07-season-models`

Create the src/app/season/model directory and created the following classes
* Season
* Player
* Payout
* Quarter

Used the classes to create mock Season data in the season component and use that data in the season html.

Diff this branch to the previous branch to see the changes.

Pushed to branch 07-season-models.

Merged 07-season-models into master.
