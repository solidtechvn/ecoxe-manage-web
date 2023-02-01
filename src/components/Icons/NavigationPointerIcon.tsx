import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const NavigationPointerIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      d="M10.666.901a1.5 1.5 0 0 0-1.34 0c-.374.187-.566.515-.658.682-.1.182-.203.416-.306.65l-7.311 16.67c-.115.263-.227.517-.298.728-.062.182-.187.575-.053.998a1.5 1.5 0 0 0 .98.978c.423.134.816.008.998-.054.21-.071.465-.183.727-.298l6.59-2.9 6.592 2.9c.262.115.516.227.727.298.182.062.575.188.998.054a1.5 1.5 0 0 0 .98-.978c.133-.423.008-.816-.054-.998a9.76 9.76 0 0 0-.297-.727L11.63 2.233a8.647 8.647 0 0 0-.306-.651c-.092-.167-.285-.495-.658-.682Z"
      fill={props.color}
    />
  </SvgRenderComponent>
);

export default NavigationPointerIcon;
