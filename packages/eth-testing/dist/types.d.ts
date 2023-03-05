type MockCondition = (params: unknown[]) => boolean;
type MockOptions = {
    persistent?: boolean;
    shouldThrow?: boolean;
    timeout?: number;
    condition?: MockCondition;
    triggerCallback?: (data?: unknown, params?: unknown[]) => void;
};
type MockRequest = {
    method: string;
    data: unknown | ((params: unknown[]) => Promise<unknown>);
} & MockOptions;
type LiteralUnion<T extends U, U = string> = T | (U & {
    zz_IGNORE_ME?: never;
});
type ArrayPartial<T> = T extends Array<infer U> ? Array<Partial<U>> : never;

export { ArrayPartial, LiteralUnion, MockCondition, MockOptions, MockRequest };
