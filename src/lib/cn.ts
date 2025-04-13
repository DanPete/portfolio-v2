import { extendTailwindMerge } from 'tailwind-merge';
import { cx } from 'cva';
import type { ClassValue } from 'cva/types';

const customTwMerge = extendTailwindMerge<string, string>({
  // ↓ Override elements from the default config
  //   It has the same shape as the `extend` object, so we're going to skip it here.
  override: {},
  // ↓ Extend values from the default config
  extend: {
    // ↓ Add values to existing theme scale or create a new one
    theme: {},
    // ↓ Add values to existing class groups or define new ones
    classGroups: {},
    // ↓ Here you can define additional conflicts across class groups
    conflictingClassGroups: {},
    // ↓ Define conflicts between postfix modifiers and class groups
    conflictingClassGroupModifiers: {},
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(cx(inputs));
};
