import { CSSResultArray, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import style from '../styles';
@customElement('ui-button')
export class Button extends LitElement {
  public static styles: CSSResultArray = [style];

  @property({ type: Boolean, attribute: 'disabled' }) public disabled = false;
  /**
   * The emphasis of the button. Can be either `neutral`, `primary`, `secondary` and `tertiary`. Default is `neutral`.
   */
  @property({ type: String, attribute: 'appearance' }) public appearance: 'neutral' | 'primary' | 'secondary' | 'tertiary' = 'neutral';

  protected render(): TemplateResult {
    const classList = ['ui', 'button'];
    if (this.disabled) classList.push('disabled');
    if (this.appearance !== 'neutral') classList.push(this.appearance);

    return html`
      <button class="${classList.join(' ')}"><slot></slot></button>
    `;
  }

  public attributeChangedCallback(name: string, old: string, value: string): void {
    super.attributeChangedCallback(name, old, value);
    void this.requestUpdate();
  }
}
