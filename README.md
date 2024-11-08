# Phu Huynh Blog

This repository is based on the template from [danielcgilibert](https://github.com/danielcgilibert/blog-template).

I'm using Astro SSG and Dcap CMS for content management.

## Getting started

#### Pull

First clone the repository to local and install dependencies

```bash
git clone https://github.com/phuhh98/blog.git
cd blog/
npm ci
```

#### Start

Start astro in deve mode

```bash
npm run dev
```

Then comment this section from dcap config at _public/admin/config.yml_ to enable local proxy of dcap

```yaml
# Go live, uncomment this before push to github
# backend:
#   name: github
#   repo: phuhh98/blog
#   branch: main
#   base_url: https://api.netlify.com

# config for local development, comment this before push to github
backend:
  name: proxy
  proxy_url: http://localhost:8081/api/v1
  branch: master # optional, defaults to master
local_backend: true # to work with local git, comment this before push
# end local dev block
```

Then start dcap proxy to local

```bash
npm run decap:server
```

At this point you could access page at [localhost:4321](http://localhost:4321/) and cms admin at [http://localhost:4321/admin](http://localhost:4321/admin)

> [!CAUTION]
> Be aware to revert comment block in config before push to github to let action do its job for deploying page

GET GO
![Alt Text](https://media1.tenor.com/m/1PHH8ktiN84AAAAd/sml-dewey-donedidit.gif)
