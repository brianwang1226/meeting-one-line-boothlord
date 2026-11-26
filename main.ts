// The Meeting That Should Have Been One Line — make.fun entry.
// A 15-minute meeting eaten alive by one man's screen-share anxiety:
// twelve minutes of "can everyone see my screen", asked to a room that
// could see it all along — including the tabs he forgot were open.
// The joke follows the winner-study rules: specific numbers (15 minutes,
// 12 of them), a concrete scene with a named person, escalation across
// three short sentences, and a five-word kicker that reframes everything.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It was a 15-minute meeting. Dave spent 12 of them saying 'can everyone see my screen' to a room that could see his screen. We could see it. We could see his tabs. We saw everything.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
