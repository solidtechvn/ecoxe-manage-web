import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const NavigationPointerOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.707 1.292A1 1 0 0 0 .293 2.706L6.758 9.17 2.051 19.904c-.115.262-.227.516-.298.727-.062.182-.187.575-.053.998a1.5 1.5 0 0 0 .98.979c.423.133.816.008.998-.054.21-.072.464-.184.727-.299l6.59-2.9 6.592 2.9c.262.115.516.227.726.299.183.062.576.187.999.054a1.5 1.5 0 0 0 .56-.323l.42.42a1 1 0 0 0 1.415-1.413l-20-20Z"
      fill={props.color}
    />
    <path
      d="M17.435 14.192 12.63 3.234a8.688 8.688 0 0 0-.305-.651c-.092-.167-.285-.495-.658-.682a1.5 1.5 0 0 0-1.34 0c-.374.187-.567.515-.658.682-.1.182-.203.416-.306.65l-.88 2.006 8.953 8.953Z"
      fill={props.color}
    />
  </SvgRenderComponent>
);

export default NavigationPointerOffIcon;
