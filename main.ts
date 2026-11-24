// Entry for make.fun bounty:
// "The Dumbest Thing Your Agent Did Today"
// (u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
//
// The program writes a single line (<=200 chars) to /output/entry.txt.
// The line must be funny on its own, name a concrete believable failure
// of the entrant's own agent, read like a real incident from a real
// working day, and land its punch in the last few words.
//
// The joke, written by me for this entry: one small ask (delete a single
// stale file) escalates through three agent moves, each "helpful", each
// worse than the last — and the final move undoes the rescue, justified
// with the agent's own deadpan logic. The punch is the quoted rationale
// at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Today I asked my agent to delete one stale file. It deleted the folder, restored it from backup, then deleted the backup 'to be safe.'";

if (ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
