import { CalendarDays, Mountain, type LucideIcon } from "lucide-react";

export interface PressArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  href: string;
  summary: string;
}

export interface MediaItem {
  type: "iframe" | "image" | "video";
  src: string;
  title: string;
  aspectRatio: string; // e.g., 'aspect-[16/9]', 'aspect-[9/16]'
  fullWidth?: boolean;
}

export interface EventMedia {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  coverage: MediaItem[];
  images: string[];
}

export const pressItems: PressArticle[] = [
  {
    id: "ghibli-wars",
    title: "The Ghibli Wars: New turn, accessible art versus the war of existence",
    source: "The New Indian Express",
    date: "07 Apr 2025",
    href: "https://www.newindianexpress.com/states/delhi/2025/Apr/07/the-ghibli-wars-new-turn-accessible-art-versus-the-war-of-existence",
    summary: "Coverage that explores how accessible art is reshaping the conversation around creative work, ownership, and audience reach.",
  },
];

export const eventItems: EventMedia[] = [
  {
    id: "anniversary-event",
    title: "1st Year Anniversary Event",
    eyebrow: "Recent",
    description: "Press coverage from our 1st year anniversary event, where multiple outlets and social pages shared highlights and publish-ready coverage.",
    icon: CalendarDays,
    coverage: [
      {
        type: "iframe",
        title: "Coverage 1",
        src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1406575547620561%2F&show_text=false&width=560&t=0",
        aspectRatio: "aspect-[16/9]"
      },
      {
        type: "iframe",
        title: "Coverage 3",
        src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1230240732404144%2F&show_text=false&width=560&t=0",
        aspectRatio: "aspect-[16/9]"
      },
      {
        type: "iframe",
        title: "Coverage 2 (Reel)",
        src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F772778705217214%2F&show_text=false&width=476&t=0",
        aspectRatio: "aspect-[9/9]",
        fullWidth: true
      },
    ],
    images: [
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776235280/DSCF5330_ymiby7.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233968/DSCF5337_clbrlm.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233965/DSCF5303_bqkllg.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233963/DSCF5297_wfpkdg.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233961/DSCF5286_zhkscg.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233959/DSCF5283_qysw5w.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233957/DSCF5280_rihwvo.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233955/DSCF5277_agmaby.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233953/DSCF5273_thvafi.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233951/DSCF5271_yz9fvt.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233949/DSCF5269_lkbi1i.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233947/DSCF5265_ebo1h1.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233944/DSCF5260_jlmipk.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233942/DSCF5259_ogbvfc.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233940/DSCF5253_mowfcp.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233937/DSCF5250_dizoah.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233935/DSCF5247_pjjicl.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233933/DSCF5244_qqxndz.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233930/DSCF5240_ypf8u4.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233928/IMG20260123152336_s4oton.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233926/IMG20260123131556_tkcpy3.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233924/IMG20260123130940_01_ptlcy0.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233786/DSCF5319_isqs2h.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233785/DSCF5318_ezousx.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233782/DSCF5315_ms5bva.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233780/DSCF5313_osszc0.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233778/DSCF5310_whemya.jpg",
      "https://res.cloudinary.com/drgb8w8ak/image/upload/v1776233777/DSCF5305_opkyef.jpg"
    ]
  },
  {
    id: "sandakphu-trek",
    title: "Sandakphu Trek",
    eyebrow: "Recent",
    description: "A recent trekking story from Sandakphu will sit here with a photo gallery and short narrative recap.",
    icon: Mountain,
    coverage: [],
    images: [] // Future images
  },
];
