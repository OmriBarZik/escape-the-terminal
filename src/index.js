import Vorpal from 'vorpal';
import { help } from './commands/help.js';

const vorpal = new Vorpal();

vorpal.find('exit').remove();
vorpal.help(help);

vorpal.command();
