/*
  @license
	Rollup.js v3.18.0
	Wed, 01 Mar 2023 18:45:12 GMT - commit 25bdc129d21685b69a00ee55397d42ac6eff6449

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const rollup = require('./shared/rollup.js');
const watchProxy = require('./shared/watch-proxy.js');
require('node:process');
require('tty');
require('node:path');
require('path');
require('node:perf_hooks');
require('node:crypto');
require('node:fs/promises');
require('node:events');
require('./shared/fsevents-importer.js');



exports.VERSION = rollup.version;
exports.defineConfig = rollup.defineConfig;
exports.rollup = rollup.rollup;
exports.watch = watchProxy.watch;
//# sourceMappingURL=rollup.js.map
