-----------------------------------------------------------------------------------

		888888b.   8888888888 Y88b   d88P  .d88888b.  888b    888 8888888b.  
		888  "88b  888         Y88b d88P  d88P" "Y88b 8888b   888 888  "Y88b 
		888  .88P  888          Y88o88P   888     888 88888b  888 888    888 
		8888888K.  8888888       Y888P    888     888 888Y88b 888 888    888 
		888  "Y88b 888            888     888     888 888 Y88b888 888    888 
		888    888 888            888     888     888 888  Y88888 888    888 
		888   d88P 888            888     Y88b. .d88P 888   Y8888 888  .d88P 
		8888888P"  8888888888     888      "Y88888P"  888    Y888 8888888P"      
        
	  ___  _____   _____ ___      _   ___  _  _  ___ _____   ___               
	 | _ \/ _ \ \ / / __| _ \___ /_\ |   \| \| |/ _ \_   _| | _ \___ _ __ _  _ 
	 |   / (_) \ V /| _||   /___/ _ \| |) | .` | (_) || |   |   / -_) '  \ || |
	 |_|_\\___/ |_| |___|_|_\  /_/ \_\___/|_|\_|\___/ |_|   |_|_\___|_|_|_\_, |
	                
-----------------------------------------------------------------------------------
	 
# BeyondApp - Youtube Playlist

The development tools are:
 - NodeJs - JS core
 - NPM - dependencies manager
 - Yeoman - the skeleton generator
 - Git - version control manager
 - Grunt - Task runner
 - Bower - client-side libraries manager
 - Karma - Test Executer
 - PhantomJS - Test Browser
 - Compass - preprocessor SASS
 - Angular - MVC JS Framework
 - Bootstrap - CSS Toolkit
 

## Exercise

The environment is composed of a task runner (Grunt), in order to process all development process tasks (integrity/test/build).

The client-side libraries are Handled by a package manager (Bower).

The project is under GIT version control and available on GitHub.

Test cases are written in behaviour-driven JavaScript (Jasmine) and executed with Karma.

The application has been generated following MVC design pattern (AngularJS).

The angular single-page application displays a Youtube playlist. It's composed of:
 - 1 View: Main.
 - 1 Controllers: MainCtrl.
 - 2 Directives: to display videoItem and detailView.
 - 2 Templates: for the 2 directives
 - Responsive views 
 - Pagination on playlist


## Installation

1. Prerequisites for dev environment:

		  NodeJS v0.10.x+ and NPM v2.1.0+ installed
		  Python 2.7+
		  Gem 2.0.14+
		  Compass 1.0.3+

1. Clone the Git Repository

		  git clone https://github.com/BabOuDev/ByndApp
	
2. Install node dependencies

		  npm install

3. Run Grunt
	
		  grunt

## Deploy Build & development

Run the following command in the project root folder:

		  grunt build - build the project for development.
		  grunt build:dist - build the project for release.

		  grunt serve - preview in development.
		  grunt serve:dist - preview for release.


## Run Tests

Run the following command in the project root folder:

		  grunt test - Build app and Execute all Jasmine tests.
		  grunt karma - Execute all Jasmine tests.
