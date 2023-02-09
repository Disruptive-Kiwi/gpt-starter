# GPT Starter with Next.js + Tailwind CSS + TypeScript

A repo to get you shipping your own GPT thing in minutes 🚀

Created using the [ts-nextjs-tailwind-starter](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter) repo by Theodorus Clarence. See the [original repo](https://github.com/theodorusclarence/ts-nextjs-tailwind-starter) for all the things packed into this starter. For a rundown of the original starter, check out this [blog post](https://theodorusclarence.com/blog/one-stop-starter).

## Getting Started

### 1. Clone this repo

```bash
git clone git@github.com:Disruptive-Kiwi/gpt-starter.git
```

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Get an OpenAI API key

```bash
cp .env.example .env.local
```

Create a free account at https://platform.openai.com/account/api-keys and then grab your API key and pop it into the `.env.local` file.

### 3. Run the development server

Start you local server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

To change the prompt being sent to GPT, update `src/pages/api/generate.ts`.

### 4. Change defaults

There are some additional things you'll need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in `package.json`.

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Shipping it 🚀

Deploying a Next.js project to Vercel is super easy peasy lemon squeezy but their limit of 10s on all serverless function calls for Hobby tier apps makes it unusable for this starter (because OpenAI API can take up to 30 seconds to respond).

Instead, we'll be deploying to [Railway.app](https://railway.app/).

1. Click on Create new project
2. Choose Deploy from Github repo
3. Login to Github (if needed)
4. Choose your Github repo that you want to deploy
5. Click on Add variables -> Add all the environment variables in your `.env.local` file
6. Click on your app and jump to the Settings tab
7. Click on Generate domain and then load the generated domain in your browser
8. You're off to the races 🚀

## Pre-built components

This repo comes with a whole bunch of pre-built components that can be found at `http://localhost:3000/components`.

## Expansion Pack 📦

This starter is equipped with an [expansion pack](https://github.com/theodorusclarence/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

Check out the [expansion pack repository](https://github.com/theodorusclarence/expansion-pack) for the commands.
