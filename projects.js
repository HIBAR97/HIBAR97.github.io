const PROJECTS = {
  publications: [
    {
      id: "khc2026-imu",
      kind: "publication",
      name: "IMU-Based Real-Time Body-Part Classification for Adaptive On-Body Haptic Feedback",
      cover: null,
      status: "Oral Presentation",
      date: "August 12, 2026 · Seoul, Korea",
      venueLine: "4th Korea Haptics Conference — Session O1, “On-Body Haptic Interfaces and Tactile Information Delivery”",
      authors: ["Junghyeon Kim", "Mohammad Shadman Hashem", "Mudassir Ibrahim Awan", "Seokhee Jeon"],
      affiliation: "Kyung Hee University",
      role: "First author, oral presentation",
      note: "Listed as paper O1.6 in the conference's officially published program. The program lists the title, author order, and affiliation shown here; it does not publish an abstract, so none is reproduced here.",
      screenshotFiles: []
    }

    // ------------------------------------------------------------------
    // TEMPLATE — copy this block, fill it in, and remove the /* */ to add
    // a publication. Every field is optional except id / kind / name:
    // any field left out simply doesn't render.
    //
    // {
    //   id: "unique-slug",              // used internally; must be unique
    //   kind: "publication",            // required, selects the publication layout
    //   name: "Full paper title",
    //   cover: "assets/pub-xxx.png",    // card background; null shows a 📄 placeholder
    //   status: "Under review",         // shown as a pill: Published / Accepted / Under review / Draft ...
    //   date: "March 2027 · Seoul, Korea",
    //   venueLine: "Conference or journal name, session, volume",
    //   authors: ["Junghyeon Kim", "Co Author"],   // keep the real author order
    //   affiliation: "Haptics & VR Lab, Kyung Hee University",
    //   role: "First author, oral presentation",
    //   doi: { label: "10.xxxx/xxxxx", href: "https://doi.org/10.xxxx/xxxxx" },
    //   abstract: "Paste the real abstract here.",
    //   keyPoints: [                    // the contributions, one per line
    //     "What the system or method is",
    //     "What was measured or characterized",
    //     "What the study design tests"
    //   ],
    //   method: "How it was built and evaluated — apparatus, conditions, participants.",
    //   findings: [                     // only once you actually have results
    //     "Result 1",
    //     "Result 2"
    //   ],
    //   learned: [                      // what you took away from doing it
    //     "A technique or constraint you now understand",
    //     "Something that surprised you",
    //     "What you would do differently next time"
    //   ],
    //   keywords: ["Haptics", "Virtual Reality"],
    //   note: "Any honest caveat — draft status, preliminary data, etc.",
    //   screenshotFiles: [              // figures and photos, shown in a scrolling row
    //     "assets/pub-xxx-fig1.png",
    //     "assets/pub-xxx-fig2.png"
    //   ]
    // }
    // ------------------------------------------------------------------
    //
    // Ready to re-enable once the SMA weight-perception paper is submitted.
    // Its figures are already in assets/ (pub-sma-cover, pub-sma-fig-*).
    /*
    {
      id: "sma-weight-vr",
      kind: "publication",
      name: "Modulating Weight Perception in Virtual Reality using SMA Actuators: The Interplay of Haptic Feedback and Visual Density",
      cover: "assets/pub-sma-cover.png",
      status: "In preparation",
      date: "2026",
      venueLine: "",
      authors: ["Junghyeon Kim"],
      affiliation: "Haptics & VR Lab, Kyung Hee University",
      role: "First author",
      abstract: "A major factor that reduces immersion in Virtual Reality (VR) is the absence of physically perceivable weight when users lift or manipulate virtual objects. We present a lightweight, ungrounded wearable haptic interface based on shape memory alloy (SMA) actuators that applies directional force cues to the wrist and fingers. Using this device, we investigate whether resistance (gravity-direction force) and assistance (anti-gravity force) can intentionally modulate perceived object weight. We further examine how these physical cues interact with visual density cues (e.g., metal vs. wood appearance) that shape users' weight expectations.",
      keyPoints: [
        "Wrist/finger-worn SMA actuator that applies brief directional cues — resistance (gravity-direction) to feel heavier, assistance (anti-gravity) to feel lighter — timed to grasp and lift onset",
        "Characterized SMA coil force–power tradeoffs across coil diameter and coil count to pick a configuration that hits the target cue force within a wearable power budget",
        "Measured wrist range of motion (flexion/extension ~70 deg, ulnar/radial deviation ~40/30 deg) to place strap anchors and route tension without restricting natural movement",
        "3x2 within-subject factorial design (haptic cue: off/resistance/assistance x visual density: metal-like/wood-like)"
      ],
      keywords: ["Virtual Reality", "Haptics", "Shape Memory Alloy (SMA)", "Weight Perception", "Multimodal Interaction", "Pseudo-haptics"],
      screenshotFiles: ["assets/pub-sma-fig-prototype.png", "assets/pub-sma-fig-wristrom.png", "assets/pub-sma-fig-forcepower.png"]
    }
    */
  ],
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
      id: "wwdc2026",
      name: "Feel the Place (WWDC 2026)",
      cover: "assets/proj-wwdc2026.png",
      created: "February 2026",
      tags: ["SwiftUI", "Core ML", "Vision", "Core Haptics", "PhotosUI", "PyTorch", "Core ML Tools", "Swift 6"],
      status: "Prototype",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Built for the WWDC Swift Student Challenge — a single-screen app that lets you feel a place through your fingertip.",
        "Explores whether a photograph of a place can be conveyed as touch rather than only as an image."
      ],
      summary: "Pick a photo of a place from your library and the app classifies the scene on-device with a bundled Core ML model, then plays a continuous haptic texture matched to that scene. Drag a finger across the photo and the vibration changes with your speed and position, so a coastline and a city street feel physically different under the same fingertip.",
      keyFunction: [
        "On-device scene classification into six place categories — buildings, forest, glacier, mountain, sea, street — with no network access",
        "Six hand-tuned haptic personalities, each with its own base intensity, sharpness, attack/release envelope, and speed-response curve",
        "Continuous haptic playback modulated in real time by finger speed and touch position rather than discrete taps",
        "Procedural spatial patterns per scene — a grid for buildings, crack-and-seam noise for glacier, travelling waves for sea, ridge bands for mountain",
        "Speed threshold so a stationary finger produces no feedback, matching how real texture perception works",
        "Graceful degradation when the device has no haptic engine or the model fails to load"
      ],
      techStack: "SwiftUI, PhotosUI, Core ML, Vision, Core Haptics, UIKit — plus PyTorch, torchvision, and Core ML Tools for model conversion",
      part: [
        "Full app — concept, model selection, and implementation",
        "Converted a ResNet-18 scene classifier from PyTorch to Core ML with Core ML Tools, folding ImageNet normalization into the image input",
        "Compared MobileNetV2, EfficientNet-B0, and ResNet-18 before settling on the scene-classification model",
        "Designed and hand-tuned the haptic profile for each of the six classes",
        "Built the Core Haptics playback layer and the speed/position modulation"
      ],
      learned: [
        "Streaming dynamic parameters into one long-lived Core Haptics player is far smoother than restarting a pattern every gesture frame",
        "Normalizing finger speed by the screen diagonal keeps the same stroke feeling identical on iPhone and iPad",
        "Perceptually, materials need different response curves — soft ones should swell slowly, brittle ones should snap",
        "Running Vision off the main thread while keeping Swift 6 strict concurrency happy takes deliberate actor handling",
        "Converting a PyTorch model to Core ML is mostly about getting the preprocessing contract exactly right"
      ],
      screenshotFiles: ["assets/shot-wwdc2026-1.png"]
    },
    {
      id: "surfacehaptic",
      name: "Surface Haptic",
      cover: "assets/proj-surfacehaptic.png",
      created: "January 2026",
      tags: ["Safari Web Extension", "Swift", "AppKit", "JavaScript", "Canvas", "Manifest V3"],
      status: "Prototype",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Asks whether images on a web page can be given a physical surface you can feel.",
        "Extends haptic texture research from a controlled app into the open web."
      ],
      summary: "A macOS Safari extension that makes images on any web page feel textured. A content script analyzes each image's pixels to derive brightness, contrast, edge density, and roughness, then maps the cursor's position over the image to that texture. Hovering, pressing, or scrolling over an image sends the texture data to a native handler, which drives the Mac trackpad's haptic engine.",
      keyFunction: [
        "Per-image texture analysis via an offscreen canvas — average brightness, local contrast, edge density, and derived roughness",
        "Per-region profiles: each image is sampled on a 2×2 to 4×4 grid, so different parts of one image feel different",
        "Trackpad Force Touch pressure and scroll velocity both modulate the feedback",
        "Scroll-driven haptics whose repeat rate tracks scroll speed, from roughly 5 Hz up to 50 Hz",
        "Idle-time pre-analysis queue with per-element caching, so images are ready before the cursor reaches them",
        "Throttling plus a change-threshold gate to keep the native message rate manageable",
        "Automatic pickup of images added to the page later via a MutationObserver"
      ],
      techStack: "Swift, AppKit, SafariServices, WebKit, NSHapticFeedbackManager — JavaScript with Manifest V3, Canvas 2D, Pointer Events, MutationObserver",
      part: [
        "Whole project — extension, native handler, and host app",
        "Wrote the image texture-analysis pipeline in JavaScript",
        "Built the native messaging bridge from the extension through to the trackpad haptic engine",
        "Designed the mapping from texture and pressure onto discrete macOS feedback patterns"
      ],
      learned: [
        "macOS exposes only a few discrete trackpad feedback patterns, so continuous texture has to be approximated by choosing patterns and varying their timing",
        "Analyzing pixels on every pointer move is far too slow — caching and idle-time pre-analysis are what make it usable",
        "Cross-origin images taint the canvas, which quietly limits pixel analysis on most real-world pages",
        "Safari's native messaging path behaves differently from other browsers and needed careful debugging",
        "Throttling alone is not enough; gating on how much the signal actually changed matters more"
      ],
      screenshotFiles: []
    },
    {
      id: "arknob",
      name: "AR Knob",
      cover: "assets/proj-arknob.png",
      created: "December 2025",
      tags: ["SwiftUI", "Core Haptics", "Core Bluetooth", "Core Motion", "WatchKit", "Combine"],
      status: "Research prototype",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "A research tool for studying how physical controls can be simulated purely through haptic feedback.",
        "Also measures how much latency is added when the haptic is played on a paired Apple Watch instead of the phone."
      ],
      summary: "An iPhone app with a companion Apple Watch app that recreates physical control affordances — a detented rotary knob, a slider, and a button — using programmable haptic feedback. Each control can play its haptic on the phone or on the watch over Bluetooth LE, and the app measures the round-trip latency of both paths, aggregates it per control, and exports the samples as CSV.",
      keyFunction: [
        "Detented knob driven by touch or by gyroscope, with configurable detent size and hysteresis",
        "Slider and button with independent haptic settings, each switchable between phone and watch playback",
        "Round-trip latency measurement over BLE, aggregated per control and exportable to CSV",
        "Ten procedurally synthesized surface textures — asphalt, gravel, sand, water, metal, wood, fabric, rubber, glass, smooth",
        "A custom waveform generator: pick sine, square, triangle, or sawtooth, set amplitude and frequency, and feel it through the Taptic Engine",
        "Full watch haptic editor covering preset type, intensity, sharpness, duration, envelope, pattern, and repeat count",
        "Watch app streaming its own gyroscope angle back to the phone to drive the knob"
      ],
      techStack: "SwiftUI, Core Haptics, Core Bluetooth, Core Motion, WatchKit, Combine, UIKit",
      part: [
        "Whole project — iOS app, watchOS app, and the BLE protocol between them",
        "Designed compact binary BLE packets to keep transport latency low",
        "Built the latency measurement scheme and the CSV export",
        "Wrote the procedural texture and waveform haptic synthesizers"
      ],
      learned: [
        "Measuring cross-device latency without synchronized clocks is possible if the receiver only echoes an id and the sender times the round trip itself",
        "Acknowledging just before playback, rather than after, keeps playback duration out of the transport measurement",
        "watchOS has no Core Haptics, so intensity and sharpness have to be approximated by choosing among a handful of preset types",
        "Compact binary packets beat JSON when every millisecond of transport latency is part of the measurement",
        "Layering two closely spaced transients produces a perceptually stronger click than a single stock impact feedback"
      ],
      screenshotFiles: []
    },
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
