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
  data: unknown;
} & MockOptions;
