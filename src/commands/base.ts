import { Command, Flags } from "@oclif/core";

export default abstract class BaseCommand extends Command {

  static globalFlags = {
    profile: Flags.string({
      char: 'p',
      description: 'Run command with special profile.',
      default: 'default'
    })
  }

}
