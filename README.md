# Personal Blog

## How to run it

```bash
# Run a docker container
docker run --name personal-blog -d -it \
-v "$PWD":"/app" \
-w "/app" \
-p 4000:4000 \
ruby:3.0.2

# Exec to docker container
docker exec -it personal-blog bash

# Install dependency
bundler install

# Run server
jekyll server -H 0.0.0.0
```
