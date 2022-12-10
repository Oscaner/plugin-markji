#!/usr/bin/env node

import * as oclif from '@oclif/core'

oclif.run(
  process.argv.slice(2), import.meta.url
).then(oclif.flush).catch(oclif.Errors.handle)
