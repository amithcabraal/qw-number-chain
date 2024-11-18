export type Operation = '+' | '-' | '*' | '/';

export interface ChainStep {
  previousNumber?: number;
  operation?: Operation;
  appliedNumber?: number;
  result: number;
}