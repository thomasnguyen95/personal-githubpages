GitHub page built using Jekyll


# Instructions for Local Development

## [Install NPM]()  

## [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/) 

Currently running on 2.7.7

For WSL 2.0 (Ubuntu distro) on Windows 10:
```bash
cd $HOME
sudo apt-get update 
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libxml2-dev libxslt1-dev libcurl4-openssl-dev libffi-dev

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.7.7
rbenv global 2.7.7
ruby -v
```
## [Install bundler](https://bundler.io/)

## [Install jekyll with gem](https://jekyllrb.com/)


```bash
# Installs jekyll and bundler with ruby gem
gem install jekyll bundler
```

```bash
# Serves local jekyll environment
bundle exec jekyll serve
```

# Other References:
[Tailwind + Jekyll setup](https://stevenwestmoreland.com/2021/01/using-tailwind-css-with-jekyll.html)
