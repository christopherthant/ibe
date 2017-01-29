.PHONY: build dev prod

build:
	grunt local

dev:
	grunt dev
	aws s3 --delete sync dist/ s3://ibe.teromacsolutions.com/gaylord/

prod:
	grunt prod
	aws s3 --delete sync dist/ s3://ibe.teromacsolutions.com/