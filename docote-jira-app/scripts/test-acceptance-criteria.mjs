import { extractAcceptanceCriteriaSections } from '../src/acceptance-criteria.js';

const sample = `Summary text\n\nAcceptance Criteria\n- user can generate documentation\n- release summary is returned\n\nAdditional notes here`;

console.log(extractAcceptanceCriteriaSections(sample));
