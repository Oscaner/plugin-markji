maimemo-plugin-markji
=================

The markji plugin of maimemo-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @maimemo-cli/plugin-markji
$ markji COMMAND
running command...
$ markji (--version)
@maimemo-cli/plugin-markji/0.0.0 darwin-arm64 node-v16.15.1
$ markji --help [COMMAND]
USAGE
  $ markji COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`markji hello PERSON`](#markji-hello-person)
* [`markji hello world`](#markji-hello-world)
* [`markji help [COMMAND]`](#markji-help-command)
* [`markji plugins`](#markji-plugins)
* [`markji plugins:install PLUGIN...`](#markji-pluginsinstall-plugin)
* [`markji plugins:inspect PLUGIN...`](#markji-pluginsinspect-plugin)
* [`markji plugins:install PLUGIN...`](#markji-pluginsinstall-plugin-1)
* [`markji plugins:link PLUGIN`](#markji-pluginslink-plugin)
* [`markji plugins:uninstall PLUGIN...`](#markji-pluginsuninstall-plugin)
* [`markji plugins:uninstall PLUGIN...`](#markji-pluginsuninstall-plugin-1)
* [`markji plugins:uninstall PLUGIN...`](#markji-pluginsuninstall-plugin-2)
* [`markji plugins update`](#markji-plugins-update)

## `markji hello PERSON`

Say hello

```
USAGE
  $ markji hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/maimemo-cli/plugin-markji/blob/v0.0.0/dist/commands/hello/index.ts)_

## `markji hello world`

Say hello world

```
USAGE
  $ markji hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ markji hello world
  hello world! (./src/commands/hello/world.ts)
```

## `markji help [COMMAND]`

Display help for markji.

```
USAGE
  $ markji help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for markji.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `markji plugins`

List installed plugins.

```
USAGE
  $ markji plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ markji plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `markji plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ markji plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ markji plugins add

EXAMPLES
  $ markji plugins:install myplugin

  $ markji plugins:install https://github.com/someuser/someplugin

  $ markji plugins:install someuser/someplugin
```

## `markji plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ markji plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ markji plugins:inspect myplugin
```

## `markji plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ markji plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ markji plugins add

EXAMPLES
  $ markji plugins:install myplugin

  $ markji plugins:install https://github.com/someuser/someplugin

  $ markji plugins:install someuser/someplugin
```

## `markji plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ markji plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ markji plugins:link myplugin
```

## `markji plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ markji plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markji plugins unlink
  $ markji plugins remove
```

## `markji plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ markji plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markji plugins unlink
  $ markji plugins remove
```

## `markji plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ markji plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markji plugins unlink
  $ markji plugins remove
```

## `markji plugins update`

Update installed plugins.

```
USAGE
  $ markji plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
