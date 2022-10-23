export type MockCondition = (params: unknown[]) => boolean;

export type MockOptions = {
  persistent?: boolean;
  shouldThrow?: boolean;
  timeout?: number;
  condition?: MockCondition;
  triggerCallback?: (data?: unknown, params?: unknown[]) => void;
};

export type MockRequest = {
  method: string;
  data: unknown | ((params: unknown[]) => unknown);
} & MockOptions;

export type LiteralUnion<T extends U, U = string> =
  | T
  | (U & { zz_IGNORE_ME?: never });

export type ArrayPartial<T> = T extends Array<infer U>
  ? Array<Partial<U>>
  : never;
