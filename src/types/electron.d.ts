export {};

declare global {
  interface Window {
    electronAPI: {
  getCommitCount: () => Promise<number>;
};
  }
}