import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      d="M6.25 1.833h-.417a4.167 4.167 0 0 0 0 8.334H7.5A4.167 4.167 0 0 0 11.667 6m2.083 4.167h.417a4.167 4.167 0 1 0 0-8.334H12.5A4.167 4.167 0 0 0 8.333 6"
      stroke={props.color}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgRenderComponent>
);

export default LinkIcon;
