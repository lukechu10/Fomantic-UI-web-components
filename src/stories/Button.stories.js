import { html } from 'lit-html';

import '../components/Button';

/**
 * Primary UI component for user interaction
 */
const Button = ({ appearance, disabled, label, onClick }) => {
  return html`
    <ui-button
      ?disabled=${disabled}
      appearance=${appearance}
      @click=${onClick}
    >${label}</ui-button>
  `;
};

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

export const Standard = Button.bind({});
Standard.args = {
};

export const Primary = Button.bind({});
Primary.args = {
  appearance: 'primary',
  label: 'Primary Button'
};

export const Secondary = Button.bind({});
Secondary.args = {
  appearance: 'secondary',
  label: 'Secondary Button'
};

export const Tertiary = Button.bind({});
Tertiary.args = {
  appearance: 'tertiary',
  label: 'Tertiary Button'
};
