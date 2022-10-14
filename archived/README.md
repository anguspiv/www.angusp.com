# AngusP.com

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Netlify Status](https://api.netlify.com/api/v1/badges/fba18a54-1803-4f09-bf26-3f0e3b3375ec/deploy-status)](https://app.netlify.com/sites/serene-ride-008670/deploys)
![Build and Test](https://github.com/anguspiv/www.angusp.com/workflows/Build%20and%20Test/badge.svg?branch=master)
![Release](https://github.com/anguspiv/www.angusp.com/workflows/Release/badge.svg?branch=master)

> Profile website for Angus Perkerson

## Pre-Requisites

- `node>=12.x`
- `npm`

## Getting Started

1. Install Dependencies

   ```bash
   > npm install
   ```

2. Start the Development Server

   ```
   > npm run develop
   ```

## Contribution Guidelines

### Testing

Testing is done using the [Cypress.io](https://cypress.io) framework

### Commit Messages

This project follows [Conventional Commit Messages](https://www.conventionalcommits.org/) format

Commit messages will be linted once a pull request is created. You must clean up your commit messages before you can merge into `master`

## Releasing

Releases are creating once a change has been made to the `master` branch. There, [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) will automatically generate changelog, bump the version and create a new release tag. Based on the commits to master

## Deployment

This application is deployed using Netlify, and is set to deploy on any change to master. Pull Requests will also generate a preview deployment to view the changes there.
