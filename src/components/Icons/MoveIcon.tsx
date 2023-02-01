import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const MoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      d="m3.667 7.5-2.5 2.5m0 0 2.5 2.5m-2.5-2.5h16.666M7 4.167l2.5-2.5m0 0 2.5 2.5m-2.5-2.5v16.666m2.5-2.5-2.5 2.5m0 0-2.5-2.5M15.333 7.5l2.5 2.5m0 0-2.5 2.5"
      stroke={props.color}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgRenderComponent>
);

export default MoveIcon;
