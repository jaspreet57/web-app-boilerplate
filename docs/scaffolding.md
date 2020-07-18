# Scaffolding steps for this repo:

## Tools in use:
- NodeJs
- Yarn

## Initial commit
1. `npx create-nx-workspace@latest my-application`
2. select appropriate options
3. Go to `my-application`, add git remote to connect with git repo
4. push the initial commit.

## Adding features

- Installing dependencies

```sh
yarn add -D @nrwl/react
yarn add -D @nrwl/node
yarn add -D @nrwl/nest
```

- Create basic libraries - for shared code

```sh
nx g @nrwl/node:lib types  # to store all the types and interfaces
nx g @nrwl/node:lib constants
nx g @nrwl/node:lib utils
```

- Creat Applications

```sh
nx g @nrwl/react:app web-app # client UI for web
nx g @nrwl/nest:app api # Rest APIs made in NestJS
```
