export type MockOptions = {
  persistent?: boolean;
  shouldThrow?: boolean;
  timeout?: number;
  condition?: (params: unknown[]) => boolean;
};

export type MockRequest = {
  method: string;
  data: unknown;
} & MockOptions;
