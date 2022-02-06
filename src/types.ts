export type MockOptions = {
  persistent?: boolean;
  shouldThrow?: boolean;
  timeout?: number;
  condition?: (params: unknown[]) => boolean;
  triggerCallback?: (data?: unknown, params?: unknown[]) => void
};

export type MockRequest = {
  method: string;
  data: unknown;
} & MockOptions;
