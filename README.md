# YamSauce

It's yummy!

## How to run the app
If you want to just play around without provisioning your own app, just go to [https://yamsauce.herokuapp.com](https://yamsauce.herokuapp.com)

If you want to develop your own version of YamSauce, first get an app ID by creating an app on [https://developer.yammer.com/](https://developer.yammer.com/). Next copy the `.env.sample` file to `.env` and put in your Yammer App ID. Then…

    gem install bundler # if you don't have bundler
    bundle install
    bundle exec foreman start

## Dealing with assets
Make sure you've run `bundle install` before doing anything

All info relevant to compiling assets is in `config.rb`.

To watch assets: `compass watch`, to compile once: `compass compile`

This will take everything in `/sass` and compile it to `/public/css`