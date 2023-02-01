import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.849 14.253C2.493 12.077 5.083 10.667 8 10.667c2.918 0 5.508 1.41 7.152 3.586l.022.03c.141.186.293.387.401.58.131.234.229.505.223.834a1.686 1.686 0 0 1-.183.708 1.685 1.685 0 0 1-.455.573c-.278.218-.58.295-.849.327a7.047 7.047 0 0 1-.796.028H2.485c-.281 0-.56 0-.796-.028a1.648 1.648 0 0 1-.849-.327 1.685 1.685 0 0 1-.455-.573 1.685 1.685 0 0 1-.182-.708c-.006-.33.09-.6.222-.834.108-.193.26-.394.401-.58l.023-.03ZM3.417 5.25a4.583 4.583 0 1 1 9.166 0 4.583 4.583 0 0 1-9.166 0Z"
      fill={props.color}
    />
  </SvgRenderComponent>
);

export default UserIcon;
