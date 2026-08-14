const PROJECTS = {
  team: [
    {
      id: "ilsang",
      name: "Ilsang (일상)",
      cover: "assets/proj-ilsang.png",
      created: "June 13, 2024",
      tags: ["iOS", "SwiftUI", "AWS", "CoreData", "UserDefault", "Swift Concurrency", "Cocoapod", "Alamofire"],
      status: "Live",
      url: { label: "apps.apple.com", href: "https://apps.apple.com/kr/app/일상-도전으로-하루를-특별하게/id6504427618" },
      appBlurb: {
        title: "Ilsang — Make Every Day Special Through Challenges",
        body: "‘Ilsang’ gives you a variety of quests that turn your repetitive daily routine into something new. New quests are added regularly, and completing them builds up your experience points. Share your progress with others and show off how much you're leveling up your life!"
      },
      topic: ["Offers a variety of quests, giving users a way to turn their repetitive daily routine into something fresh."],
      summary: "Provides users with a variety of quests and rewards experience points, delivering a new kind of everyday experience.",
      keyFunction: [
        "Server integration via AWS API",
        "Login and photo-optimization algorithm",
        "Optimization using Swift Concurrency",
        "View and animation development"
      ],
      techStack: "Swift Concurrency, Alamofire, SwiftUI, UIKit",
      team: ["2 iOS developers", "2 backend developers", "1 UI designer", "1 PM/PO"],
      part: ["UI/UX development", "AWS integration via Concurrency and Alamofire", "View and animation development"],
      learned: [
        "Studied integrating an external DB using Concurrency and Alamofire",
        "Judging business viability and shaping a business model around it",
        "Fixing usability issues and bugs found through QA"
      ],
      screenshots: 3
    },
    {
      id: "matq",
      name: "MatQ (맛Q)",
      cover: "assets/proj-matq.png",
      created: "July 11, 2023",
      tags: ["iOS", "SwiftUI", "Swift Concurrency", "AWS", "SPM"],
      status: "Discontinued",
      url: { label: "Private", href: null },
      appBlurb: {
        title: "MatQ — Earn Discount Coupons Through Quests",
        body: "‘MatQ’ is a game-like platform where you can earn discount coupons by completing fun quests posted by shop owners nationwide. Currently the service operates only in the Seoul area, with expansion planned."
      },
      topic: ["A game-like platform where users complete quests posted by shop owners nationwide to earn discount coupons."],
      summary: "Lets shop owners create quests, and rewards the customers who complete them with discount coupons.",
      keyFunction: [
        "Integration via AWS and Swift Concurrency",
        "Camera capture",
        "Kakao / Google / Apple login"
      ],
      techStack: "Swift Concurrency, Alamofire, Camera, Haptics",
      team: ["2 iOS developers", "2 Android developers", "1 Flutter developer", "1 backend developer", "1 UI designer", "3 PM/PO"],
      part: ["UI/UX development", "AWS integration via Concurrency and Alamofire", "DB schema design", "Google sign-in/sign-out", "Coupon view development"],
      learned: [
        "Studied integrating an external DB with Concurrency and Alamofire",
        "Judging business viability and shaping a business model",
        "Fixing usability issues and bugs via QA",
        "Took part in large-scale team development"
      ],
      screenshots: 3
    },
    {
      id: "postkit",
      name: "PostKit",
      cover: "assets/proj-postkit.png",
      created: "September 4, 2023",
      tags: ["iOS", "SwiftUI", "CoreData", "UserDefault", "SPM", "Cocoapod"],
      status: "Live",
      url: { label: "apps.apple.com", href: "https://apps.apple.com/kr/app/포스트킷-postkit/id6470146461" },
      appBlurb: {
        title: "PostKit",
        body: "The latest GPT-4 model, free. Focus on running your café — leave the marketing copy to PostKit. Pick keywords tailored to your café and let AI write a custom Instagram post for you, complete with curated, high-visibility hashtags. Every generated post is saved so you can pull it up anytime."
      },
      topic: [
        "A solution for small café owners who want to promote on social media but don't know what to write or lack ideas.",
        "Uses a tuned ChatGPT model to generate promotional posts in a few clicks."
      ],
      summary: "Auto-generates everyday posts or promotional copy for a new or signature menu item from a few keywords. Users can add custom keywords, and the app suggests hashtags. The generated post is saved on-device, sortable via a “like” feature, editable/deletable, and copyable straight to the clipboard in a ready-to-post format.",
      keyFunction: [
        "ChatGPT-based post generation",
        "Hashtag generation",
        "On-device database",
        "Coin-based business model"
      ],
      techStack: "CoreData, UserDefault",
      team: ["4 iOS developers", "2 UI designers"],
      part: [
        "Concept planning",
        "UI/UX planning and development",
        "CoreData implementation",
        "Loading view",
        "History feature",
        "Business model design",
        "GPT prompt optimization"
      ],
      learned: [
        "Designed an on-device DB schema while implementing CoreData",
        "Weighed usage patterns, positioning, and GPT API cost when shaping the business model",
        "Found that GPT prompt optimization alone can meaningfully improve output quality",
        "Improved features and design based on user feedback",
        "Applied a design system"
      ],
      screenshots: 5
    },
    {
      id: "dots",
      name: "Dots",
      cover: "assets/proj-dots.png",
      created: "June 19 – August 3, 2023",
      tags: ["iOS", "SwiftUI", "CoreData", "UserDefault"],
      status: "Discontinued",
      url: { label: "apps.apple.com", href: "https://apps.apple.com/kr/app/dots/id6455836458" },
      appBlurb: {
        title: "Dots",
        body: "Keep a record of your strengths, and use them to build and manage your personal network."
      },
      topic: [
        "A solution that helps people with social anxiety build metacognitive awareness and organize their contacts.",
        "Encourages a positive self-view and reinforces metacognition for people who feel hesitant to reach out after a bad experience."
      ],
      summary: "Users log their own strengths/weaknesses and their perception of others' strengths/weaknesses in a simple journal format. Logged strengths appear animated on the home screen. If a user wants to work on a weakness, the app can surface contacts who are strong in that area — building metacognition and easing anxiety around reaching out.",
      keyFunction: [
        "Journal-style logging of strengths and weaknesses",
        "Import contacts",
        "Search contacts based on logged traits, plus call/text/email/SNS integration",
        "Visual, animated display of strengths",
        "CoreData integration"
      ],
      techStack: "Contacts, CoreData, UserDefault",
      team: ["5 iOS developers", "1 UI designer"],
      part: ["Concept planning", "UI/UX planning and development", "Contacts import and storage"],
      learned: [
        "Built UI/UX based on Apple's Human Interface Guidelines",
        "Got the chance to design and use custom views",
        "Set up an environment that properly follows the MVVM architecture",
        "Gained experience shipping to the App Store and managing versions"
      ],
      screenshots: 3
    },
    {
      id: "discoverme",
      name: "DiscoverMe",
      cover: "assets/proj-discoverme.png",
      created: "April 10 – May 19, 2023",
      tags: ["iOS", "SwiftUI", "CoreData", "UserDefault"],
      status: "Not in service",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "A solution to help people with social anxiety build metacognitive awareness.",
        "Instills a positive mindset and strengthens metacognition."
      ],
      summary: "Guides users to build confidence and metacognition by clearing missions tailored to their strengths. Completing and logging around 100 missions changes the home-screen background, visually showing their growing confidence.",
      keyFunction: [
        "Create a character and discover strengths/weaknesses through ~100 missions",
        "Log missions (photo + text, text, or drawing)",
        "CoreData integration"
      ],
      techStack: "Canvas, Photos, CoreData, UserDefault",
      team: ["4 iOS developers", "2 UI designers"],
      part: ["Concept planning", "UI/UX planning and development", "CTO — set up and managed the dev environment", "Canvas drawing feature, notifications"],
      learned: [
        "As CTO, learned leadership by managing the project and guiding teammates",
        "Learned that referencing Apple's HIG helps when building UI/UX",
        "Learned to define and solve problems from the user's point of view",
        "Became comfortable developing directly from official documentation"
      ],
      screenshots: 0
    },
    {
      id: "whoyak",
      name: "who?Yak (who?약)",
      cover: "assets/proj-whoyak.png",
      created: "June 3, 2021 – November 1, 2022",
      tags: ["Android Studio", "JAVA", "MySQL"],
      status: "Not in service",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "A project aimed at helping people who struggle with smartphones.",
        "A medication-management platform for elderly or visually impaired users who aren't comfortable with smartphones.",
        "Family or acquaintances act as “managers” for the person being cared for."
      ],
      summary: "The person being cared for can photograph and save prescriptions, turning what's written on them into structured records. They can also save hospital appointments to a calendar and get reminders. On the manager's side, caregivers can view and edit the cared-for person's prescriptions, appointments, and schedule at any time — giving both sides more peace of mind.",
      keyFunction: [
        "Prescription scanning: photograph or select a prescription photo and scan the medicine name; if it matches the DB, show the medicine's info",
        "Medicine search: search by name and show info if it matches the DB",
        "Calendar: shows the phone's saved schedule plus hospital appointments; reminders for tomorrow/next week/next month; automatic reminders at medication times",
        "Voice support and gestures for visually impaired users: voice-guides the on-screen layout; gestures to move/select items (e.g. three-finger swipe = move, two-finger tap = select)"
      ],
      techStack: "JAVA, MySQL, Android Studio",
      team: ["1 Android developer", "2 frontend developers", "1 backend developer"],
      part: ["Overall team lead and concept planning", "Android, frontend, and backend development", "DB, OCR, camera, voice command, and gesture features"],
      learned: [
        "A chance to reconsider what features are actually needed",
        "Learned that a large number of visually impaired users find smartphones hard to use",
        "Studied building features using various libraries and external APIs",
        "Studied implementing features via screen overlay/override techniques"
      ],
      screenshots: 1
    },
    {
      id: "dumchoe",
      name: "DumChoeMyeot? (덤최몇?)",
      cover: "assets/proj-dumchoe.png",
      created: "March 10 – December 27, 2021",
      tags: ["JAVA", "MySQL", "Android Studio"],
      status: "Not in service",
      url: { label: null, href: null },
      topic: [
        "A project started to get comfortable with Android Studio and ship a real app (goal: 100% of planned requirements).",
        "A systematic workout-management platform built around personal InBody records.",
        "Helps manage gym workouts and home training."
      ],
      summary: "With COVID-19 making people wary of contact with others, this app lets users log workout volume at home and visualize changes to self-motivate. Users can log gym and home-training workouts in detail. For home training, they can pick an exercise and watch a related video; saving InBody data and progress photos lets them track visual change over time.",
      keyFunction: [
        "Gym workout log: choose weight, reps, and exercise type",
        "Home-training log: play helpful YouTube videos, log the body part trained",
        "InBody-change graph",
        "Daily progress photo to track body changes"
      ],
      techStack: "JAVA, MySQL, Android Studio",
      team: ["3 co-developers across Android, frontend, and backend"],
      part: ["Team lead and concept planning", "Android, frontend, backend, and DB development", "Overall UI, graph visualization, DB integration"],
      learned: [
        "Learned visualization techniques in Android Studio",
        "Learned how to modify server data from an Android app",
        "Learned that it pays to add a core feature the market doesn't already have"
      ],
      screenshots: 0
    },
    {
      id: "healthkeeper",
      name: "Health Keeper",
      cover: "assets/proj-healthkeeper.png",
      created: "July 6 – December 21, 2020",
      tags: ["JAVA", "MySQL"],
      status: "Not in service",
      url: { label: null, href: null },
      topic: [
        "Started to get comfortable with JAVA coding.",
        "A management platform built around personal workout logs, handling fitness goals and schedules.",
        "Won the Grand Prize in the school's Java competition."
      ],
      summary: "With COVID-19, many people wanted to start working out on- or offline but found it hard to get going. This app lets users set workout goals and schedules, and provides alarms and progress graphs to help with motivation.",
      keyFunction: [
        "Today's Goal: set today's workout and diet targets; calculates calories, protein, calcium, and other nutrients",
        "Workout schedule: plan by exercise and body part for last/current/next month",
        "Progress graphs: visualizes monthly/weekly completion rate and week-over-week growth",
        "Workout alarm: rings at the set day/time and blocks other app features until the workout time ends"
      ],
      techStack: "JAVA, MySQL",
      team: ["3 co-developers across frontend and backend"],
      part: ["Concept planning and frontend development", "Built the home screen, login screen, and diet-logging screen"],
      learned: [
        "Learned visualization techniques using JAVA",
        "Learned how to use MySQL from JAVA code",
        "Learned how to design a usable DB structure with MySQL"
      ],
      screenshots: 0
    }
  ],
  personal: [
    {
      id: "dalttajo",
      name: "Dalttajo",
      cover: "assets/proj-dalttajo.png",
      created: "June 18, 2024",
      tags: ["SwiftUI", "RealityKit", "visionOS", "ARKit"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: ["Using ARKit and RealityKit to build ways for users to interact with virtual content."],
      summary: "Implements ways for users to interact with virtual content using ARKit and RealityKit.",
      keyFunction: [
        "Place an object in space and trigger its animation",
        "Test interaction methods such as touch and hand tracking"
      ],
      techStack: "SwiftUI, UIKit, RealityKit, ARKit, SceneKit",
      learned: [
        "Studied various possible interactions",
        "How anchors work, and hand tracking",
        "Understood how spatial apps work and where they're useful"
      ],
      screenshots: 0
    },
    {
      id: "visionos",
      name: "visionOS",
      cover: "assets/proj-visionos.png",
      created: "November 22, 2023",
      tags: ["SwiftUI", "RealityKit", "visionOS"],
      url: { label: null, href: null },
      topic: ["Building an app that runs on visionOS and checking its performance."],
      summary: "Uses Reality Composer Pro and ARKit to build a visionOS project and check its performance.",
      keyFunction: [
        "Place an object in space and trigger its animation",
        "Check how brightness and window/design change based on position in the virtual space"
      ],
      techStack: "visionOS, SwiftUI, RealityKit, Reality Composer Pro, SceneKit",
      learned: [
        "How visionOS works",
        "How to use Reality Composer Pro",
        "How anchors work",
        "Understood how spatial apps work and where they're useful"
      ],
      screenshots: 0
    },
    {
      id: "realitykit",
      name: "RealityKit",
      cover: "assets/proj-realitykit.jpeg",
      created: "June 15, 2023",
      tags: ["SwiftUI", "RealityKit"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: ["Using RealityKit to test AR/VR features on an iOS device."],
      summary: "Used RealityKit, Reality Composer, SceneKit, and similar frameworks to try out visionOS-style tools; used the camera and LiDAR scanner.",
      keyFunction: ["Float numbers in virtual space and implement a button feature"],
      techStack: "SwiftUI, RealityKit, Reality Composer, SceneKit",
      learned: ["Adding objects to a virtual space", "Designing virtual objects"],
      screenshots: 0
    },
    {
      id: "instagramclone",
      name: "Instagram Clone Coding",
      cover: "assets/proj-instagramclone.png",
      created: "January 8 – January 24, 2022",
      tags: ["Android Studio", "Kotlin", "Firebase"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Built to get comfortable with Kotlin — the goal was to learn the language's syntax and build a database.",
        "Recreates Instagram's core features."
      ],
      summary: "A Kotlin + Firebase Instagram clone built to learn how to set up a database and use authentication and storage, and to practice UI development in Kotlin.",
      keyFunction: [
        "Sign in / sign up via Google, Facebook, Twitter, or email",
        "Search: list photos stored in the database",
        "Account: view a user's own posts",
        "Following / followers between users"
      ],
      techStack: "Kotlin, Firebase",
      part: ["Frontend and backend development", "Firebase (DB) development"],
      learned: [
        "Learned visualization techniques in Kotlin",
        "Learned how to use Firebase from Kotlin code",
        "Learned how to design a usable DB structure with Firebase"
      ],
      screenshots: 0
    },
    {
      id: "assistantui",
      name: "Assistant UI Analysis",
      cover: null,
      created: "January 4, 2022",
      tags: ["Android Studio", "JAVA"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Analyzing the UI of assistive apps available on the app stores — how they're structured, how they help, and how they're activated.",
        "Rebuilding what was analyzed."
      ],
      summary: "Analyzed and rebuilt the UI of the most-downloaded assistive apps on the market.",
      keyFunction: [
        "Be My Eyes: uses the camera to read out visible text",
        "Voice Eye: accesses documents like medication info or civic forms and reads them aloud"
      ],
      techStack: "Java",
      part: ["Frontend and backend refactoring"],
      learned: [
        "Very few apps actually support assistive use",
        "Most either have overly simple UI or no meaningful difference from a regular app's UI"
      ],
      screenshots: 0
    }
  ]
};
