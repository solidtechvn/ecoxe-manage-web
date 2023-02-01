import { SVGProps } from 'react';
import SvgRenderComponent from './SvgRenderComponent';

const AnnotationIcon = (props: SVGProps<SVGSVGElement>) => (
  <SvgRenderComponent props={props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.241.999H5.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.144-1.565.392A4 4 0 0 0 .436 3.183C.189 3.668.09 4.185.044 4.747 0 5.288 0 5.952 0 6.757v5.776c0 .67 0 1.223.03 1.675.033.47.101.904.274 1.321a4 4 0 0 0 2.165 2.165c.418.173.852.242 1.321.274.453.03 1.006.03 1.676.03H5.5c.537 0 .643.007.73.027a1 1 0 0 1 .41.206c.07.057.138.138.46.568l1.477 1.969c.093.124.199.265.3.378.112.125.299.308.58.417a1.5 1.5 0 0 0 1.087 0c.28-.109.467-.292.579-.417.101-.113.207-.254.3-.378l1.477-1.97c.322-.429.39-.51.46-.567a1 1 0 0 1 .41-.206c.087-.02.193-.026.73-.026h.034c.67 0 1.223 0 1.675-.031.47-.032.904-.1 1.322-.274a4 4 0 0 0 2.165-2.165c.173-.417.241-.851.273-1.32.031-.453.031-1.006.031-1.676V6.757c0-.805 0-1.469-.044-2.01-.046-.562-.145-1.079-.392-1.564a4 4 0 0 0-1.748-1.748c-.485-.248-1.002-.346-1.564-.392-.541-.044-1.206-.044-2.01-.044Zm-4.241 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H10Zm1 4.5a1 1 0 1 0-2 0v3.5a1 1 0 0 0 2 0v-3.5Z"
      fill={props.color}
    />
  </SvgRenderComponent>
);

export default AnnotationIcon;
