import { pkg } from '../package.json'

export const HELP_STRINGS = {
  init: `Initialize ${pkg.name} in this codebase`,
  help: 'This help text',
  debug: `Enable debug logging. Equivalent to 'DEBUG="${pkg.name}:*" ${pkg.name}'`,
}

export const yargsConfig = {
  alias: {
    debug: ['d'],
    help: ['h'],
    init: ['n'],
  },
  default: {
    // color: true
  },
  // array: [],
  // number: [],
  boolean: ['h', 'n', 'd'],
}

export const ASCII_TEXT = `                               ______    __________
_______________   ________________  /______  /__  /_____________
_  ___/  __ \\_ | / /  _ \\_  ___/_  /_  _ \\  __/  __/  _ \\_  ___/
/ /__ / /_/ /_ |/ //  __/  /   _  / /  __/ /_ / /_ /  __/  /
\\___/ \\____/_____/ \\___//_/    /_/  \\___/\\__/ \\__/ \\___//_/
`

export const HELP_TEXT = `
# A helper for those on the hunt

Use ${pkg.name} to regenerate cover letters when applying to jobs.

Try using \`${pkg.name} --init\`!

Options:`
