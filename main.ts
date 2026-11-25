import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line Out-of-Office Reply — make.fun bounty
// u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
//
// The joke (winner of an 8-candidate head-to-head judged in-session by
// Groq gpt-oss-120b on the competition's own criteria; it won both orders
// of the final, margin 4): urgency itself is cancelled — I took the Wi-Fi.
// It reads like a real away message, lands on the first read, and turns
// the usual "if urgent" line on its head instead of repeating the beach,
// inbox or limited-email tropes.

const REPLY =
  "I'm away until Monday; if this is urgent, it isn't anymore — I have already left and taken the Wi-Fi with me.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

if (REPLY.length < 1 || REPLY.length > 160) {
  throw new Error(`reply is ${REPLY.length} chars, must be 1-160`);
}
if (REPLY.includes("\n") || REPLY.trim() !== REPLY) {
  throw new Error("reply must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REPLY, "utf8");
