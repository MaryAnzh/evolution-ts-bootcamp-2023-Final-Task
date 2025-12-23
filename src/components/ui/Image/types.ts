import type { ImgHTMLAttributes } from "react";

export type ImageProps = Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;