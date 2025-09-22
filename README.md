# Phu Huynh Blog

This repository is based on the template from [danielcgilibert](https://github.com/danielcgilibert/blog-template).

I'm using Astro SSG and Dcap CMS for content management.

## Getting started

#### Pull

First clone the repository to local and install dependencies

```bash
git clone https://github.com/phuhh98/phuhh98.github.io.git
cd phuhh98.github.io/
npm ci
```

#### Start

Start astro in deve mode

```bash
npm run dev
```

Then start dcap proxy to local

```bash
npm run decap:server
```

At this point you could access page at [localhost:4321](http://localhost:4321/) and cms admin at [http://localhost:4321/admin](http://localhost:4321/admin)

## Comments

Comment section for each post is manage by integrating with Github Dicussion and [giscus](https://giscus.app/) app which will handle threads and dicussion via installed **giscus** app to current repo/account.

GET GO
![Alt Text](https://media1.tenor.com/m/1PHH8ktiN84AAAAd/sml-dewey-donedidit.gif)

## Package analyzer

Start build with package analyzer

```bash
ANALYZE_BUNDLE=true npm run build
```
