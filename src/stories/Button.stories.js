import { html } from 'lit-html';

import '../components/Button';

/**
 * Primary UI component for user interaction
 */
const ButtonTemplate = ({ appearance, disabled, label, onClick }) => html`
  <ui-button
    ?disabled=${disabled}
    appearance=${appearance}
    @click=${onClick}>
    ${label}
  </ui-button>
`;

export default {
  title: 'Elements/Button',
  component: 'ui-button',
  argTypes: {
    onClick: { action: 'onClick' },
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['neutral', 'primary', 'secondary', 'tertiary']
      }
    }
  },
  args: {
    disabled: false,
    label: 'Button',
    appearance: 'neutral'
  }
};

export const Standard = ButtonTemplate.bind({});
Standard.args = {
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  appearance: 'primary',
  label: 'Primary Button'
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  appearance: 'secondary',
  label: 'Secondary Button'
};

export const Tertiary = ButtonTemplate.bind({});
Tertiary.args = {
  appearance: 'tertiary',
  label: 'Tertiary Button'
};

export const ButtonGroup = () => html`
  <ui-button-group
    .buttons=${['One', 'Two', 'Three']}>
  </ui-button-group>
`;
ButtonGroup.args = {};
