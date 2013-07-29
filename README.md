# YamSauce

For part of the sacred tradition that is Yammer Hack Day, we ([@schallert](http://github.com/schallert), [@tdoyle042](http://github.com/tdoyle042), [@bichiliad](http://github.com/bichiliad)), put our Red Bull-fueled intern minds together to create YamSauce, a new way for consuming Yammer feeds. Our main focus in creating YamSauce was thinking of clean and user-friendly ways to consume Yammer feeds and reach the ever-desired "Inbox 0". We also threw some JavaScript and CSS chops in to top it off.

Oh, and our app won one of 5 awards given out of over 60 submitted hacks.

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
