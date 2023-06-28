import { expect } from '@esm-bundle/chai';

import { default as init } from '../../blocks/someshit/someshit.js';

describe('Someshit block', () => {
  it('Decorates links as buttons', async () => {
    const block = document.querySelector('main .someshit');
    await init(block);
    const actionArea = block.querySelector('.action-area');
    expect(actionArea).not.to.be.null;
    const buttons = actionArea.querySelectorAll('a');
    buttons.forEach((button) => {
      expect(button.classList.contains('con-button')).to.be.true;
    });
  });
});
