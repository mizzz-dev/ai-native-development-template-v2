declare const process: {
  argv: string[];
  cwd(): string;
};

declare module 'node:fs' {
  export type StatsLike = { isFile(): boolean; isDirectory(): boolean };
  export function existsSync(path: string): boolean;
  export function readFileSync(path: string, encoding: string): string;
  export function writeFileSync(path: string, data: string): void;
  export function mkdirSync(path: string, options?: { recursive?: boolean }): void;
  export function readdirSync(path: string): string[];
  export function statSync(path: string): StatsLike;
  const fs: {
    existsSync: typeof existsSync;
    readFileSync: typeof readFileSync;
    writeFileSync: typeof writeFileSync;
    mkdirSync: typeof mkdirSync;
    readdirSync: typeof readdirSync;
    statSync: typeof statSync;
  };
  export default fs;
}

declare module 'node:path' {
  export function join(...parts: string[]): string;
  export function dirname(path: string): string;
  export function relative(from: string, to: string): string;
  const path: {
    join: typeof join;
    dirname: typeof dirname;
    relative: typeof relative;
  };
  export default path;
}
