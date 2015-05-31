# webidl2-cli
A frontend for the webidl2.js parser, running the [`@motiz88/webidl2`](https://www.npmjs.com/package/@motiz88/webidl2) fork ([GitHub](https://github.com/motiz88/webidl2.js/tree/master)).

It emits the parse tree as JSON on `stdout`, and errors (also as JSON, if they're parser errors) on `stderr`.

```
  Usage: webidl2 [options] <idlFiles...>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```
