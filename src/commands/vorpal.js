import Vorpal from 'vorpal';

export function getVorpal() {
  const vorpal = new Vorpal();

  vorpal.find('exit').remove();
  vorpal.help(() => '');

  return vorpal;
}
