# @pushrocks/lik
light little helpers for node

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/lik)
* [gitlab.com (source)](https://gitlab.com/pushrocks/lik)
* [github.com (source mirror)](https://github.com/pushrocks/lik)
* [docs (typedoc)](https://pushrocks.gitlab.io/lik/)

## Status for master
[![build status](https://gitlab.com/pushrocks/lik/badges/master/build.svg)](https://gitlab.com/pushrocks/lik/commits/master)
[![coverage report](https://gitlab.com/pushrocks/lik/badges/master/coverage.svg)](https://gitlab.com/pushrocks/lik/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/lik.svg)](https://www.npmjs.com/package/@pushrocks/lik)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/lik/badge.svg)](https://snyk.io/test/npm/@pushrocks/lik)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
// import any tool that you need from lik
import { Stringmap, Objectmap, Observablemap } from 'lik';
```

### class Stringmap

Stringmap allows you to keep track of strings. It allows you to register triggers for certain events
like when a certain string is removed or added to the map

### class Objectmap

Sometimes you need to keep track of objects, but implementing logic for removing, finding or updating is tedious.
Objectmap takes care of keeping track of objects for you.

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
