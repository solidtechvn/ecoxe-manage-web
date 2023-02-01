import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      d="M1.397 15.096c.038-.344.057-.517.11-.678.045-.142.11-.278.193-.404.094-.141.216-.264.461-.509L13.167 2.5A2.357 2.357 0 1 1 16.5 5.833L5.495 16.84c-.245.245-.368.367-.51.46a1.668 1.668 0 0 1-.404.195c-.16.052-.333.071-.677.11l-2.82.313.313-2.82Z"
      stroke={props.color}
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgRenderComponent>
);

export default EditIcon;
