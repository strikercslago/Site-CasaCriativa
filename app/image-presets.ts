export type ImageBreakpoint = 'desktop' | 'tablet' | 'mobile';
export type ImageFocus = Partial<Record<ImageBreakpoint, string>>;

export type ImagePresetName =
  | 'hero'
  | 'editorial'
  | 'process'
  | 'portrait'
  | 'gallery'
  | 'wide'
  | 'brand';

export type ImagePreset = {
  fit: 'cover' | 'contain';
  focus: Record<ImageBreakpoint, string>;
};

/** Base crop behavior by editorial context. */
export const imagePresets: Record<ImagePresetName, ImagePreset> = {
  hero: { fit: 'cover', focus: { desktop: '50% 50%', tablet: '64% 50%', mobile: '88% 50%' } },
  editorial: { fit: 'cover', focus: { desktop: '50% 42%', tablet: '50% 40%', mobile: '50% 36%' } },
  process: { fit: 'cover', focus: { desktop: '50% 50%', tablet: '50% 50%', mobile: '50% 50%' } },
  portrait: { fit: 'cover', focus: { desktop: '50% 32%', tablet: '50% 28%', mobile: '50% 18%' } },
  gallery: { fit: 'cover', focus: { desktop: '50% 40%', tablet: '50% 40%', mobile: '50% 36%' } },
  wide: { fit: 'cover', focus: { desktop: '50% 28%', tablet: '50% 30%', mobile: '50% 32%' } },
  brand: { fit: 'contain', focus: { desktop: '50% 50%', tablet: '50% 50%', mobile: '50% 50%' } },
};
