# ベースのイメージ
FROM ruby:2.7

# 作業のベース
WORKDIR /var/www

# ./src配下を作業ベースにコピー
COPY ./src /var/www

RUN bundle config --local set path 'vendor/bundle'
RUN bundle install

CMD ["bundle", "exec", "ruby", "app.rb"]

