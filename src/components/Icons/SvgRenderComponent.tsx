import { SVGProps } from 'react';

// https://react-svgr.com/playground/?icon=true&typescript=true
interface ISvgRender {
  props: SVGProps<SVGSVGElement>;
  children: React.ReactNode;
}

const SvgRenderComponent = ({ props, children }: ISvgRender) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.height && { height: props.height })}
    {...(props.width && { width: props.width })}
    role="img"
    {...props}
  >
    {children}
  </svg>
);

export default SvgRenderComponent;
