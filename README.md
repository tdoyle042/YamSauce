# YamSauce

It's yummy!

## How to run the app
    gem install bundler
    bundle install
    ruby app.rb

## Dealing with assets
Make sure you've run `bundle install` before doing anything

All info relevant to compiling assets is in `config.rb`.

To watch assets: `compass watch`, to compile once: `compass compile`

This will take everything in `/sass` and compile it to `/public/css`