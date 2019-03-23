# foundation
[![CircleCI](https://circleci.com/gh/js-items/foundation.svg?style=svg)](https://circleci.com/gh/js-items/foundation)
[![codecov](https://codecov.io/gh/js-items/foundation/branch/master/graph/badge.svg)](https://codecov.io/gh/js-items/foundation)
![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/js-items/foundation.svg)
![jscpd](assets/jscpd-badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/js-items/foundation/badge.svg?targetFile=package.json)](https://snyk.io/test/github/js-items/foundation?targetFile=package.json)

Provides set of interfaces, utils and tests for concrete implementations of js-items repositories.

There is a fantastic alternative to this project (and @js-items is based on it): 
[js-entity-repos](https://github.com/js-entity-repos).

The main differences to the @js-entity-repos:
- different naming convention: using `item` instead of `entity`
- cursor based pagination operates using `before` and `after` instead of `cursor` and `direction`

## Installation
`npm i --save-dev @js-items/foundation`

Credits:
- [ryansmith94](https://github.com/ryansmith94)
