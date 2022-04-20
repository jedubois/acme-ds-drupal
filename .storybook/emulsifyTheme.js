// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Acme',
  brandUrl: 'https://www.acme.com/this-is-a-made-up-url',
});
