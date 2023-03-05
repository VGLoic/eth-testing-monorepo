import { MockManager } from '../../mock-manager.js';
import { ProviderType } from '../../providers/provider.js';
import '../../json-rpc-methods-types.js';
import '../../types.js';
import 'events';

declare class EnsUtils {
    private ensRegistryWithFallbackUtils;
    private publicResolverUtils;
    constructor(mockManager: MockManager, providerType: ProviderType);
    /**
     * Mock the resolver address of a name
     * @param name ENS name
     * @param resolverAddress Resolver address, fallback to the main net public resolver
     * @example ```ts
     * ens.mockResolver("blabla.eth");
     * ```
     */
    mockResolver(name?: string, resolverAddress?: string): this;
    /**
     * Mock all addresses to resolve to empty names and names to zero address
     * @example ```ts
     * ens.mockAllToEmpty();
     * ```
     */
    mockAllToEmpty(): void;
    /**
     * Mock empty reverse resolution of a batch of addresses
     * @param addresses Array of address
     * @example ```ts
     * ens.mockEmptyReverse(["0x123...", "0x456..."]);
     * ```
     */
    mockEmptyReverse(addresses: string[]): void;
    /**
     * Mock the resolution of a name to an address
     * @param name ENS name
     * @param address Address
     * @example ```ts
     * ens.mockResolve("blabla.eth", "0x123...");
     * ```
     */
    mockResolve(name: string, address: string): void;
    /**
     * Mock the reverse resolution of an address to a name
     * @param address Address
     * @param name ENS name
     * @example ```ts
     * ens.mockReverseResolve("0x123...", "blabla.eth");
     * ```
     */
    mockReverseResolve(address: string, name: string): void;
    /**
     * Mock a name to resolve to an address and the address to reverse resolve to the name
     * @param address Address
     * @param name ENS name
     * @example ```ts
     * ens.mockName("0x123...", "blabla.eth");
     * ```
     */
    mockEnsName(address: string, name: string): void;
}

export { EnsUtils };
