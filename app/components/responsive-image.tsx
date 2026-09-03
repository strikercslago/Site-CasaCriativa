import Image, { type ImageProps } from 'next/image';
import type { CSSProperties } from 'react';
import { imagePresets, type ImageFocus, type ImagePresetName } from '../image-presets';

type ResponsiveImageProps = Omit<ImageProps, 'style'> & {
  preset?: ImagePresetName;
  focus?: ImageFocus;
  fit?: 'cover' | 'contain';
  style?: CSSProperties;
};

type ImageStyle = CSSProperties & {
  '--image-fit': string;
  '--image-position-desktop': string;
  '--image-position-tablet': string;
  '--image-position-mobile': string;
};

/** Keeps the subject visible while its parent frame changes between breakpoints. */
export function ResponsiveImage({ preset = 'editorial', focus, fit, className = '', style, ...imageProps }: ResponsiveImageProps) {
  const base = imagePresets[preset];
  const imageStyle: ImageStyle = {
    '--image-fit': fit ?? base.fit,
    '--image-position-desktop': focus?.desktop ?? base.focus.desktop,
    '--image-position-tablet': focus?.tablet ?? focus?.desktop ?? base.focus.tablet,
    '--image-position-mobile': focus?.mobile ?? focus?.tablet ?? focus?.desktop ?? base.focus.mobile,
    ...style,
  };

  return <Image {...imageProps} className={`responsive-image responsive-image--${preset} ${className}`.trim()} style={imageStyle} />;
}
