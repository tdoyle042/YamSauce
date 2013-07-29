# YamSauce

It's yummy!

## How to run the app
    gem install bundler # if you don't have bundler
    bundle install
    bundle exec foreman start

## Dealing with assets
Make sure you've run `bundle install` before doing anything

All info relevant to compiling assets is in `config.rb`.

To watch assets: `compass watch`, to compile once: `compass compile`

This will take everything in `/sass` and compile it to `/public/css`