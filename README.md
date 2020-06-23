# Personal Website

This repo contains the nuts and bolts of my website. After a major redesign in 2020, this is a [Jekyll website](https://jekyllrb.com/) heavily based on GitHub's [personal website](https://github.com/github/personal-website) template.

## Installation

If, for some reason, you'd like to fork or run this website locally, you'll need to do the following (taken from the GitHub personal-website repository's README):

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
```
gem install jekyll bundler
```
3. Change into your new directory
```
cd personal-website
```
4. Install missing gems
```
bundle install
```
5. Build the site and make it available on a local server
```
bundle exec jekyll serve
```
6. Now browse to [http://localhost:4000](http://localhost:4000)

You'll need to kill the Ruby process and re-run step 5 when you make changes to `_config.yml`, but otherwise you can make changes to the displayed webpages and they will be updated.

Check out the [original repository's README](https://github.com/github/personal-website/blob/master/README.md) for more information.