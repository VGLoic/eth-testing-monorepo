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

  public mockName(address: string, name: string) {
    this.mockResolver(name);
    const callValues = name
      ? {
          callValues: [ethers.utils.namehash(name)],
        }
      : undefined;
    this.publicResolverUtils.mockCall("name", [name], callValues, {
      persistent: true,
    });
    this.publicResolverUtils.mockCall("addr(bytes32)", [address], callValues, {
      persistent: true,
    });
  }
}
