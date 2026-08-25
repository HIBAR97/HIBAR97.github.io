const PROJECTS = {
  publications: [
    {
      id: "khc2026-imu",
      impact: "First-author oral presentation, accepted paper",
      kind: "publication",
      name: "IMU-Based Real-Time Body-Part Classification for Adaptive On-Body Haptic Feedback",
      cover: null,
      status: "Oral Presentation",
      date: "August 12, 2026 · Seoul, Korea",
      venueLine: "4th Korea Haptics Conference, Session O1, “On-Body Haptic Interfaces and Tactile Information Delivery”",
      authors: ["Junghyeon Kim", "Mohammad Shadman Hashem", "Mudassir Ibrahim Awan", "Seokhee Jeon"],
      affiliation: "Kyung Hee University",
      role: "First author, oral presentation",
      note: "Listed as paper O1.6 in the conference's officially published program. The program lists the title, author order, and affiliation shown here; it does not publish an abstract, so none is reproduced here.",
      screenshotFiles: [],
      ko: {
        impact: "제1저자 구두 발표, 논문 채택",
        status: "구두 발표",
        date: "2026년 8월 12일 · 대한민국 서울",
        venueLine: "제4회 한국 햅틱스 학술대회, 세션 O1, “신체 착용형 햅틱 인터페이스와 촉각 정보 전달”",
        affiliation: "경희대학교",
        role: "제1저자, 구두 발표",
        note: "학술대회 공식 프로그램에 논문 O1.6으로 게재되어 있습니다. 프로그램에는 여기 표기된 제목, 저자 순서, 소속만 게재되어 있고 초록은 공개되지 않아 별도로 싣지 않았습니다."
      }
    }

    // ------------------------------------------------------------------
    // TEMPLATE: copy this block, fill it in, and remove the /* */ to add
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
    //   method: "How it was built and evaluated: apparatus, conditions, participants.",
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
    //   screenshotFiles: [              // figures and photos, shown in a scrolling row
    //     "assets/pub-xxx-fig1.png",
    //     "assets/pub-xxx-fig2.png"
    //   ],
    //   links: [                        // rendered as buttons at the bottom of the modal
    //     { label: "PDF",     href: "assets/pub-xxx.pdf" },
    //     { label: "IEEE",    href: "https://ieeexplore.ieee.org/document/..." },
    //     { label: "DOI",     href: "https://doi.org/10.xxxx/xxxxx" },
    //     { label: "BibTeX",  href: "assets/pub-xxx.bib" },
    //     { label: "Code",    href: "https://github.com/HIBAR97/..." },
    //     { label: "Video",   href: "https://youtu.be/..." }
    //   ],
    //   note: "Any honest caveat such as draft status, preliminary data, etc."
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
        "Wrist/finger-worn SMA actuator that applies brief directional cues, resistance (gravity-direction) to feel heavier and assistance (anti-gravity) to feel lighter, timed to grasp and lift onset",
        "Characterized SMA coil force to power tradeoffs across coil diameter and coil count to pick a configuration that hits the target cue force within a wearable power budget",
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
      impact: "Live on the App Store",
      name: "Ilsang (일상)",
      cover: "assets/proj-ilsang.png",
      created: "June 13, 2024",
      tags: ["iOS", "SwiftUI", "AWS", "CoreData", "UserDefault", "Swift Concurrency", "Cocoapod", "Alamofire"],
      status: "Live",
      url: { label: "apps.apple.com", href: "https://apps.apple.com/kr/app/일상-도전으로-하루를-특별하게/id6504427618" },
      appBlurb: {
        title: "Ilsang: Make Every Day Special Through Challenges",
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
      screenshots: 3,
      ko: {
        impact: "App Store 출시 중",
        status: "서비스 중",
        appBlurb: {
          title: "일상: 도전으로 하루를 특별하게",
          body: "‘일상’은 반복되는 일상을 새롭게 바꿔주는 다양한 퀘스트를 제공합니다. 새로운 퀘스트가 꾸준히 추가되고, 이를 완료하면 경험치가 쌓입니다. 진행 상황을 공유하며 내 삶이 얼마나 레벨업했는지 보여주세요!"
        },
        topic: ["반복되는 일상을 새롭게 만들어주는 다양한 퀘스트를 사용자에게 제공합니다."],
        summary: "사용자에게 다양한 퀘스트와 경험치 보상을 제공해 새로운 방식의 일상 경험을 선사합니다.",
        keyFunction: [
          "AWS API를 통한 서버 연동",
          "로그인 및 사진 최적화 알고리즘",
          "Swift Concurrency를 활용한 최적화",
          "뷰 및 애니메이션 개발"
        ],
        team: ["iOS 개발자 2명", "백엔드 개발자 2명", "UI 디자이너 1명", "PM/PO 1명"],
        part: ["UI/UX 개발", "Concurrency와 Alamofire를 통한 AWS 연동", "뷰 및 애니메이션 개발"],
        learned: [
          "Concurrency와 Alamofire를 활용한 외부 DB 연동 학습",
          "비즈니스 실현 가능성 판단 및 비즈니스 모델 설계",
          "QA를 통해 발견된 사용성 문제 및 버그 수정"
        ]
      }
    },
    {
      id: "postkit",
      impact: "Live on the App Store",
      name: "PostKit",
      cover: "assets/proj-postkit.png",
      created: "September 4, 2023",
      tags: ["iOS", "SwiftUI", "CoreData", "UserDefault", "SPM", "Cocoapod"],
      status: "Live",
      url: { label: "apps.apple.com", href: "https://apps.apple.com/kr/app/포스트킷-postkit/id6470146461" },
      appBlurb: {
        title: "PostKit",
        body: "The latest GPT-4 model, free. Focus on running your café and leave the marketing copy to PostKit. Pick keywords tailored to your café and let AI write a custom Instagram post for you, complete with curated, high-visibility hashtags. Every generated post is saved so you can pull it up anytime."
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
      screenshots: 5,
      ko: {
        impact: "App Store 출시 중",
        status: "서비스 중",
        appBlurb: {
          title: "포스트킷",
          body: "최신 GPT-4 모델을 무료로. 카페 운영에 집중하고 마케팅 문구는 포스트킷에 맡기세요. 우리 카페에 맞는 키워드를 고르면 AI가 눈에 띄는 해시태그까지 포함된 맞춤 인스타그램 게시물을 작성해줍니다. 생성된 게시물은 저장되어 언제든 다시 꺼내 볼 수 있습니다."
        },
        topic: [
          "SNS 홍보를 하고 싶지만 무엇을 써야 할지, 아이디어가 부족한 소규모 카페 사장님을 위한 솔루션.",
          "튜닝된 ChatGPT 모델로 몇 번의 클릭만으로 홍보 게시물을 생성합니다."
        ],
        summary: "몇 개의 키워드만으로 일상 게시물이나 신메뉴·시그니처 메뉴 홍보 문구를 자동 생성합니다. 사용자는 원하는 키워드를 추가할 수 있고, 앱이 해시태그를 제안합니다. 생성된 게시물은 기기에 저장되며 “좋아요” 기능으로 정렬하고, 수정·삭제하거나 바로 게시할 수 있는 형태로 클립보드에 복사할 수 있습니다.",
        keyFunction: [
          "ChatGPT 기반 게시물 생성",
          "해시태그 생성",
          "온디바이스 데이터베이스",
          "코인 기반 비즈니스 모델"
        ],
        team: ["iOS 개발자 4명", "UI 디자이너 2명"],
        part: [
          "컨셉 기획",
          "UI/UX 기획 및 개발",
          "CoreData 구현",
          "로딩 뷰",
          "히스토리 기능",
          "비즈니스 모델 설계",
          "GPT 프롬프트 최적화"
        ],
        learned: [
          "CoreData 구현과 함께 온디바이스 DB 스키마 설계",
          "사용 패턴, 포지셔닝, GPT API 비용을 고려한 비즈니스 모델 설계",
          "GPT 프롬프트 최적화만으로도 출력 품질이 유의미하게 개선됨을 확인",
          "사용자 피드백을 바탕으로 기능과 디자인 개선",
          "디자인 시스템 적용"
        ]
      }
    },
    {
      id: "matq",
      impact: "Launched and operated in the Seoul market before being discontinued",
      name: "MatQ (맛Q)",
      cover: "assets/proj-matq.png",
      created: "July 11, 2023",
      tags: ["iOS", "SwiftUI", "Swift Concurrency", "AWS", "SPM"],
      status: "Discontinued",
      url: { label: "Private", href: null },
      appBlurb: {
        title: "MatQ: Earn Discount Coupons Through Quests",
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
      screenshots: 3,
      ko: {
        impact: "서울 지역에서 출시 및 운영 후 서비스 종료",
        status: "서비스 종료",
        url: { label: "비공개" },
        appBlurb: {
          title: "맛Q: 퀘스트로 할인 쿠폰 받기",
          body: "‘맛Q’는 전국 매장 사장님들이 등록한 재미있는 퀘스트를 완료하면 할인 쿠폰을 받을 수 있는 게임형 플랫폼입니다. 현재는 서울 지역에서만 운영 중이며, 확대를 계획하고 있습니다."
        },
        topic: ["전국 매장 사장님이 등록한 퀘스트를 사용자가 완료하면 할인 쿠폰을 받는 게임형 플랫폼."],
        summary: "매장 사장님이 퀘스트를 등록하면 이를 완료한 고객에게 할인 쿠폰을 보상으로 제공합니다.",
        keyFunction: [
          "AWS 및 Swift Concurrency 연동",
          "카메라 촬영",
          "카카오 / 구글 / 애플 로그인"
        ],
        team: ["iOS 개발자 2명", "Android 개발자 2명", "Flutter 개발자 1명", "백엔드 개발자 1명", "UI 디자이너 1명", "PM/PO 3명"],
        part: ["UI/UX 개발", "Concurrency와 Alamofire를 통한 AWS 연동", "DB 스키마 설계", "구글 로그인/로그아웃", "쿠폰 뷰 개발"],
        learned: [
          "Concurrency와 Alamofire를 활용한 외부 DB 연동 학습",
          "비즈니스 실현 가능성 판단 및 비즈니스 모델 설계",
          "QA를 통한 사용성 문제 및 버그 수정",
          "대규모 팀 개발 경험"
        ]
      }
    },
    {
      id: "dots",
      impact: "Shipped to the App Store",
      name: "Dots",
      cover: "assets/proj-dots.png",
      created: "June 19 to August 3, 2023",
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
      summary: "Users log their own strengths/weaknesses and their perception of others' strengths/weaknesses in a simple journal format. Logged strengths appear animated on the home screen. If a user wants to work on a weakness, the app can surface contacts who are strong in that area, building metacognition and easing anxiety around reaching out.",
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
      screenshots: 3,
      ko: {
        impact: "App Store 출시",
        status: "서비스 종료",
        appBlurb: {
          title: "Dots",
          body: "나의 강점을 기록하고, 이를 바탕으로 인맥을 만들고 관리하세요."
        },
        topic: [
          "사회적 불안이 있는 사람들이 메타인지를 높이고 인맥을 정리할 수 있도록 돕는 솔루션.",
          "나쁜 경험 이후 다가가기를 망설이는 사람들에게 긍정적 자기 인식과 메타인지 강화를 유도합니다."
        ],
        summary: "사용자가 자신과 타인의 강점·약점을 간단한 저널 형태로 기록합니다. 기록된 강점은 홈 화면에 애니메이션으로 표시됩니다. 특정 약점을 보완하고 싶을 때 앱이 그 분야에 강한 지인을 찾아주어 메타인지를 키우고 다가가기에 대한 불안을 줄여줍니다.",
        keyFunction: [
          "강점·약점 저널 기록",
          "연락처 가져오기",
          "기록된 특성 기반 연락처 검색, 전화/문자/이메일/SNS 연동",
          "강점의 시각적 애니메이션 표시",
          "CoreData 연동"
        ],
        team: ["iOS 개발자 5명", "UI 디자이너 1명"],
        part: ["컨셉 기획", "UI/UX 기획 및 개발", "연락처 가져오기 및 저장"],
        learned: [
          "Apple Human Interface Guidelines 기반 UI/UX 구축",
          "커스텀 뷰를 직접 설계하고 사용해본 경험",
          "MVVM 아키텍처를 제대로 따르는 환경 구축",
          "App Store 출시 및 버전 관리 경험"
        ]
      }
    },
    {
      id: "discoverme",
      name: "DiscoverMe",
      cover: "assets/proj-discoverme.png",
      created: "April 10 to May 19, 2023",
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
      part: ["Concept planning", "UI/UX planning and development", "CTO, set up and managed the dev environment", "Canvas drawing feature, notifications"],
      learned: [
        "As CTO, learned leadership by managing the project and guiding teammates",
        "Learned that referencing Apple's HIG helps when building UI/UX",
        "Learned to define and solve problems from the user's point of view",
        "Became comfortable developing directly from official documentation"
      ],
      screenshots: 0,
      ko: {
        status: "서비스 종료",
        topic: [
          "사회적 불안이 있는 사람들의 메타인지를 키우기 위한 솔루션.",
          "긍정적 마인드셋을 심어주고 메타인지를 강화합니다."
        ],
        summary: "사용자의 강점에 맞춘 미션을 완료하도록 안내해 자신감과 메타인지를 키웁니다. 약 100개의 미션을 완료하고 기록하면 홈 화면 배경이 바뀌어 성장한 자신감을 시각적으로 보여줍니다.",
        keyFunction: [
          "캐릭터 생성 및 약 100개 미션을 통한 강점·약점 발견",
          "미션 기록 (사진+텍스트, 텍스트, 또는 그림)",
          "CoreData 연동"
        ],
        team: ["iOS 개발자 4명", "UI 디자이너 2명"],
        part: ["컨셉 기획", "UI/UX 기획 및 개발", "CTO로서 개발 환경 구축 및 관리", "캔버스 그리기 기능, 알림"],
        learned: [
          "CTO로서 프로젝트 관리와 팀원 코칭을 통한 리더십 학습",
          "Apple HIG 참고가 UI/UX 구축에 도움이 됨을 학습",
          "사용자 관점에서 문제를 정의하고 해결하는 법 학습",
          "공식 문서를 보고 바로 개발하는 데 익숙해짐"
        ]
      }
    },
    {
      id: "whoyak",
      name: "who?Yak (who?약)",
      cover: "assets/proj-whoyak.png",
      created: "June 3, 2021 to November 1, 2022",
      tags: ["Android Studio", "JAVA", "MySQL"],
      status: "Not in service",
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "A project aimed at helping people who struggle with smartphones.",
        "A medication-management platform for elderly or visually impaired users who aren't comfortable with smartphones.",
        "Family or acquaintances act as “managers” for the person being cared for."
      ],
      summary: "The person being cared for can photograph and save prescriptions, turning what's written on them into structured records. They can also save hospital appointments to a calendar and get reminders. On the manager's side, caregivers can view and edit the cared-for person's prescriptions, appointments, and schedule at any time, giving both sides more peace of mind.",
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
      screenshots: 1,
      ko: {
        status: "서비스 종료",
        topic: [
          "스마트폰 사용이 어려운 사람들을 돕기 위한 프로젝트.",
          "스마트폰에 익숙하지 않은 고령자나 시각장애인을 위한 복약 관리 플랫폼.",
          "가족이나 지인이 돌봄 대상자의 “관리자” 역할을 합니다."
        ],
        summary: "돌봄 대상자는 처방전을 촬영해 저장하면 그 내용이 구조화된 기록으로 변환됩니다. 병원 예약도 캘린더에 저장하고 알림을 받을 수 있습니다. 관리자는 언제든 돌봄 대상자의 처방전, 예약, 일정을 조회하고 수정할 수 있어 양쪽 모두 더 안심할 수 있습니다.",
        keyFunction: [
          "처방전 스캔: 처방전을 촬영하거나 사진을 선택해 약 이름을 스캔하고, DB와 일치하면 약 정보를 표시",
          "약 검색: 이름으로 검색해 DB와 일치하면 정보 표시",
          "캘린더: 휴대폰에 저장된 일정과 병원 예약을 함께 표시, 내일·다음 주·다음 달 알림, 복약 시간 자동 알림",
          "시각장애인을 위한 음성 지원 및 제스처: 화면 레이아웃을 음성으로 안내, 세 손가락 스와이프로 이동·두 손가락 탭으로 선택 등 제스처 지원"
        ],
        team: ["Android 개발자 1명", "프론트엔드 개발자 2명", "백엔드 개발자 1명"],
        part: ["팀 전체 리드 및 컨셉 기획", "Android, 프론트엔드, 백엔드 개발", "DB, OCR, 카메라, 음성 명령, 제스처 기능"],
        learned: [
          "실제로 필요한 기능이 무엇인지 다시 생각해보는 계기",
          "많은 시각장애인이 스마트폰 사용에 어려움을 겪는다는 사실을 학습",
          "다양한 라이브러리와 외부 API를 활용한 기능 구현 학습",
          "화면 오버레이·오버라이드 기법을 통한 기능 구현 학습"
        ]
      }
    },
    {
      id: "dumchoe",
      name: "DumChoeMyeot? (덤최몇?)",
      cover: "assets/proj-dumchoe.png",
      created: "March 10 to December 27, 2021",
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
      screenshots: 0,
      ko: {
        status: "서비스 종료",
        topic: [
          "Android Studio에 익숙해지고 실제 앱을 출시하기 위해 시작한 프로젝트 (목표: 계획한 요구사항 100% 구현).",
          "개인 인바디 기록을 중심으로 한 체계적인 운동 관리 플랫폼.",
          "헬스장 운동과 홈트레이닝 관리를 돕습니다."
        ],
        summary: "코로나19로 대면 접촉이 꺼려지던 시기, 이 앱은 집에서 운동량을 기록하고 변화를 시각화해 스스로 동기부여할 수 있게 합니다. 헬스장 운동과 홈트레이닝을 상세히 기록할 수 있고, 홈트레이닝은 운동을 선택하면 관련 영상을 볼 수 있으며, 인바디 데이터와 진행 사진을 저장해 시간에 따른 신체 변화를 추적할 수 있습니다.",
        keyFunction: [
          "헬스장 운동 기록: 중량, 횟수, 운동 종류 선택",
          "홈트레이닝 기록: 관련 유튜브 영상 재생, 운동 부위 기록",
          "인바디 변화 그래프",
          "일별 진행 사진으로 신체 변화 추적"
        ],
        team: ["Android, 프론트엔드, 백엔드를 함께한 개발자 3명"],
        part: ["팀 리드 및 컨셉 기획", "Android, 프론트엔드, 백엔드, DB 개발", "전체 UI, 그래프 시각화, DB 연동"],
        learned: [
          "Android Studio에서의 시각화 기법 학습",
          "Android 앱에서 서버 데이터를 수정하는 방법 학습",
          "시장에 없는 핵심 기능을 추가하는 것의 가치를 학습"
        ]
      }
    },
    {
      id: "healthkeeper",
      impact: "Grand Prize, in-house Java competition",
      name: "Health Keeper",
      cover: "assets/proj-healthkeeper.png",
      created: "July 6 to December 21, 2020",
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
      screenshots: 0,
      ko: {
        impact: "사내 Java 경진대회 대상",
        status: "서비스 종료",
        topic: [
          "JAVA 코딩에 익숙해지기 위해 시작.",
          "개인 운동 기록을 중심으로 운동 목표와 일정을 관리하는 플랫폼.",
          "교내 Java 경진대회에서 대상을 수상."
        ],
        summary: "코로나19로 온·오프라인에서 운동을 시작하고 싶어도 실행이 어려운 사람이 많았습니다. 이 앱은 운동 목표와 일정을 설정하고, 알림과 진행 그래프로 동기부여를 돕습니다.",
        keyFunction: [
          "오늘의 목표: 오늘의 운동과 식단 목표 설정, 칼로리·단백질·칼슘 등 영양소 계산",
          "운동 일정: 지난달·이번 달·다음 달 운동을 종류와 부위별로 계획",
          "진행 그래프: 월간·주간 달성률과 주 단위 성장률 시각화",
          "운동 알림: 설정한 요일·시간에 울리며 운동 시간이 끝날 때까지 다른 앱 기능을 제한"
        ],
        team: ["프론트엔드와 백엔드를 함께한 개발자 3명"],
        part: ["컨셉 기획 및 프론트엔드 개발", "홈 화면, 로그인 화면, 식단 기록 화면 구현"],
        learned: [
          "JAVA를 활용한 시각화 기법 학습",
          "JAVA 코드에서 MySQL 사용법 학습",
          "MySQL로 사용 가능한 DB 구조 설계 학습"
        ]
      }
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
        "Built for the WWDC Swift Student Challenge, a single-screen app that lets you feel a place through your fingertip.",
        "Explores whether a photograph of a place can be conveyed as touch rather than only as an image."
      ],
      summary: "Pick a photo of a place from your library and the app classifies the scene on-device with a bundled Core ML model, then plays a continuous haptic texture matched to that scene. Drag a finger across the photo and the vibration changes with your speed and position, so a coastline and a city street feel physically different under the same fingertip.",
      keyFunction: [
        "On-device scene classification into six place categories (buildings, forest, glacier, mountain, sea, street) with no network access",
        "Six hand-tuned haptic personalities, each with its own base intensity, sharpness, attack/release envelope, and speed-response curve",
        "Continuous haptic playback modulated in real time by finger speed and touch position rather than discrete taps",
        "Procedural spatial patterns per scene: a grid for buildings, crack-and-seam noise for glacier, travelling waves for sea, ridge bands for mountain",
        "Speed threshold so a stationary finger produces no feedback, matching how real texture perception works",
        "Graceful degradation when the device has no haptic engine or the model fails to load"
      ],
      techStack: "SwiftUI, PhotosUI, Core ML, Vision, Core Haptics, UIKit, plus PyTorch, torchvision, and Core ML Tools for model conversion",
      part: [
        "Full app: concept, model selection, and implementation",
        "Converted a ResNet-18 scene classifier from PyTorch to Core ML with Core ML Tools, folding ImageNet normalization into the image input",
        "Compared MobileNetV2, EfficientNet-B0, and ResNet-18 before settling on the scene-classification model",
        "Designed and hand-tuned the haptic profile for each of the six classes",
        "Built the Core Haptics playback layer and the speed/position modulation"
      ],
      learned: [
        "Streaming dynamic parameters into one long-lived Core Haptics player is far smoother than restarting a pattern every gesture frame",
        "Normalizing finger speed by the screen diagonal keeps the same stroke feeling identical on iPhone and iPad",
        "Perceptually, materials need different response curves: soft ones should swell slowly, brittle ones should snap",
        "Running Vision off the main thread while keeping Swift 6 strict concurrency happy takes deliberate actor handling",
        "Converting a PyTorch model to Core ML is mostly about getting the preprocessing contract exactly right"
      ],
      screenshotFiles: ["assets/shot-wwdc2026-1.png"],
      ko: {
        status: "프로토타입",
        topic: [
          "WWDC Swift Student Challenge 출품작으로, 손끝으로 한 장소를 느낄 수 있게 해주는 단일 화면 앱.",
          "한 장소의 사진이 이미지가 아니라 촉각으로도 전달될 수 있는지를 탐구합니다."
        ],
        summary: "라이브러리에서 장소 사진을 고르면 앱이 온디바이스 Core ML 모델로 장면을 분류하고, 그 장면에 맞는 연속적인 햅틱 텍스처를 재생합니다. 손가락으로 사진 위를 드래그하면 속도와 위치에 따라 진동이 달라져, 같은 손끝으로도 해안가와 도심 거리가 물리적으로 다르게 느껴집니다.",
        keyFunction: [
          "네트워크 연결 없이 온디바이스로 여섯 가지 장소 범주(건물, 숲, 빙하, 산, 바다, 거리) 분류",
          "각기 다른 기본 강도, 날카로움, 어택/릴리즈 엔벌로프, 속도 반응 곡선을 가진 6가지 수작업 햅틱 프로필",
          "이산적인 탭이 아니라 손가락 속도와 터치 위치로 실시간 변조되는 연속 햅틱 재생",
          "장면별 절차적 공간 패턴: 건물은 격자, 빙하는 균열·이음새 노이즈, 바다는 이동하는 파형, 산은 능선 밴드",
          "정지된 손가락에서는 피드백이 없도록 하는 속도 임계값으로 실제 질감 지각 방식을 재현",
          "햅틱 엔진이 없거나 모델 로드에 실패했을 때의 우아한 성능 저하 처리"
        ],
        part: [
          "전체 앱: 컨셉, 모델 선정, 구현",
          "Core ML Tools로 ResNet-18 장면 분류 모델을 PyTorch에서 Core ML로 변환, ImageNet 정규화를 이미지 입력에 포함",
          "MobileNetV2, EfficientNet-B0, ResNet-18을 비교한 뒤 장면 분류 모델 확정",
          "여섯 가지 클래스 각각의 햅틱 프로필 설계 및 수작업 튜닝",
          "Core Haptics 재생 레이어와 속도/위치 변조 로직 구현"
        ],
        learned: [
          "제스처 프레임마다 패턴을 재시작하는 것보다 하나의 장수명 Core Haptics 플레이어에 동적 파라미터를 스트리밍하는 편이 훨씬 매끄러움",
          "손가락 속도를 화면 대각선 길이로 정규화하면 iPhone과 iPad에서 같은 스트로크가 동일하게 느껴짐",
          "재질마다 다른 반응 곡선이 필요함: 부드러운 재질은 천천히 부풀고, 부서지기 쉬운 재질은 순간적으로 튀어야 함",
          "Swift 6 엄격한 동시성을 지키면서 Vision을 메인 스레드 밖에서 실행하려면 액터 처리를 신중히 해야 함",
          "PyTorch 모델을 Core ML로 변환하는 작업은 대부분 전처리 계약을 정확히 맞추는 문제임"
        ]
      }
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
        "Per-image texture analysis via an offscreen canvas: average brightness, local contrast, edge density, and derived roughness",
        "Per-region profiles: each image is sampled on a 2×2 to 4×4 grid, so different parts of one image feel different",
        "Trackpad Force Touch pressure and scroll velocity both modulate the feedback",
        "Scroll-driven haptics whose repeat rate tracks scroll speed, from roughly 5 Hz up to 50 Hz",
        "Idle-time pre-analysis queue with per-element caching, so images are ready before the cursor reaches them",
        "Throttling plus a change-threshold gate to keep the native message rate manageable",
        "Automatic pickup of images added to the page later via a MutationObserver"
      ],
      techStack: "Swift, AppKit, SafariServices, WebKit, NSHapticFeedbackManager, plus JavaScript with Manifest V3, Canvas 2D, Pointer Events, MutationObserver",
      part: [
        "Whole project: extension, native handler, and host app",
        "Wrote the image texture-analysis pipeline in JavaScript",
        "Built the native messaging bridge from the extension through to the trackpad haptic engine",
        "Designed the mapping from texture and pressure onto discrete macOS feedback patterns"
      ],
      learned: [
        "macOS exposes only a few discrete trackpad feedback patterns, so continuous texture has to be approximated by choosing patterns and varying their timing",
        "Analyzing pixels on every pointer move is far too slow, so caching and idle-time pre-analysis are what make it usable",
        "Cross-origin images taint the canvas, which quietly limits pixel analysis on most real-world pages",
        "Safari's native messaging path behaves differently from other browsers and needed careful debugging",
        "Throttling alone is not enough; gating on how much the signal actually changed matters more"
      ],
      screenshotFiles: [],
      ko: {
        status: "프로토타입",
        topic: [
          "웹페이지의 이미지에 실제로 느낄 수 있는 물리적 표면을 부여할 수 있는지 탐구.",
          "제한된 앱 환경에서 다루던 햅틱 텍스처 연구를 열린 웹으로 확장."
        ],
        summary: "어떤 웹페이지의 이미지든 질감이 느껴지게 만드는 macOS Safari 익스텐션입니다. 콘텐츠 스크립트가 각 이미지의 픽셀을 분석해 밝기, 대비, 엣지 밀도, 거칠기를 도출하고, 커서가 이미지 위 어디에 있는지를 그 텍스처에 매핑합니다. 이미지 위에서 호버하거나, 누르거나, 스크롤하면 텍스처 데이터가 네이티브 핸들러로 전달되어 Mac 트랙패드의 햅틱 엔진을 구동합니다.",
        keyFunction: [
          "오프스크린 캔버스를 통한 이미지별 텍스처 분석: 평균 밝기, 로컬 대비, 엣지 밀도, 파생된 거칠기",
          "이미지별 부위 프로필: 각 이미지를 2×2에서 4×4 격자로 샘플링해 한 이미지 안에서도 부위마다 다르게 느껴짐",
          "트랙패드 Force Touch 압력과 스크롤 속도가 모두 피드백을 변조",
          "스크롤 속도에 따라 약 5Hz에서 50Hz까지 반복률이 달라지는 스크롤 기반 햅틱",
          "유휴 시간 사전 분석 큐와 요소별 캐싱으로 커서가 도달하기 전에 이미지 준비 완료",
          "네이티브 메시지 전송량을 관리하기 위한 스로틀링과 변화량 임계값 게이팅",
          "MutationObserver를 통해 이후 추가되는 이미지도 자동으로 인식"
        ],
        part: [
          "익스텐션, 네이티브 핸들러, 호스트 앱을 포함한 프로젝트 전체",
          "JavaScript로 이미지 텍스처 분석 파이프라인 작성",
          "익스텐션에서 트랙패드 햅틱 엔진까지 이어지는 네이티브 메시징 브리지 구축",
          "텍스처와 압력을 macOS의 이산적인 피드백 패턴으로 매핑하는 설계"
        ],
        learned: [
          "macOS는 몇 가지 이산적인 트랙패드 피드백 패턴만 제공하므로, 연속적인 텍스처는 패턴 선택과 타이밍 조절로 근사해야 함",
          "포인터가 움직일 때마다 픽셀을 분석하는 것은 너무 느려서, 캐싱과 유휴 시간 사전 분석이 있어야 실사용 가능",
          "크로스 오리진 이미지는 캔버스를 오염시켜 실제 페이지 대부분에서 픽셀 분석을 조용히 제한함",
          "Safari의 네이티브 메시징 경로는 다른 브라우저와 동작이 달라 세심한 디버깅이 필요했음",
          "스로틀링만으로는 부족하며, 신호가 실제로 얼마나 변했는지를 기준으로 게이팅하는 것이 더 중요함"
        ]
      }
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
      summary: "An iPhone app with a companion Apple Watch app that recreates physical control affordances (a detented rotary knob, a slider, and a button) using programmable haptic feedback. Each control can play its haptic on the phone or on the watch over Bluetooth LE, and the app measures the round-trip latency of both paths, aggregates it per control, and exports the samples as CSV.",
      keyFunction: [
        "Detented knob driven by touch or by gyroscope, with configurable detent size and hysteresis",
        "Slider and button with independent haptic settings, each switchable between phone and watch playback",
        "Round-trip latency measurement over BLE, aggregated per control and exportable to CSV",
        "Ten procedurally synthesized surface textures: asphalt, gravel, sand, water, metal, wood, fabric, rubber, glass, smooth",
        "A custom waveform generator: pick sine, square, triangle, or sawtooth, set amplitude and frequency, and feel it through the Taptic Engine",
        "Full watch haptic editor covering preset type, intensity, sharpness, duration, envelope, pattern, and repeat count",
        "Watch app streaming its own gyroscope angle back to the phone to drive the knob"
      ],
      techStack: "SwiftUI, Core Haptics, Core Bluetooth, Core Motion, WatchKit, Combine, UIKit",
      part: [
        "Whole project: iOS app, watchOS app, and the BLE protocol between them",
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
      screenshotFiles: [],
      ko: {
        status: "연구 프로토타입",
        topic: [
          "물리적 컨트롤을 순수하게 햅틱 피드백만으로 시뮬레이션할 수 있는지 연구하는 도구.",
          "햅틱을 폰이 아니라 페어링된 Apple Watch에서 재생할 때 추가되는 지연시간도 함께 측정합니다."
        ],
        summary: "iPhone 앱과 짝을 이루는 Apple Watch 앱으로, 프로그래머블 햅틱 피드백을 이용해 디텐트가 있는 회전 노브, 슬라이더, 버튼 같은 물리적 컨트롤의 느낌을 재현합니다. 각 컨트롤은 햅틱을 폰이나 Bluetooth LE로 연결된 워치에서 재생할 수 있으며, 앱은 두 경로 모두의 왕복 지연시간을 측정해 컨트롤별로 집계하고 CSV로 내보냅니다.",
        keyFunction: [
          "터치 또는 자이로스코프로 구동되는 디텐트 노브, 디텐트 크기와 히스테리시스 설정 가능",
          "폰/워치 재생을 독립적으로 전환할 수 있는 슬라이더와 버튼",
          "BLE 기반 왕복 지연시간 측정, 컨트롤별 집계 및 CSV 내보내기",
          "아스팔트, 자갈, 모래, 물, 금속, 나무, 천, 고무, 유리, 매끄러움 등 10가지 절차적 표면 텍스처",
          "사인, 사각, 삼각, 톱니 파형 중 선택해 진폭과 주파수를 설정하고 Taptic Engine으로 느껴보는 커스텀 파형 생성기",
          "프리셋 종류, 강도, 날카로움, 지속시간, 엔벌로프, 패턴, 반복 횟수를 아우르는 완전한 워치 햅틱 에디터",
          "노브를 구동하기 위해 자체 자이로스코프 각도를 폰으로 스트리밍하는 워치 앱"
        ],
        part: [
          "iOS 앱, watchOS 앱, 둘 사이의 BLE 프로토콜을 포함한 프로젝트 전체",
          "전송 지연을 낮게 유지하기 위한 컴팩트한 바이너리 BLE 패킷 설계",
          "지연시간 측정 방식과 CSV 내보내기 구축",
          "절차적 텍스처 및 파형 햅틱 합성기 작성"
        ],
        learned: [
          "동기화된 시계 없이도, 수신 측이 id만 그대로 반사하고 송신 측이 왕복 시간을 직접 측정하면 기기 간 지연시간 측정이 가능함",
          "재생 이후가 아니라 재생 직전에 확인 응답을 보내면 전송 측정에서 재생 시간을 제외할 수 있음",
          "watchOS에는 Core Haptics가 없어 강도와 날카로움을 몇 가지 프리셋 타입 중에서 근사해야 함",
          "전송 지연 1밀리초까지 측정에 포함될 때는 컴팩트한 바이너리 패킷이 JSON보다 유리함",
          "간격이 짧은 두 번의 트랜지언트를 겹치면 단일 임팩트 피드백보다 지각적으로 더 강한 클릭감을 만들 수 있음"
        ]
      }
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
      screenshots: 0,
      ko: {
        topic: ["ARKit과 RealityKit을 활용해 사용자가 가상 콘텐츠와 상호작용하는 방법을 만드는 프로젝트."],
        summary: "ARKit과 RealityKit을 사용해 가상 콘텐츠와 상호작용하는 다양한 방법을 구현합니다.",
        keyFunction: [
          "공간에 오브젝트를 배치하고 애니메이션 트리거",
          "터치, 핸드 트래킹 등 상호작용 방식 테스트"
        ],
        learned: [
          "가능한 다양한 상호작용 방식 연구",
          "앵커의 동작 방식과 핸드 트래킹 학습",
          "공간 앱의 동작 방식과 활용처 이해"
        ]
      }
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
      screenshots: 0,
      ko: {
        topic: ["visionOS에서 동작하는 앱을 만들고 성능을 점검하는 프로젝트."],
        summary: "Reality Composer Pro와 ARKit을 사용해 visionOS 프로젝트를 만들고 성능을 점검합니다.",
        keyFunction: [
          "공간에 오브젝트를 배치하고 애니메이션 트리거",
          "가상 공간 내 위치에 따른 밝기와 창/디자인 변화 확인"
        ],
        learned: [
          "visionOS의 동작 방식",
          "Reality Composer Pro 사용법",
          "앵커의 동작 방식",
          "공간 앱의 동작 방식과 활용처 이해"
        ]
      }
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
      screenshots: 0,
      ko: {
        topic: ["RealityKit으로 iOS 기기에서 AR/VR 기능을 테스트."],
        summary: "RealityKit, Reality Composer, SceneKit 등을 활용해 visionOS 스타일 도구를 테스트하고, 카메라와 LiDAR 스캐너를 사용했습니다.",
        keyFunction: ["가상 공간에 숫자를 띄우고 버튼 기능 구현"],
        learned: ["가상 공간에 오브젝트 추가하기", "가상 오브젝트 디자인"]
      }
    },
    {
      id: "instagramclone",
      name: "Instagram Clone Coding",
      cover: "assets/proj-instagramclone.png",
      created: "January 8 to January 24, 2022",
      tags: ["Android Studio", "Kotlin", "Firebase"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Built to get comfortable with Kotlin, where the goal was to learn the language's syntax and build a database.",
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
      screenshots: 0,
      ko: {
        topic: [
          "Kotlin에 익숙해지기 위해 시작, 언어 문법 학습과 데이터베이스 구축이 목표.",
          "인스타그램의 핵심 기능을 재현."
        ],
        summary: "데이터베이스 구축, 인증, 스토리지 사용법을 익히고 Kotlin으로 UI 개발을 연습하기 위해 만든 Kotlin + Firebase 기반 인스타그램 클론.",
        keyFunction: [
          "구글/페이스북/트위터/이메일 로그인 및 회원가입",
          "검색: 데이터베이스에 저장된 사진 목록 표시",
          "계정: 사용자 본인의 게시물 보기",
          "사용자 간 팔로우/팔로워"
        ],
        part: ["프론트엔드 및 백엔드 개발", "Firebase(DB) 개발"],
        learned: [
          "Kotlin에서의 시각화 기법 학습",
          "Kotlin 코드에서 Firebase 사용법 학습",
          "Firebase로 사용 가능한 DB 구조 설계 학습"
        ]
      }
    },
    {
      id: "assistantui",
      name: "Assistant UI Analysis",
      cover: null,
      created: "January 4, 2022",
      tags: ["Android Studio", "JAVA"],
      url: { label: "GitHub", href: "https://github.com/HIBAR97" },
      topic: [
        "Analyzing the UI of assistive apps available on the app stores: how they're structured, how they help, and how they're activated.",
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
      screenshots: 0,
      ko: {
        topic: [
          "앱스토어에 있는 보조 기능 앱들의 UI가 어떻게 구성되고, 어떻게 도움을 주며, 어떻게 활성화되는지 분석.",
          "분석한 내용을 바탕으로 다시 구현."
        ],
        summary: "시장에서 가장 많이 다운로드된 보조 기능 앱들의 UI를 분석하고 다시 구현했습니다.",
        keyFunction: [
          "Be My Eyes: 카메라로 화면의 텍스트를 읽어줌",
          "Voice Eye: 복약 정보나 행정 서식 같은 문서에 접근해 소리 내어 읽어줌"
        ],
        part: ["프론트엔드 및 백엔드 리팩토링"],
        learned: [
          "실제로 보조 기능을 제대로 지원하는 앱은 매우 적음",
          "대부분 UI가 지나치게 단순하거나 일반 앱과 별 차이가 없음"
        ]
      }
    }
  ]
};
