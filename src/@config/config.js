import { theme } from "../styles/theme";

export const homepageConfig = {
  headerSection: {
    header: "Learn a new language with 1:1 online classes",
    paragraph: `<strong>Mandarin</strong>, <strong>Japanese</strong>, and <strong>Malay</strong> private classes at an affordable
    price for both adults and kids.`,
    btnText: "Register now",
    btnHref: "/register",
    img: "./assets/Hero_Image_Zoom_call.png",
  },
  coursesSection: {
    header: "Language courses we offer",
    paragraph:
      "We offer private language courses for both adults and kids. Our prices start at $25/1hr class.",
    courses: [
      {
        lang: "Mandarin",
        href: "/courses/mandarin",
        img: "Pic_MandarinCourseCARD.jpg",
      },
      {
        lang: "Japanese",
        href: "/courses/japanese",
        img: "Pic_Japanese_Course_CARD.jpg",
      },
      {
        lang: "Malay",
        href: "/courses/malay",
        img: "Pic_MalayCourseCARD.jpg",
      },
      {
        lang: "Kids Course",
        href: "/courses/kidscourse",
        img: "Pic_KidsCourseCARD.jpg",
      },
    ],
    bgColor: theme.color.bg,
  },
  classesSection: {
    header: "Personalized 1:1 online classes",
    classes: [
      {
        title: "Personalized learning materials",
        paragraph:
          "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress.",
        img: "Pic_Personalizedcurriculum.jpg",
      },
      {
        title: "Free flashcards and resources",
        paragraph:
          "After each lesson, teacher provide students with the lesson materials and free flashcards that encourage additional fun learning.",
        img: "Pic_Freeflashcardsandresources.jpg",
      },
      {
        title: "Practice language skills 1:1",
        paragraph:
          "Practice speaking, listening, reading, and writing all in a single lesson! Lesson topics can also be flexible to your interests.",
        img: "Pic_Practicelanguageskills1.jpg",
      },
    ],
  },
  testimonialsSection: {
    testimonials: [
      {
        name: "Trina",
        img: "Pic_Testimonial1Propic.png",
        flag: "🇨🇦",
        course: "Japanese Course",
        review:
          "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
      },
      {
        name: "Kyle",
        img: "Pic_Testimonial2Propic.png",
        flag: "🇬🇧",
        course: "Mandarin Course",
        review:
          "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
      },
      {
        name: "Thera",
        img: "Pic_Testimonial3Propic.png",
        flag: "🇮🇩",
        course: "Malay Course",
        review:
          "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
      },
      {
        name: "Joseph",
        img: "Pic_Testimonial4Propic.png",
        flag: "🇦🇪",
        course: "Japanese Course",
        review:
          "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
      },
    ],
  },
  faq: {
    questions: [
      {
        question: "Who are my teachers?",
        answer:
          "Teachers at Mingo Space come from a variety of educational backgrounds and have teaching experience. Our teachers are carefully chosen by our team to ensure high-quality instruction.",
      },
      {
        question: "What are my options for classes?",
        answer:
          "Mingo Space creates standardised lesson materials based on textbooks to optimise your learning process. On request, we can also provide personalised lessons.",
      },
      {
        question: "What materials are used in MingoSpace lessons?",
        answer:
          "We teach you through live one-on-one lessons using Zoom or Skype as a platform.",
      },
      {
        question: "Do I need to pay for the lesson materials?",
        answer:
          "No, we provide all materials, so there is no need for you to spend money on them.",
      },
      {
        question: "How do I pay for lessons?",
        answer:
          "We accept payment through PayPal and bank transfer (for Malaysia and Singapore only). For payment made through PayPal will have extra 3% surcharge.  ",
      },
      {
        question: "How do I reschedule or cancel my class?",
        answer:
          "You can reschedule or cancel your classes through sending an email to info@mingospace.com or whatsapp us at +6010-2510962. However cancellation or rescheduling must be made at least one day before the scheduled class.",
      },
      {
        question: "If I cancel my class, will I be refunded?",
        answer:
          "If you cancel or reschedule within 24 hours of your scheduled class, you will not receive a refund.",
      },
      {
        question: "What if my teacher doesn’t show up to class?",
        answer:
          "We are confident that such incidents will not occur because our teachers were chosen as responsible candidates by the team. However, if this occurs, please contact us via email at info@mingospace.com or via WhatsApp at +6010-2510962 to discuss and reschedule the lesson at no additional cost.",
      },
      {
        question: "What if I prefer a different teacher?",
        answer:
          "We assign teachers to our students at Mingo Space based on availability and the needs of the students. However, if you have a preferred teacher or wish for a permanent teacher, please contact us so that we can make arrangements.",
      },
    ],
  },
  registerBannerData: {
    image: "/assets/Pic_ReadytoRegisterCard.jpg",
    header: "Ready to register?",
    content: "No payment required now.",
    isDark: true,
    isCenter: true,
    isFull: false,
    isLeft: true,
  },
};

