---
layout: post
title: "The Gem Struggle"
date: 2021-05-13
tags: [coding]
authors: [Bob]
comments: true
---
As you probably know, I've been using Jekyll for this website for a while now.
It works beautifully and I'm confident that I will stay with it for quite some years.
Recently I set up a new system on my computer and had to reinstall some things, including my setup for Ruby which is the language behind Jekyll.
And man it was a struggle.
Either I'm an incompetent developer or the Ruby-Gem ecosystem is very complex and fagile because it took me hours to finish the setup in order to run Jekyll successfully.

Maybe you came here because you also had problems, so this hopefully helps you.
Or you are a pro and know exactly what to do -- if so, go ahead and throw corrections into the comments below.
Here is what I've done in the end (I'm running Manjaro 21 Ornara).

0. Don't forget to update your system!
```sh
sudo pacman -Suy
```

0. Install the latest Ruby and Git version:
```sh
sudo pacman -S ruby git
```

0. Make sure the ruby installation (check the version first) is in your PATH by adding this line to your `.bashrc`:
```sh
ruby -v
vi ~/.bashrc
```
```sh
#
# ~/.bashrc
#
...
export PATH="$PATH:$HOME/.local/share/gem/ruby/3.0.0/bin"
```

0. Refer to [this guide](http://rvm.io/rvm/install) to install the Ruby Version Manager.

0. Install and switch to yout preferred Ruby version, for example:
```sh
rvm install 2.6.5
```

0. Normally you would now install Jekyll via `gem install jekyll` but somehow it won't be recognised as installed. So I used Yaourt instead, which had to be installed first:
```sh
git clone https://aur.archlinux.org/package-query.git
cd package-query
makepkg -si
cd ..
git clone https://aur.archlinux.org/yaourt.git
cd yaourt
makepkg -si
cd ..
```

0. Then Jekyll can be installed:
```sh
yaourt ruby-jekyll
```
This took quite a while as a lot of dependencies required manual confirmation as the packages are often only community versions.

0. The Bundler didn't came with it, but it can be installed via Gem:
```sh
gem install bundler
```

0. Now the dependencies specific to a project can be installed from the respective directory:
```sh
cd path/to/project
bundle install
```

0. Everything should be ready now and your Jekyll site can be build and served:
```sh
bundle exec jekyll serve
```

If this guide didn't help you, don't worry -- I can still use it myself when I have to reinstall everything in a few months.
