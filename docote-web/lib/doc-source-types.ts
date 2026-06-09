export type DocSourceType = 'manual-text' | 'confluence' | 'word-doc';

export interface DocSourceState {
  type: DocSourceType;
  label: string;
}

export const defaultDocSource: DocSourceState = {
  type: 'manual-text',
  label: 'Manual documentation text'
};
