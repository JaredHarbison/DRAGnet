FROM ruby:2.6.1

RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN gem install foreman 
RUN gem install bundler -v 2.0.2
RUN bundle install
RUN cd frontend 
RUN npm install 
RUN cd .. 

COPY . .

EXPOSE 5000 5100

ENTRYPOINT ["bundle", "exec"]

CMD ["foreman", "start"]

