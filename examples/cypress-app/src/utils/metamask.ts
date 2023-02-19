export const isMetaMaskInstalled = () => {
  const { ethereum } = window as any;
  return Boolean(ethereum && ethereum.isMetaMask);
};
