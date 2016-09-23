# lik
light little helpers for node

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/lik)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/lik)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/lik)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/lik/gitbook)

## Status for master
[![build status](https://gitlab.com/pushrocks/lik/badges/master/build.svg)](https://gitlab.com/pushrocks/lik/commits/master)
[![coverage report](https://gitlab.com/pushrocks/lik/badges/master/coverage.svg)](https://gitlab.com/pushrocks/lik/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/lik.svg)](https://david-dm.org/pushrocks/lik)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/lik/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/lik/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/lik/badges/code.svg)](https://www.bithound.io/github/pushrocks/lik)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
We recommend the use of TypeScript for good intellisense.

```typescript
// import any tool that you need from lik
import { Stringmap, Objectmap, Observablemap } from "lik";
```

### class Stringmap
Stringmap allows you to keep track of strings. It allows you to register triggers for certain events
like when a certain string is removed or added to the map

### class Objectmap
Sometimes you need to keep track of objects, but implementing logic for removing, finding or updating is tedious.
Objectmap takes care of keeping track of objects for you.

### class Observablemap
Event Emitters are nice. However often times you end up with registering multiple listeners for the exact same thing.
Observables have a smaller footprint and a more manageable subscribe logic.
Observablemap registers only one rxjs observable per event and then continues to reference
the same observable that you can subscribe to.

**For a detailed class overview, please take a look at the API docs**

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
