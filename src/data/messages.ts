export interface HowYouAreCard {
  id: string;
  number: string;
  title: string;
  description: string;
  revealedMessage: string;
  iconName: string;
  colorAccent: string;
}

export const messagesData = {
  websiteTitle: "A Little World of Shravani ❤️",
  creator: "Viraj Mahagavakar",
  recipient: "Shravani",
  
  home: {
    badge: "A special little world, made just for you...",
    mainHeading: "HAPPY BIRTHDAY, SHRAVANI!",
    subtitle: "Some people make the world beautiful just by being in it. Today, this little world belongs to you.",
    signatureDisplay: "With love, Viraj Mahagavakar ❤️",
    btnEnter: "Enter Your Little World ❤️",
    btnSurpriseIntro: "A Little Surprise Awaits ✨",
    introHeading: "Today is not just another day...",
    introText: "Today is the day someone incredibly special came into this world. So I thought, why not create a little corner of the internet just to celebrate you?",
    introCards: [
      {
        id: "soul",
        title: "A Beautiful Soul",
        desc: "Kind, radiant, and deeply genuine in everything you do.",
        icon: "Sparkles",
        highlight: "Unmatched warmth",
      },
      {
        id: "smile",
        title: "A Smile Worth Remembering",
        desc: "The kind of smile that lights up any room effortlessly.",
        icon: "Heart",
        highlight: "Pure magic",
      },
      {
        id: "moments",
        title: "Someone Who Makes Ordinary Moments Special",
        desc: "Because life is just a whole lot brighter with you around.",
        icon: "Stars",
        highlight: "Always inspiring",
      },
    ],
    closingMessage: "Hey Shravani, this little world is yours... I could have simply wished you a happy birthday, but some people deserve more than just a message. So, I made you a little something. Take your time, explore every corner, and don't forget to smile.",
    footerText: "Made with love, just for Shravani. — Viraj Mahagavakar",
  },

  eyes: {
    title: "Look Through My Eyes",
    heroHeading: "If only you could see yourself through my eyes...",
    subtitle: "Maybe then you would understand why your smile is so special.",
    bottomHeading: "And this is just a glimpse of how beautiful you are.",
    bottomText: "Every photograph tells a story, but none of them can capture everything that makes you special.",
    btnNext: "Discover What Makes You Special →",
  },

  howYouAre: {
    title: "How You Are",
    heroHeading: "Do you know what makes you different?",
    subtitle: "It's not just how you look. It's everything that makes you YOU.",
    cards: [
      {
        id: "smile",
        number: "01",
        title: "Your Smile",
        description: "A smile that can make even an ordinary day feel a little brighter.",
        revealedMessage: "Whenever you smile, the world pauses for a second. It is genuinely comforting, infectious, and impossible to forget.",
        iconName: "Smile",
        colorAccent: "from-pink-500/20 to-rose-400/20",
      },
      {
        id: "kindness",
        number: "02",
        title: "Your Kindness",
        description: "The little things you do often mean more than you realise.",
        revealedMessage: "Your empathy, your gentle care, and the quiet thoughtfulness you carry are rarer than diamonds.",
        iconName: "HeartHandshake",
        colorAccent: "from-purple-500/20 to-lavender-400/20",
      },
      {
        id: "personality",
        number: "03",
        title: "Your Personality",
        description: "There is something genuinely special about the way you are.",
        revealedMessage: "A perfect blend of wit, grace, silliness, and maturity. You are uniquely and unapologetically authentic.",
        iconName: "Sparkles",
        colorAccent: "from-amber-500/20 to-pink-400/20",
      },
      {
        id: "energy",
        number: "04",
        title: "Your Energy",
        description: "You bring your own kind of magic wherever you go.",
        revealedMessage: "Just being around you lifts the mood. Your vibe brings comfort, positivity, and a quiet sense of peace.",
        iconName: "Zap",
        colorAccent: "from-rose-500/20 to-orange-400/20",
      },
      {
        id: "dreams",
        number: "05",
        title: "Your Dreams",
        description: "I hope you achieve everything your heart quietly wishes for.",
        revealedMessage: "Seeing you passionate about what you love is the most inspiring thing. Keep chasing them—you are meant for greatness.",
        iconName: "Compass",
        colorAccent: "from-blue-500/20 to-purple-400/20",
      },
      {
        id: "simply-you",
        number: "06",
        title: "Simply YOU",
        description: "No comparison, no explanation. Just you, being wonderfully you.",
        revealedMessage: "You don't have to fit into any mold or meet any expectations. The person you are right now is already deeply cherished.",
        iconName: "Crown",
        colorAccent: "from-pink-600/20 to-purple-600/20",
      },
    ] as HowYouAreCard[],
    bottomHeading: "Never change the beautiful person you are.",
    bottomText: "Keep smiling, keep growing, keep dreaming and keep being yourself.",
    btnNext: "Meet My Motivation →",
  },

  motivation: {
    title: "Wanna Meet My Motivation?",
    heroHeading: "Wanna meet my motivation?",
    subtitle: "Sometimes, without even knowing it, someone becomes a reason behind your smile and inspiration.",
    quote: [
      "Sometimes motivation doesn't come from books, speeches or success stories.",
      "Sometimes, it comes from a person.",
      "Someone whose presence makes you want to become a better version of yourself.",
      "Someone whose smile can make a difficult day feel easier.",
      "And sometimes, that person is simply YOU."
    ],
    timeline: [
      {
        stage: "STAGE 1",
        title: "THE INSPIRATION",
        description: "Some people inspire you simply by being who they are.",
        icon: "Lightbulb",
      },
      {
        stage: "STAGE 2",
        title: "THE MOTIVATION",
        description: "Your determination and the way you carry yourself are worth appreciating.",
        icon: "Target",
      },
      {
        stage: "STAGE 3",
        title: "THE BEST WISHES",
        description: "I hope life gives you every beautiful thing you deserve.",
        icon: "Award",
      },
    ],
    finalMessage: "Keep chasing your dreams. The world has so many beautiful things waiting for you.",
    btnNext: "One More Thing... ❤️",
  },

  howBeautiful: {
    title: "How Beautiful Are You?",
    heroHeading: "How beautiful are you?",
    subtitle: "Warning: This page might take forever to answer.",
    calculateBtn: "Calculate Your Beauty ✨",
    calculatingText: "Measuring smile radiance & heart brilliance...",
    errorTitle: "ERROR 404: Beauty cannot be calculated!",
    errorSubtitle: "Some things are simply beyond numbers and algorithms.",
    complimentBtn: "Tell Me Something Sweet 💌",
    compliments: [
      "Your smile deserves its own appreciation day.",
      "You are beautiful in ways photographs cannot capture.",
      "Never underestimate the magic you bring into someone's life.",
      "Your personality makes you even more special.",
      "You deserve all the happiness in the world.",
      "The universe took its sweetest time while making you.",
      "Your laughter is genuinely my favorite sound.",
      "You make simplicity look extraordinary.",
      "There is a gentle grace in everything you do.",
    ],
    finalHeading: "One thing I hope you never forget...",
    finalMessage: "YOU ARE SPECIAL. Not because someone says it, but because there is only one YOU in this entire world.",
    btnNext: "Let's Look Back At Some Memories →",
  },

  letter: {
    title: "A Letter For You",
    heroHeading: "Just a little something from my heart...",
    subtitle: "Written with affection, sealed with care, just for you on your special day.",
    btnOpen: "Open Your Letter 💌",
    date: "A Very Special Day",
    salutation: "Hey Shravani,",
    paragraphs: [
      "First of all, a very, very Happy Birthday to you, Shravani! ❤️",
      "I wanted to do something a little different this time, something you could keep and revisit whenever you feel like it. So, I created this little corner of the internet just for you. It's a small effort from my side, but I genuinely hope it brings a smile to your face.",
      "I hope your birthday is filled with laughter, happiness, unexpected surprises and all the little things that make you smile. May you achieve every dream you have, find happiness in the smallest moments and always have a reason to smile. And most importantly, never forget how special you are.",
      "You know, the first time I saw you genuinely unexcited about your own birthday, I felt something was missing. It made me feel like you were slowly losing that spark that makes you YOU. I don't know whether I'll always be around or not, but one thing I genuinely hope is that you never lose that beautiful personality of yours. Keep being that cheerful, lively and full-of-life person. That's what makes you different.",
      "You once mentioned your pre-birthday celebration, and somehow, I felt you were a little irritated and disappointed with how things turned out. Maybe your friends didn't plan things the way you expected, or maybe things just didn't go as you imagined. I don't know the complete picture, but I just wanted to do something, even if it makes you feel one percent happier.",
      "I know I've made mistakes, and honestly, some of them aren't easy to forgive. But the fact that you're still talking to me despite knowing the reality of everything means something to me, and I genuinely respect that.",
      "I'm also sorry for the uncomfortable situations and the insults you've had to face because of me, especially when you had nothing to do with any of it. You didn't deserve that. Despite everything, you've stayed strong, and I really admire that about you.",
      "I don't know what the future holds, but I genuinely believe that from here, you'll become an even better, sweeter, stronger and more beautiful version of yourself. And I hope life gives you all the happiness you deserve.",
      "I know these little efforts won't erase the scratch I've left on your heart, and I'm not expecting them to. I just want you to know that I'll always try to be a decent, genuine and good person around you. Whenever you need a helping hand, someone to listen, or simply a friend, you can call or text me. I'll be there whenever I can.",
      "And honestly, if being your friend is all I get to be, that's perfectly okay with me. I respect that.",
      "But enough of this emotional, sadu stuff now! 😂",
      "It's YOUR DAY! So leave all the worries, disappointments and overthinking aside for a while.",
      "Keep shining, keep smiling, keep being YOU.",
      "Once again, a very, very, VERY HAPPY BIRTHDAY, SHRAVANI! ❤️",
      "This was just a small try from my side to make your day a little more special. I hope it made you smile, even if just for a moment.",
      "Happy Birthday! Keep that spark alive. ❤️",
    ],
    signoff: "With lots of wishes and a little extra affection,",
    signature: "Viraj Mahagavakar ❤️",
    btnNext: "Ready For The Final Surprise? 🎁",
  },

  finalSurprise: {
    title: "One Last Surprise",
    heading: "Wait... there's one last thing!",
    subtitle: "Because a birthday celebration for you deserves an unforgettable finale.",
    btnOpen: "Unwrap Your Surprise 🎁",
    birthdayWishes: [
      "HAPPY BIRTHDAY, SHRAVANI! 🎉",
      "May your life always be filled with beautiful moments, endless laughter, unforgettable memories and dreams that come true.",
      "Keep smiling. Keep shining. Keep being the wonderful person you are.",
      "With love and the warmest wishes,"
    ],
    signature: "VIRAJ MAHAGAVAKAR ❤️",
    btnReplay: "Replay The Magic ✨",
    footerText: "Made with love. Created especially for you. ❤️",
  },

  secretMessage: {
    title: "A Little Whisper for Shravani ✨",
    text: "Just in case nobody told you today, you are someone worth celebrating. ❤️",
    subtext: "You found the hidden secret heart! Viraj wanted to remind you how cherished you are.",
  },
};
