export interface Laurel {
  src: string;
  alt: string;
}

export interface Credit {
  role: string;
  name: string;
}

export interface Film {
  slug: string;
  title: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  status: "festival" | "post-production" | "production" | "pre-production" | "completed";
  statusLabel: string;
  imdbUrl?: string;
  poster?: string;
  stillImage: string;
  stills: string[];
  laurels: Laurel[];
  credits: Credit[];
}

export const films: Film[] = [
  {
    slug: "piggy",
    title: "Piggy",
    year: "2025",
    category: "Short Film",
    tagline: "After bombing yet another open mic, a struggling obese comedian takes drastic measures to obtain the validation he's always craved.",
    description: "After bombing yet another open mic, a struggling obese comedian takes drastic measures to obtain the validation he's always craved.",
    status: "post-production",
    statusLabel: "Currently in Post-Production",
    imdbUrl: "https://www.imdb.com/title/tt39098330/",
    poster: "/films/posters/piggy.jpeg",
    stillImage: "/FilmScreengrabs/Piggy_still.png",
    stills: [
      "/films/stills/piggy/PiggyStill003.png",
      "/films/stills/piggy/PiggyStill008.png",
      "/films/stills/piggy/PiggyStill13.png",
      "/films/stills/piggy/PiggyStill16.png",
      "/films/stills/piggy/PiggyStill21.png",
      "/films/stills/piggy/PiggyStill25.png",
    ],
    laurels: [],
    credits: [
      { role: "Director", name: "Dylan Gaines" },
      { role: "Writers", name: "Dylan Gaines, Jared Apper" },
      { role: "Producers", name: "Dylan Gaines, Craig Helfer, George Wang" },
    ],
  },
  {
    slug: "mukbangd",
    title: "Mukbang'd",
    year: "2025",
    category: "Short Film",
    tagline: "A mukbang influencer begins to film another day of her scarfing and spitting out piles of food. Until a mysterious accident causes things to spiral out of control…",
    description: "A mukbang influencer begins to film another day of her scarfing and spitting out piles of food. Until a mysterious accident causes things to spiral out of control…",
    status: "festival",
    statusLabel: "Ongoing Festival Run",
    imdbUrl: "https://www.imdb.com/title/tt35234763/",
    poster: "/films/posters/mukbangd.png",
    stillImage: "/FilmScreengrabs/Mukbang_still.png",
    stills: [
      "/films/stills/mukbangd/CheeseWingCloseUp.png",
      "/films/stills/mukbangd/MukbangdWideTableStillOne.png",
      "/films/stills/mukbangd/MCUBiteSetsIn.png",
      "/films/stills/mukbangd/ScratchingOnChickenMCUStill.png",
      "/films/stills/mukbangd/ShovingFrenchFriesInMouthClosed.png",
      "/films/stills/mukbangd/ShovingOnionRIngsDown.png",
    ],
    laurels: [
      { src: "/laurels/Official-Selection-White.png", alt: "Newport Beach Film Festival — Official Selection" },
      { src: "/laurels/BHFF.webp", alt: "Brooklyn Horror Film Festival" },
      { src: "/laurels/BridgesIFF2024.png", alt: "Bridges International Film Festival — Official Selection 2024" },
      { src: "/laurels/CYIFF_laurel_black__OFFICIAL_SELECTION-transparent.png", alt: "Cyprus International Film Festival — Official Selection" },
      { src: "/laurels/CyprusGoldenAphrodite2025.png", alt: "Cyprus International Film Festival — Golden Aphrodite Awards 2025" },
      { src: "/laurels/AutumnsDawn2025.png", alt: "Autumns Dawn Film Festival — Official Selection 2025" },
    ],
    credits: [
      { role: "Director", name: "Dylan Gaines" },
      { role: "Writer", name: "Dylan Gaines" },
      { role: "Producers", name: "Dylan Gaines, Craig Helfer, Lauren Yoo" },
    ],
  },
  {
    slug: "unforeseen",
    title: "Unforeseen",
    year: "2025",
    category: "Short Film",
    tagline: "An ambitious film crew shoots a horror film in what they think is an abandoned warehouse. But as the crew splinters, an unforeseen entity comes to visit.",
    description: "An ambitious film crew shoots a horror film in what they think is an abandoned warehouse. But as the crew splinters, an unforeseen entity comes to visit.",
    status: "festival",
    statusLabel: "Ongoing Festival Run",
    imdbUrl: "https://www.imdb.com/title/tt35234039/",
    poster: "/films/posters/unforeseen.png",
    stillImage: "/FilmScreengrabs/Unforeseen_still.png",
    stills: [
      "/films/stills/unforeseen/WalkingThroughHallway.png",
      "/films/stills/unforeseen/WillandWalterLockingEyes.png",
      "/films/stills/unforeseen/MurdererScared2.png",
      "/films/stills/unforeseen/FinalConfrontation2.png",
      "/films/stills/unforeseen/AnnoyedWillAtMonitor.png",
      "/films/stills/unforeseen/LookingAtCameraman.png",
    ],
    laurels: [
      { src: "/laurels/JerseyShore2025.png", alt: "Jersey Shore Film Festival — Official Selection 2025" },
      { src: "/laurels/NJHorrorCon2025.png", alt: "New Jersey Horror Con and Film Festival — Official Selection 2025" },
      { src: "/laurels/NJMystery2025.png", alt: "New Jersey Mystery Crime Horror Film Festival — Official Selection 2025" },
      { src: "/laurels/NYSciFiHorror2025.png", alt: "New York Sci-Fi and Horror Film Festival — Official Selection 2025" },
      { src: "/laurels/NYCHorror2025.png", alt: "New York City Horror Film Festival — Official Selection 2025" },
    ],
    credits: [
      { role: "Directors", name: "Craig Helfer, Dylan Gaines" },
      { role: "Writers", name: "Craig Helfer, Dylan Gaines" },
      { role: "Producers", name: "Craig Helfer, Dylan Gaines" },
    ],
  },
  {
    slug: "hunter",
    title: "The Hunter",
    year: "2024",
    category: "Short Film",
    tagline: "An arrogant hunter heads into the woods for what he thinks is a typical day of sport. But things change when it turns out he is the one being hunted…",
    description: "An arrogant hunter heads into the woods for what he thinks is a typical day of sport. But things change when it turns out he is the one being hunted…",
    status: "festival",
    statusLabel: "Ongoing Festival Run",
    imdbUrl: "https://www.imdb.com/title/tt33665987/",
    poster: "/films/posters/hunter.jpg",
    stillImage: "/FilmScreengrabs/Hunter_still.png",
    stills: [
      "/films/stills/hunter/GrabbingSignStill.png",
      "/films/stills/hunter/GunPointedStillPNG.png",
      "/films/stills/hunter/KneelingScopedStillPNG.png",
      "/films/stills/hunter/KnifeOnChestStill.png",
      "/films/stills/hunter/ScaredLookingAroundCornerStill.png",
      "/films/stills/hunter/LayingDownProfileStill.png",
    ],
    laurels: [
      { src: "/laurels/ArizonaIntl.png", alt: "Arizona International Film Festival — Official Selection" },
      { src: "/laurels/BigApple2024.png", alt: "Big Apple Film Festival — Official Selection 2024" },
      { src: "/laurels/BigAppleWhiteLaurels-scaled.png", alt: "Big Apple Film Festival" },
      { src: "/laurels/NJ4thWallFilmFestivalLaurelsWhiteNoBackground.png", alt: "NJ 4th Wall Film Festival — Official Selection" },
      { src: "/laurels/ChicagoHorror2025.png", alt: "Chicago Horror Film Festival — Official Selection 2025" },
      { src: "/laurels/NYLiftOff2025.png", alt: "New York Lift-Off Film Festival — Official Selection 2025" },
    ],
    credits: [
      { role: "Director", name: "Dylan Gaines" },
      { role: "Writer", name: "Dylan Gaines" },
      { role: "Producers", name: "Dylan Gaines, George Wang, William O'Bryan" },
    ],
  },
  {
    slug: "accent",
    title: "Accent",
    year: "2026",
    category: "Short Film",
    tagline: "An international student confronts his fellow TAs after overhearing a pejorative comment — with disastrous consequences.",
    description: "Vaibhav is an international student and computer science TA who is in the process of changing his Indian accent to assimilate into American culture. When he overhears a pejorative comment made by his fellow TAs, he decides to confront them, to disastrous consequences.",
    status: "pre-production",
    statusLabel: "Pre-Production",
    imdbUrl: undefined,
    poster: "/films/posters/accent.png",
    stillImage: "/FilmScreengrabs/Hunter_still.png",
    stills: [],
    laurels: [],
    credits: [
      { role: "Director", name: "Varun Giridhar" },
      { role: "Writer", name: "Varun Giridhar" },
      { role: "Producers", name: "Varun Giridhar, George Wang" },
    ],
  },
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}
