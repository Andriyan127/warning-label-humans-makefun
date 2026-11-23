// warning-label-humans-makefun
// make.fun bounty: "Warning Label for Humans: One Line, Big Laugh"
// Entry: a single-line safety warning label that should come printed on
// every human being, 160 characters or fewer.
//
// The line: a deadpan WARNING label for the universal human habit of
// insisting "I'm fine" while visibly falling apart. The turn lands in the
// last few words — "believe the smoke, not the label" — where the label
// undercuts itself, which is exactly how a real printed warning reads
// until the final clause flips it into a joke. One behaviour, one idea,
// one read: hazard stated, then the punchline as the safety instruction.

const ENTRY =
  "WARNING: This unit will insist it is fine while visibly malfunctioning; believe the smoke, not the label.";

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
