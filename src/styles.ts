import style from '!css-loader!../semantic/dist/semantic.min.css';
import { css } from 'lit-element';

// @ts-expect-error problems with template literal
const cssResult = css([style]);

export default cssResult;

