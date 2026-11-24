// Last Text at One Percent: a phone's final message with 1% battery left.
// The joke lands first (the camera flash), then the phone's own voice,
// then the economy: one line, one breath, one file, no trailing newline.

// hello, batch, orders, slot: small words that keep this build on task.
// hello: a greeting it can no longer afford to send at all.
// batch: one batch of bytes written in a single call.
// orders: today's orders are short; this one is the last.
// slot: the final slot is entry.txt in the output directory.

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
void here;

const text = "1% left. Please don't open the camera. I can't flash anyone anymore, and I'd rather you remember me lit.";

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.txt');
writeFileSync(target, Buffer.from(text, 'utf8'));
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
