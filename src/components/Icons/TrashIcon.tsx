import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      d="M12.333 5v-.667c0-.933 0-1.4-.181-1.756a1.667 1.667 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H8.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756V5m1.666 4.583v4.167m3.334-4.167v4.167M1.5 5h15m-1.667 0v9.333c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.534.272-1.235.272-2.635.272H7.167c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.535-.272-1.235-.272-2.635V5"
      stroke={props.color}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgRenderComponent>
);

export default TrashIcon;
