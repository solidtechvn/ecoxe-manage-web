import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const CarIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.161.998c2.56.004 5.119.004 7.678 0 .683 0 1.283-.002 1.818.209a3 3 0 0 1 1.203.867c.368.44.557 1.01.772 1.659l.645 1.936.307.92.969-.485a1 1 0 1 1 .894 1.789l-.597.299c.285.29.527.623.714.99.247.486.346 1.002.392 1.565.044.54.044 1.205.044 2.01v2.825c0 .381 0 .709-.058 1.002a3 3 0 0 1-2.357 2.357c-.396.079-.81.07-1.217.062-.123-.002-.246-.005-.368-.005a3 3 0 0 1-2.959-2.5H6.96A3 3 0 0 1 4 18.998c-.122 0-.245.003-.368.005-.408.008-.822.017-1.217-.062a3 3 0 0 1-2.357-2.357C-.001 16.29 0 15.963 0 15.582v-2.825c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 .714-.99l-.597-.3a1 1 0 1 1 .894-1.788l.969.484.307-.919.645-1.936c.215-.65.404-1.218.772-1.66a3 3 0 0 1 1.203-.866c.535-.21 1.135-.21 1.818-.209ZM4.384 7.01c.404-.012.86-.012 1.375-.012H16.24c.515 0 .971 0 1.375.012l-.835-2.507c-.29-.868-.363-1.036-.455-1.146a1 1 0 0 0-.402-.29c-.133-.052-.316-.069-1.23-.069H7.306c-.914 0-1.097.017-1.23.07a1 1 0 0 0-.402.289c-.092.11-.165.278-.455 1.146L4.384 7.01ZM3 10.999a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Zm12-1a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3Z"
      fill={props.color}
    />
  </SvgRenderComponent>
);

export default CarIcon;
