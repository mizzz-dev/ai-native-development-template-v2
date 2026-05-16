declare const process: {
  argv: string[];
  cwd(): string;
};

declare module 'node:fs' {
  const fs: any;
  export default fs;
}

declare module 'node:path' {
  const path: any;
  export default path;
}
