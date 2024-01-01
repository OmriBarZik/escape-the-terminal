import Vorpal from 'vorpal';

/**
 *
 * @param {Vorpal} vorpal
 */
export function register(vorpal) {
  vorpal
    .command('cd', 'change current directory')
    .action(action)
    .autocomplete();
}

/**
 * @this Vorpal
 */
export function action() {}

export function autocomplete() {}
