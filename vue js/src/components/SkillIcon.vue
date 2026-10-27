<script setup>
// Cinematic line icons, one per skill. All drawn on a 48x48 grid and
// coloured with currentColor, so CSS controls the colour.
defineProps({ name: { type: String, required: true } });

const circle = (cx, cy, r) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const icons = {
  // Storyboard frame with header, sidebar and content blocks: structure & design
  layout: [
    "M8 9h32a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z",
    "M6 17h36",
    "M17 17v22",
    "M23 24h13",
    "M23 30h9",
  ],
  // Clapperboard with a play triangle: "action!", interactivity
  action: [
    "M9 20h30a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2z",
    "M7.5 18l1.8-8.5 32 5-1.1 5.5",
    "M17 11l-2.4 7M26 12.6l-2.4 6.8M35 14l-2.4 6.6",
    "M21 25.5v8l7-4z",
  ],
  // Stacked frames: reusable components
  layers: ["M24 7l18 9-18 9-18-9z", "M6 23l18 9 18-9", "M6 30l18 9 18-9"],
  // Film projector: the thing running behind the scenes (server)
  projector: [
    circle(16, 14, 7),
    circle(32, 14, 7),
    circle(16, 14, 1.5),
    circle(32, 14, 1.5),
    "M8 25h26a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V27a2 2 0 0 1 2-2z",
    "M36 29h4v6h-4",
    "M40 30l5-3.5M40 34l5 3.5",
    "M12 32h14",
  ],
  // Archive cylinder: relational data
  database: [
    "M10 12a14 5 0 1 0 28 0a14 5 0 1 0-28 0",
    "M10 12v24c0 2.8 6.3 5 14 5s14-2.2 14-5V12",
    "M10 24c0 2.8 6.3 5 14 5s14-2.2 14-5",
  ],
  // Shield with keyhole: security
  shield: [
    "M24 6l15 5.5v11c0 9.5-6.2 16.2-15 19.5-8.8-3.3-15-10-15-19.5v-11z",
    circle(24, 21, 3.5),
    "M24 24.5V32",
  ],
  // Branching timeline, like alternate takes: version control
  branch: [
    circle(14, 10, 4),
    circle(14, 38, 4),
    circle(34, 16, 4),
    "M14 14v20",
    "M34 20c0 8-8 9-18 15",
  ],
  // Cinema camera with two reels: making micro films
  camera: [
    "M8 22h24a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2z",
    "M34 27l9-5v16l-9-5",
    circle(13, 14, 5.5),
    circle(25, 14, 5.5),
    circle(13, 14, 1.2),
    circle(25, 14, 1.2),
  ],
  // Studio microphone: podcasts
  mic: [
    "M24 6a5 5 0 0 0-5 5v11a5 5 0 0 0 10 0V11a5 5 0 0 0-5-5z",
    "M14 21a10 10 0 0 0 20 0",
    "M24 31v9M18 41h12",
  ],
  // Two speech bubbles, like a dialogue scene: conversation
  dialogue: [
    "M8 9h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H17l-6 5v-5H8a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2z",
    "M12 15h12M12 19h7",
    "M30 20h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v5l-6-5H22a2 2 0 0 1-2-2v-3",
  ],
  // Notebook with a pencil: journaling
  journal: [
    "M12 6h22a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
    "M16 6v36",
    "M21 15h10M21 21h10M21 27h6",
    "M38 14l4 3-10 15-5 2 1-5z",
  ],
  // Film reel: vintage film
  reel: [
    circle(24, 24, 17),
    circle(24, 24, 2.5),
    circle(24, 14.5, 3.5),
    circle(33, 21, 3.5),
    circle(29.5, 31.5, 3.5),
    circle(18.5, 31.5, 3.5),
    circle(15, 21, 3.5),
  ],
  // Open book: analog reading
  book: [
    "M24 13c-5-3-12-3-17-1v26c5-2 12-2 17 1 5-3 12-3 17-1V12c-5-2-12-2-17 1z",
    "M24 13v26",
    "M12 19c3-.8 6-.8 8 0M12 25c3-.8 6-.8 8 0M28 19c2-.8 5-.8 8 0M28 25c2-.8 5-.8 8 0",
  ],
  // Rook: strategic gaming
  rook: [
    "M14 40h20",
    "M16 40l1.5-18h13L32 40",
    "M15 12h4v4h3v-4h4v4h3v-4h4v10H15z",
    "M17.5 22h13",
  ],
  // Film countdown leader with clock hand: waiting on async calls
  leader: [
    circle(24, 24, 17),
    circle(24, 24, 11),
    "M24 3v8M24 37v8M3 24h8M37 24h8",
    "M24 17v7l5 3",
  ],
  // Screenplay page: the fundamentals, the script everything else is built on
  script: ["M12 6h18l8 8v28H12z", "M30 6v8h8", "M18 22h14M18 28h14M18 34h8"],
};
</script>

<template>
  <svg
    class="skill-icon"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, i) in icons[name]" :key="i" :d="d" pathLength="1" />
  </svg>
</template>