export const coursesPageConfig = {
  header: "All Courses",
  paragraph:
    "We offer 1:1 online language courses for Mandarin, Japanese, or Malay. Our teachers create personalized lesson plans to meet your needs and interests with dynamic classes to practice your speaking, listening, writing, and reading skills. ",
  courses: [
    {
      lang: "Mandarin",
      href: "/courses/mandarin",
      img: "Pic_MandarinCourseCARD.jpg",
    },
    {
      lang: "Japanese",
      href: "/courses/japanese",
      img: "Pic_Japanese_Course_CARD.jpg",
    },
    {
      lang: "Malay",
      href: "/courses/malay",
      img: "Pic_MalayCourseCARD.jpg",
    },
    {
      lang: "Kids Course",
      href: "/courses/kidscourse",
      img: "Pic_KidsCourseCARD.jpg",
    },
  ],
};

export const coursesSubpagesConfig = {
  mandarin: {
    header: {
      header: "Mandarin Course",
      paragraph: `Learn Mandarin with personalized lesson plans from experienced and native-speaking teachers.`,
      features: ["Private Zoom Classes", "$25 / 1hr class"],
      btnText: "Sign up",
      btnHref: "/register",
      img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    },
    about: {
      img: "/assets/Pic_MandarinZoomClassImage.jpg",
      title1: "Flexible lesson plans tailored to your needs",
      paragraph1:
        "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
      title2: "Interactive 1:1 Zoom classes with a native teacher",
      paragraph2:
        "Practice speaking, listening, reading, and writing with a native-speaking Mandarin teacher. All of our teachers are also experienced with teaching Mandarin.",
      bgColor: true,
    },
    levels: {
      header: "What you’ll learn in our Mandarin classes",
      description:
        "This curriculum overview is just for guidance and can be adapted to meet your language needs and interests. After you register, we will also conduct a free 15-minute assessment to get to know you and determine your language level before your first class.",
      items: [
        {
          level: "Beginner",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: false },
            { text: "Talk about the past and future", isActive: false },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 2 exam.</span>`,
        },
        {
          level: "Intermediate",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 4 exam.</span>`,
        },
        {
          level: "Advanced",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: true },
            { text: "Speak Chinese fluently", isActive: true },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 6 exam.</span>`,
        },
      ],
    },
    testimonials: [
      {
        name: "Rina",
        img: "Pic_Testimonial1Propic_Mandarin.png",
        flag: "🇯🇵",
        course: "Mandarin Course",
        review:
          "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
      },
      {
        name: "Roman",
        img: "Pic_Testimonial2Propic_Mandarin.png",
        flag: "🇺🇸",
        course: "Mandarin Course",
        review:
          "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
      },
      {
        name: "Carl",
        img: "Pic_Testimonial3Propic-Mandarin.png",
        flag: "🇩🇪",
        course: "Malay Course",
        review:
          "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
      },
      {
        name: "Ananya",
        img: "Pic_Testimonial4Propic_Mandarin.png",
        flag: "🇸🇬",
        course: "Japanese Course",
        review:
          "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
      },
    ],
    teachers: {
      header: "Meet our Mandarin teachers",
      description:
        "All of our teachers highly vetted and have years of experience teaching Mandarin to English speakers. After you register, we will email you to choose from the teachers that best match your availabilities.",
      items: [
        {
          img: "/assets/Pic_TeacherPropic(Zhen).jpg",
          name: "Zhen Huang",
          about:
            "I have been teaching Mandarin to both adults and kids for the past 5 years. I believe that learning Mandarin should be ...See More",
          langs: ["Mandarin", "English", "Malay"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Melanie).jpg",
          name: "Melanie Chou",
          about:
            "As a professional Mandarin teacher by day, I carry forward the same patient approach with my private lesson students ...See More",
          langs: ["Mandarin", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Lissa).jpg",
          name: "Lissa Zheng",
          about:
            "I’m a certified HSK Mandarin teacher and have been tutoring and teaching Mandarin for 1.5 years. Learning should be ...See More",
          langs: ["Mandarin", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Dylan).jpg",
          name: "Dylan Fan",
          about:
            "I specialize in teaching Mandarin to English speakers and majored in Chinese Language at the University of Waterloo. Now ...See More",
          langs: ["Mandarin", "English"],
        },
      ],
    },
    buyCourses: {
      image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
      header: "Private Mandarin class pricing",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
      isDark: false,
      isCenter: false,
      isFull: false,
    },
    registerBanner: {
      image: "/assets/Pic_ReadytoRegisterCard.jpg",
      header: "Ready to register?",
      content: "No payment required now.",
      isDark: true,
      isCenter: true,
      isFull: false,
    },
  },
  japanese: {
    header: {
      header: "Japanese Course",
      paragraph: `Learn Japanese with personalized lesson plans from experienced and native-speaking teachers.`,
      features: ["Private Zoom Classes", "$25 / 1hr class"],
      btnText: "Sign up",
      btnHref: "/register",
      img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    },
    about: {
      img: "/assets/Pic_MandarinZoomClassImage.jpg",
      title1: "Flexible lesson plans tailored to your needs",
      paragraph1:
        "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
      title2: "Interactive 1:1 Zoom classes with a native teacher",
      paragraph2:
        "Practice speaking, listening, reading, and writing with a native-speaking Japanese teacher. All of our teachers are also experienced with teaching Japanese.",
      bgColor: true,
    },
    levels: {
      header: "What you’ll learn in our Japanese classes",
      description:
        "This curriculum overview is just for guidance and can be adapted to meet your language needs and interests. After you register, we will also conduct a free 15-minute assessment to get to know you and determine your language level before your first class.",
      items: [
        {
          level: "Beginner",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: false },
            { text: "Talk about the past and future", isActive: false },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 2 exam.</span>`,
        },
        {
          level: "Intermediate",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 4 exam.</span>`,
        },
        {
          level: "Advanced",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: true },
            { text: "Speak Chinese fluently", isActive: true },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 6 exam.</span>`,
        },
      ],
    },
    testimonials: [
      {
        name: "Rina",
        img: "Pic_Testimonial1Propic_Mandarin.png",
        flag: "🇯🇵",
        course: "Mandarin Course",
        review:
          "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
      },
      {
        name: "Roman",
        img: "Pic_Testimonial2Propic_Mandarin.png",
        flag: "🇺🇸",
        course: "Mandarin Course",
        review:
          "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
      },
      {
        name: "Carl",
        img: "Pic_Testimonial3Propic-Mandarin.png",
        flag: "🇩🇪",
        course: "Malay Course",
        review:
          "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
      },
      {
        name: "Ananya",
        img: "Pic_Testimonial4Propic_Mandarin.png",
        flag: "🇸🇬",
        course: "Japanese Course",
        review:
          "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
      },
    ],
    teachers: {
      header: "Meet our Japanese teachers",
      description:
        "All of our teachers highly vetted and have years of experience teaching Japanese to English speakers. After you register, we will email you to choose from the teachers that best match your availabilities.",
      items: [
        {
          img: "/assets/Pic_TeacherPropic(Zhen).jpg",
          name: "Zhen Huang",
          about:
            "I have been teaching Japanese to both adults and kids for the past 5 years. I believe that learning Japanese should be ...See More",
          langs: ["Japanese", "English", "Malay"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Melanie).jpg",
          name: "Melanie Chou",
          about:
            "As a professional Japanese teacher by day, I carry forward the same patient approach with my private lesson students ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Lissa).jpg",
          name: "Lissa Zheng",
          about:
            "I’m a certified HSK Japanese teacher and have been tutoring and teaching Japanese for 1.5 years. Learning should be ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Dylan).jpg",
          name: "Dylan Fan",
          about:
            "I specialize in teaching Japanese to English speakers and majored in Chinese Language at the University of Waterloo. Now ...See More",
          langs: ["Japanese", "English"],
        },
      ],
    },
    buyCourses: {
      image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
      header: "Private Japanese class pricing",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
      isDark: false,
      isCenter: false,
      isFull: false,
    },
    registerBanner: {
      image: "/assets/Pic_ReadytoRegisterCard.jpg",
      header: "Ready to register?",
      content: "No payment required now.",
      isDark: true,
      isCenter: true,
      isFull: false,
    },
  },
  malay: {
    header: {
      header: "Malay Course",
      paragraph: `Learn Malay with personalized lesson plans from experienced and native-speaking teachers.`,
      features: ["Private Zoom Classes", "$25 / 1hr class"],
      btnText: "Sign up",
      btnHref: "/register",
      img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    },
    about: {
      img: "/assets/Pic_MandarinZoomClassImage.jpg",
      title1: "Flexible lesson plans tailored to your needs",
      paragraph1:
        "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
      title2: "Interactive 1:1 Zoom classes with a native teacher",
      paragraph2:
        "Practice speaking, listening, reading, and writing with a native-speaking Malay teacher. All of our teachers are also experienced with teaching Malay.",
      bgColor: true,
    },
    levels: {
      header: "What you’ll learn in our Malay classes",
      description:
        "This curriculum overview is just for guidance and can be adapted to meet your language needs and interests. After you register, we will also conduct a free 15-minute assessment to get to know you and determine your language level before your first class.",
      items: [
        {
          level: "Beginner",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: false },
            { text: "Talk about the past and future", isActive: false },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 2 exam.</span>`,
        },
        {
          level: "Intermediate",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 4 exam.</span>`,
        },
        {
          level: "Advanced",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: true },
            { text: "Speak Chinese fluently", isActive: true },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 6 exam.</span>`,
        },
      ],
    },
    testimonials: [
      {
        name: "Rina",
        img: "Pic_Testimonial1Propic_Mandarin.png",
        flag: "🇯🇵",
        course: "Mandarin Course",
        review:
          "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
      },
      {
        name: "Roman",
        img: "Pic_Testimonial2Propic_Mandarin.png",
        flag: "🇺🇸",
        course: "Mandarin Course",
        review:
          "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
      },
      {
        name: "Carl",
        img: "Pic_Testimonial3Propic-Mandarin.png",
        flag: "🇩🇪",
        course: "Malay Course",
        review:
          "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
      },
      {
        name: "Ananya",
        img: "Pic_Testimonial4Propic_Mandarin.png",
        flag: "🇸🇬",
        course: "Malay Course",
        review:
          "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
      },
    ],
    teachers: {
      header: "Meet our Malay teachers",
      description:
        "All of our teachers highly vetted and have years of experience teaching Malay to English speakers. After you register, we will email you to choose from the teachers that best match your availabilities.",
      items: [
        {
          img: "/assets/Pic_TeacherPropic(Zhen).jpg",
          name: "Zhen Huang",
          about:
            "I have been teaching Malay to both adults and kids for the past 5 years. I believe that learning Malay should be ...See More",
          langs: ["Japanese", "English", "Malay"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Melanie).jpg",
          name: "Melanie Chou",
          about:
            "As a professional Malay teacher by day, I carry forward the same patient approach with my private lesson students ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Lissa).jpg",
          name: "Lissa Zheng",
          about:
            "I’m a certified HSK Malay teacher and have been tutoring and teaching Malay for 1.5 years. Learning should be ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Dylan).jpg",
          name: "Dylan Fan",
          about:
            "I specialize in teaching Malay to English speakers and majored in Chinese Language at the University of Waterloo. Now ...See More",
          langs: ["Japanese", "English"],
        },
      ],
    },
    buyCourses: {
      image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
      header: "Private Malay class pricing",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
      isDark: false,
      isCenter: false,
      isFull: false,
    },
    registerBanner: {
      image: "/assets/Pic_ReadytoRegisterCard.jpg",
      header: "Ready to register?",
      content: "No payment required now.",
      isDark: true,
      isCenter: true,
      isFull: false,
    },
  },
  kids: {
    header: {
      header: "Kids languages Course",
      paragraph: `Learn with personalized lesson plans from experienced and native-speaking teachers.`,
      features: ["Private Zoom Classes", "$25 / 1hr class"],
      btnText: "Sign up",
      btnHref: "/register",
      img: "/assets/Pic_Hero_Image_for_Mandarin_Course.jpg",
    },
    about: {
      img: "/assets/Pic_MandarinZoomClassImage.jpg",
      title1: "Flexible lesson plans tailored to your needs",
      paragraph1:
        "We tailor our learning materials, such as PowerPoint and flashcards, are tailored to your learning needs and progress. ",
      title2: "Interactive 1:1 Zoom classes with a native teacher",
      paragraph2:
        "Practice speaking, listening, reading, and writing with a native-speaking teacher. All of our teachers are also experienced with teaching kids.",
      bgColor: true,
    },
    levels: {
      header: "What you’ll learn in our kids classes",
      description:
        "This curriculum overview is just for guidance and can be adapted to meet your language needs and interests. After you register, we will also conduct a free 15-minute assessment to get to know you and determine your language level before your first class.",
      items: [
        {
          level: "Beginner",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: false },
            { text: "Talk about the past and future", isActive: false },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 2 exam.</span>`,
        },
        {
          level: "Intermediate",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: false },
            { text: "Speak Chinese fluently", isActive: false },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 4 exam.</span>`,
        },
        {
          level: "Advanced",
          points: [
            { text: "Self-introductions and greetings", isActive: true },
            { text: "Discuss daily topics", isActive: true },
            { text: "Read and comprehend passages", isActive: true },
            { text: "Talk about the past and future", isActive: true },
            { text: "Chinese idioms and culture", isActive: true },
            { text: "Speak Chinese fluently", isActive: true },
          ],
          footer: `After the beginner curriculum, you may choose to take the <span> HSK 6 exam.</span>`,
        },
      ],
    },
    testimonials: [
      {
        name: "Rina",
        img: "Pic_Testimonial1Propic_Mandarin.png",
        flag: "🇯🇵",
        course: "Mandarin Course",
        review:
          "“During the lessons, we do conversation practice and exam preparation. I wasn’t very good at talking before, but now I can speak a lot better and confidently.”",
      },
      {
        name: "Roman",
        img: "Pic_Testimonial2Propic_Mandarin.png",
        flag: "🇺🇸",
        course: "Mandarin Course",
        review:
          "“Practicing with Rachael is phenomenal. Her lessons are very well put together, and she is always ready to focus on areas that I need extra practice.”",
      },
      {
        name: "Carl",
        img: "Pic_Testimonial3Propic-Mandarin.png",
        flag: "🇩🇪",
        course: "Malay Course",
        review:
          "“The lessons are a lot of fun! I really enjoy taking first stabs at having a conversation. It’s a lot of fun and loooking forward to our next lesson!”",
      },
      {
        name: "Ananya",
        img: "Pic_Testimonial4Propic_Mandarin.png",
        flag: "🇸🇬",
        course: "Malay Course",
        review:
          "“I’ve had a number of lessons with Zhen. He always prepares interesting convo topics beforehand so that I can practice my speaking.”",
      },
    ],
    teachers: {
      header: "Meet our kids teachers",
      description:
        "All of our teachers highly vetted and have years of experience teaching to English speakers. After you register, we will email you to choose from the teachers that best match your availabilities.",
      items: [
        {
          img: "/assets/Pic_TeacherPropic(Zhen).jpg",
          name: "Zhen Huang",
          about:
            "I have been teaching to both adults and kids for the past 5 years. I believe that learning any language should be ...See More",
          langs: ["Japanese", "English", "Malay"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Melanie).jpg",
          name: "Melanie Chou",
          about:
            "As a professional kids teacher by day, I carry forward the same patient approach with my private lesson students ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Lissa).jpg",
          name: "Lissa Zheng",
          about:
            "I’m a certified kids teacher and have been tutoring and teaching kids for 1.5 years. Learning should be ...See More",
          langs: ["Japanese", "English"],
        },
        {
          img: "/assets/Pic_TeacherPropic(Dylan).jpg",
          name: "Dylan Fan",
          about:
            "I specialize in teaching to English speakers and majored in Chinese Language at the University of Waterloo. Now ...See More",
          langs: ["Japanese", "English"],
        },
      ],
    },
    buyCourses: {
      image: "/assets/Pic_PrivateMandarinClassPricing.jpg",
      header: "Private kids class pricing",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
      isDark: false,
      isCenter: false,
      isFull: false,
    },
    registerBanner: {
      image: "/assets/Pic_ReadytoRegisterCard.jpg",
      header: "Ready to register?",
      content: "No payment required now.",
      isDark: true,
      isCenter: true,
      isFull: false,
    },
  },
};

export const pricingPageConfig = {
  headerSection: {
    header: "Private Lesson Pricing",
    paragraph: `Our 1:1 Zoom class pricing requires a minimum purchase of at least 5 classes, but <strong>no purchase is needed when signing up.</strong> `,
  },
  pricingCards: [
    {
      header: "Mandarin",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
    },
    {
      header: "Malay",
      subheader: "$25",
      content: `USD / <strong>1hr</strong> class`,
    },
    {
      header: "Japanese",
      subheader: "$35",
      content: `USD / <strong>1hr</strong> class`,
    },
  ],
  registerBanner: {
    image: "/assets/kidsclas.png",
    header: "Looking for kid-friendly classes?",
    subheader: "$15",
    content: `USD / <strong>30min</strong> class <br/>
      Mandarin, Malay, or Japanese`,
    isDark: true,
    isCenter: true,
    isFull: true,
  },
  policy: [
    {
      icon: "/assets/icons/icon_payment_method.png",
      title: "Payment Method",
      content:
        "We accept PayPal, debit, credit card (includes 3% surcharge). Bank transfer within Malaysia and Singapore is also accepted and excludes surcharge.",
    },
    {
      icon: "/assets/icons/icon_reservation.png",
      title: "Reservations",
      content:
        "Classes will be scheduled based on student and teacher availabilities. We have teachers that can accomodate for all time zones, 7 days a week.",
    },
    {
      icon: "/assets/icons/icon_refunds.png",
      title: "Cancellations & Refunds",
      content:
        "Please contact us at least one day before your lesson if you need to cancel. If cancelled less than 24 hours before, lesson fees will not be refunded.",
    },
  ],
};

export const registrationPageConfig = {
  header: "Course Registration",
  paragraph: `This is a confidential registration form, and we will get back to you within 24 hours.`,
};

export const footerConfig = {
  header: "MingoSpace",
  links: [
    {
      title: "Courses",
      links: [
        { text: "Mandarin", href: "/courses/mandarin" },
        { text: "Malay", href: "/courses/malay" },
        { text: "Japanese", href: "/courses/japanese" },
        { text: "Kids course", href: "/courses/kidscourse" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Sign up", href: "/register" },
        { text: "Pricing", href: "/pricing" },
        { text: "Contact", href: "/contact" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "About us", href: "/about" },
        { text: "Our teachers", href: "/" },
        { text: "FAQ", href: "/contact" },
      ],
    },
  ],
};
