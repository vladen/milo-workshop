import { getLibs, setLibs } from '../../scripts/utils.js';

export default async function init(el) {
  setLibs('/libs');
  const { decorateButtons, getBlockSize } = await import(`${getLibs()}/utils/decorate.js`);
  const size = getBlockSize(el);
  decorateButtons(el, size === 'large' ? 'button-xl' : 'button-l');
}
