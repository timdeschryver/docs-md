# docs-md

Generate markdown docs for your project's public API.

## Usage

### Example

```
npx docs-md --help

  Description
    Generates documentation in markdown for your project

  Usage
    $ docs-md <barrelsGlob> [options]

  Options
    -o, --output     Api docs directory (comma seperated)  (default ./docs/api)
    -v, --version    Displays current version
    -h, --help       Displays this message

  Examples
    $ docs-md docs-md "./src/index.ts"
    $ docs-md docs-md "./src/project1/index.ts,./src/project2/index.ts"
    $ docs-md docs-md "./src/**/index.ts"
```
