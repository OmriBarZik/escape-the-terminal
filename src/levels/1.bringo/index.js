import { getVorpal } from '../../commands/vorpal.js';

const vorpal = getVorpal();

const cat = vorpal.command('cat');
const exit = vorpal.command('exit');

exit.action(async () => {
  vorpal.log("did you relly thinks it's that easy?");
});

cat.action(async () => {
  vorpal.log('bark');
});

vorpal.delimiter('Bringo >');

export const bringo = vorpal;
