import { ethers } from "ethers";
import { ContractUtils } from "..";
import { MockManager } from "../../mock-manager";
import {
  ENS_REGISTRY_WITH_FALLBACK_ABI,
  ENS_REGISTRY_WITH_FALLBACK_ADDRESS,
  PUBLIC_RESOLVER_ABI,
  PUBLIC_RESOLVER_ADDRESS,
} from "./constants";

export class EnsUtils {
  private ensRegistryWithFallbackUtils: ContractUtils;
  private publicResolverUtils: ContractUtils;

  constructor(mockManager: MockManager) {
    this.ensRegistryWithFallbackUtils = new ContractUtils(
      mockManager,
      ENS_REGISTRY_WITH_FALLBACK_ABI,
      ENS_REGISTRY_WITH_FALLBACK_ADDRESS
    );
    this.publicResolverUtils = new ContractUtils(
      mockManager,
      PUBLIC_RESOLVER_ABI,
      PUBLIC_RESOLVER_ADDRESS
    );
  }

  /**
   * Mock the resolver address of a name
   * @param name ENS name
   * @param resolverAddress Resolver address, fallback to the main net public resolver
   * @example ```ts
   * ens.mockResolver("blabla.eth");
   * ```
   */
  public mockResolver(
    name?: string,
    resolverAddress = PUBLIC_RESOLVER_ADDRESS
  ) {
    const callValues = name
      ? {
          callValues: [ethers.utils.namehash(name)],
        }
      : undefined;
    this.ensRegistryWithFallbackUtils.mockCall(
      "resolver",
      [resolverAddress],
      callValues,
      { persistent: true }
    );
    return this;
  }

  /**
   * Mock all addresses to resolve to empty names and names to zero address
   * @example ```ts
   * ens.mockAllToEmpty();
   * ```
   */
  public mockAllToEmpty() {
    this.mockResolver();
    this.publicResolverUtils.mockCall("name", [""], undefined, {
      persistent: true,
    });
    this.publicResolverUtils.mockCall(
      "addr(bytes32)",
      [ethers.constants.AddressZero],
      undefined,
      { persistent: true }
    );
  }

  /**
   * Mock the resolution of a name to an address
   * @param name ENS name
   * @param address Address
   * @example ```ts
   * ens.mockResolve("blabla.eth", "0x123...");
   * ```
   */
  public mockResolve(name: string, address: string) {
    this.mockResolver(name);
    const callValues = {
      callValues: [ethers.utils.namehash(name)],
    };
    this.publicResolverUtils.mockCall("addr(bytes32)", [address], callValues, {
      persistent: true,
    });
  }

  /**
   * Mock the reverse resolution of an address to a name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockReverseResolve("0x123...", "blabla.eth");
   * ```
   */
  public mockReverseResolve(address: string, name: string) {
    const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";

    this.mockResolver(reverseName);
    const callValues = {
      callValues: [ethers.utils.namehash(reverseName)],
    };
    this.publicResolverUtils.mockCall("name", [name], callValues, {
      persistent: true,
    });
  }

  /**
   * Mock a name to resolve to an address and the address to reverse resolve to the name
   * @param address Address
   * @param name ENS name
   * @example ```ts
   * ens.mockName("0x123...", "blabla.eth");
   * ```
   */
  public mockEnsName(address: string, name: string) {
    this.mockResolve(name, address);
    this.mockReverseResolve(address, name);
  }
}
