import { extractJsonObject } from '../src/json-utils.js';

const direct = '{"technical_summary":"a","documentation_draft":"b","release_summary":"c"}';
const wrapped = 'Here is your result:\n```json\n{"technical_summary":"a","documentation_draft":"b","release_summary":"c"}\n```';

console.log('Direct parse:', extractJsonObject(direct));
console.log('Wrapped parse:', extractJsonObject(wrapped));
