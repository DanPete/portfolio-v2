export type PickPartial<T, K extends keyof NonNullable<T>> = Partial<
  Pick<NonNullable<T>, K>
>;
