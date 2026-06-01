// ============================================
// Personal Profile Data - Academic Template
// ============================================

// Type definitions
export interface Paper {
  badge: string;
  badgeUrl?: string;
  badgeStyle?: string;
  authors: string;
  title: string;
  venue: string;
  note?: string;
  oral?: boolean;
  links?: { label: string; url: string }[];
  stars?: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface ServiceItem {
  name: string;
  url: string;
  note?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export interface HonorItem {
  title: string;
  year: string;
  level?: string;
}

export const profile = {
  name: "Yuhang Han",
  nameCN: "韩宇航",
  title: "Incoming PhD Student",
  bio: "Incoming PhD Student at SJTU & HKUST (GZ), EPIC Lab. Researching on efficient multimodal LLM inference.",
  email: "kawhiiileo2@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=I0V2KAEAAAAJ&hl=zh-CN",
  citations: "208",
  github: "https://github.com/kawhiiiileo",
  location: "Shanghai, China",
  avatar: "/avatar.png",

  education: {
    institution: "SJTU & HKUST (GZ)",
    lab: "EPIC Lab",
    advisor: "Prof. Linfeng Zhang",
    advisorUrl: "https://www.zhanglinfeng.tech/",
    startDate: "Fall 2026",
  },

  collaborators: [
    {
      name: "Dr. Siteng Huang",
      url: "https://kyonhuang.top/",
      institution: "DAMO Academy",
    },
  ],

  researchInterests: [
    "Efficient Large Model Inference (Accelerating multimodal LLMs and ViTs)",
    "DLLM or MLLM (RL-based optimization strategy)",
  ],
};

export const educationItems: EducationItem[] = [
  {
    degree: "Ph.D. in Computer Science and Technology (Incoming)",
    institution: "SJTU & HKUST (GZ)",
    period: "Aug. 2026 – Expected 2030",
    location: "Shanghai & Guangzhou, China",
    details: [
      "Advisor: Prof. Linfeng Zhang, SJTU EPIC Lab",
      "Research focus: Efficient Multimodal Large Language Models and Reinforcement Learning",
    ],
  },
  {
    degree: "B.S. in Computer Science and Technology",
    institution: "Northeast Forestry University (211)",
    period: "Sep. 2021 – Jul. 2025",
    location: "Harbin, China",
    details: [
      "GPA: 89.04/100",
      "Core courses: Machine Learning (98), Algorithms and Data Structures (95), Linear Algebra (96), Probability Theory and Mathematical Statistics (99)",
    ],
  },
];

// Intro paragraph
export const introText = `👋 Hi! I am Yuhang Han (韩宇航 in Chinese). I am an Incoming PhD student (Fall 2026) in the joint program between SJTU (EPIC Lab) and HKUST (GZ), working under Prof. Linfeng Zhang. I also collaborate closely with Dr. Siteng Huang at DAMO Academy, Alibaba Group.

🔬 My research has centered on **efficient inference for multimodal large language models (MLLMs)**, including training-free token reduction, global-to-local compression, and RL-based optimization for diffusion/vision-language models. Recently, I am also exploring **reinforcement learning from verifiable rewards (RLVR)** for large vision-language models.`;

// News items - format matching reference project
export const recentNews: NewsItem[] = [
  {
    date: "2026/06",
    content: `[Preprint] We released STaR-KV, a training-free method for KV cache compression in GUI agents!`,
  },
  {
    date: "2026/05",
    content: `[Preprint] We released two papers: [TwinRouterBench](https://arxiv.org/abs/2605.18859) and [FlexDraft](https://arxiv.org/abs/2605.20022)!`,
  },
  {
    date: "2026/03",
    content: `[Preprint] We released [KAWHI](https://kawhiiiileo.github.io/KAWHI_PAGE/), a plug-and-play reward reweighting mechanism that explicitly incorporates structured visual information into uniform reward policy optimization methods! See [Project page](https://kawhiiiileo.github.io/KAWHI_PAGE/) for more details!`,
  },
  {
    date: "2026/01",
    content: `[Preprint] We released [Innovator-VL](https://innovatorlm.github.io/Innovator-VL/), a multimodal large language model tailored for scientific discovery! See [Project page](https://innovatorlm.github.io/Innovator-VL/) for more details!`,
  },
  {
    date: "2025/11",
    content: `[AAAI'26] Two papers ([FiCoCo](https://ficoco-accelerate.github.io/) and [GlobalCom²](https://arxiv.org/abs/2501.05179)) got accepted for AAAI 2026 on training-free acceleration for high-resolution MLLMs!`,
  },
];

export const olderNews: NewsItem[] = [
  {
    date: "2025/10",
    content: `Joined **EPIC Lab @ SJTU** as Research Assistant, focusing on accelerating diffusion LLMs via remasking & RL-driven optimization.`,
  },
  {
    date: "2025/09",
    content: `[Preprint] We released [MAPGD](https://arxiv.org/abs/2509.11361), a multi-agent collaborative framework for instruction optimization! See [Code](https://github.com/kawhiiiileo/MAPGD) for more details!`,
  },
  {
    date: "2025/01",
    content: `[Preprint] We released [GlobalCom²](https://arxiv.org/abs/2501.05179), a global-to-local training-free acceleration method for high-resolution MLLMs! See [Code](https://github.com/xuyang-liu16/GlobalCom2) for more details!`,
  },
  {
    date: "2024/11",
    content: `[Preprint] We released [FiCoCo](https://ficoco-accelerate.github.io/), a unified paradigm for training-free token reduction in MLLMs! See [Project page](https://ficoco-accelerate.github.io/) for more details!`,
  },
];

// Publications - Conference Papers
export const conferencePapers: Paper[] = [
  {
    badge: "AAAI-2026",
    badgeUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/33131",
    authors: "Xuyang Liu, Ziming Wang, Yuhang Han, Yingyao Wang, Jiale Yuan, Jun Song, Bo Zheng, Linfeng Zhang, Siteng Huang, Honggang Chen✉",
    title: "Compression with Global Guidance: Towards Training-free High-Resolution MLLMs Acceleration",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
    note: "CCF A",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2501.05179" },
      { label: "github", url: "https://github.com/xuyang-liu16/GlobalCom2" },
    ],
    stars: "xuyang-liu16/GlobalCom2",
  },
  {
    badge: "AAAI-2026",
    badgeUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/33131",
    authors: "Yuhang Han*†, Xuyang Liu*, Pengxiang Ding, Donglin Wang, Honggang Chen, Qingsen Yan, Siteng Huang✉",
    title: "Filter, Correlate, Compress: Training-Free Token Reduction for MLLM Acceleration",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
    note: "CCF A",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.17686" },
      { label: "project page", url: "https://ficoco-accelerate.github.io/" },
      { label: "github", url: "https://github.com/kawhiiiileo/FiCoCo" },
    ],
    stars: "kawhiiiileo/FiCoCo",
  },
  {
    badge: "ICIC-2024",
    authors: "Junhong Li, Renxiang Guan, Yuhang Han, Yaowen Hu, Zihao Li, Yanyan Wu, Ziwei Xu, Xianju Li✉",
    title: "Superpixel-based Dual-neighborhood Contrastive Graph Autoencoder for Deep Subspace Clustering of Hyperspectral Image",
    venue: "International Conference on Intelligent Computing",
    note: "CCF C",
  },
  {
    badge: "ACM CAISW 2026",
    authors: "Pei Yang, Wanyi Chen, Tongyun Yang, Pengbin Feng, Jiarong Xing, Wentao Guo, Yuhang Yao, Yuhang Han, Hanchen Li, Xu Wang, Zeyu Wang, Jie Xiao, Anjie Yang, Lynn Ai, Eric Yang, et al.",
    title: "TwinRouterBench: Fast Static and Live Dynamic Evaluation for Realistic Agentic LLM Routing",
    venue: "ACM CAISW 2026",
    note: "Workshop Poster",
  },
  {
    badge: "ACM CAISW 2026",
    authors: "Yuhang Yao, Zeyu Wang, Tongyun Yang, Wanyi Chen, Yuhang Han, Jie Xiao, Chengke Bao, Tianyu Shi✉",
    title: "MERA: Model Evolution and Routing with Skill Adaptation for Agentic Systems at Scale",
    venue: "ACM CAISW 2026",
    note: "Workshop Poster",
  },
];

// Publications - Journal Papers
export const journalPapers: Paper[] = [
  {
    badge: "RS-2024",
    authors: "Y Han, B Duan, R Guan, G Yang, Z Zhen✉",
    title: "LUFFD-YOLO: A Lightweight Model for UAV Remote Sensing Forest Fire Detection Based on Attention Mechanism and Multi-Level Feature Fusion",
    venue: "Remote Sensing",
    note: "CAAI B & Q1",
    links: [
      { label: "paper", url: "https://www.mdpi.com/2072-4292/16/12/2177" },
    ],
  },
];

// Publications - Preprints
export const preprints: Paper[] = [
  {
    badge: "arXiv-2603.27375",
    authors: "Yuhang Han†, Yuyang Wu, Zhengbo Jiao, Yiyu Wang, Xuyang Liu, Shaobo Wang, Hanlin Xu, Xuming Hu, Linfeng Zhang✉",
    title: "Bridging Visual Representation and Reinforcement Learning from Verifiable Rewards in Large Vision-Language Models",
    venue: "arXiv preprint arXiv:2603.27375",
    note: "Under review (ECCV 2026)",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2603.27375" },
      { label: "project page", url: "https://kawhiiiileo.github.io/KAWHI_PAGE/" },
    ],
  },
  {
    badge: "arXiv-2601.19325",
    authors: "Zichen Wen*†, Boxue Yang*†, Shuang Chen, Yaojie Zhang, Yuhang Han, Junlong Ke, Cong Wang, Yicheng Fu, Jiawang Zhao, Jiangchao Yao, Xi Fang, Zhen Wang, Hengxing Cai, Lin Yao, Zhifeng Gao, Yanhui Hong, Nang Yuan, Yixuan Li, Guojiang Zhao, Haoyu Tao, Nan Wang, Han Lyu, Guolin Ke, Ning Liao, Xiaoxing Wang, Kai Chen, Zhiyu Li, Feiyu Xiong, Sihan Hu, Kun Chen, Yanfeng Wang, Weinan E†, Linfeng Zhang†✉",
    title: "Innovator-VL: A Multimodal Large Language Model for Scientific Discovery",
    venue: "arXiv preprint arXiv:2601.19325",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2601.19325" },
      { label: "github", url: "https://github.com/InnovatorLM/Innovator-VL" },
    ],
    stars: "InnovatorLM/Innovator-VL",
  },
  {
    badge: "arXiv-2509.11361",
    authors: "Yichen Han*, Yuhang Han*†, Bojun Liu, Zhengpeng Zhou, Zeng Zhang, Guanyu Liu, Yang Yang, Wenli Wang, Isaac N. Shi, Yunyan, Lewei He, Tianyu Shi✉",
    title: "MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization",
    venue: "arXiv preprint arXiv:2509.11361",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.11361" },
      { label: "github", url: "https://github.com/kawhiiiileo/MAPGD" },
    ],
    stars: "kawhiiiileo/MAPGD",
  },
  {
    badge: "arXiv-xxxx",
    authors: "Yuhang Han*†, Wenzheng Yang*, Yujie Chen, Xiangqi Jin, Yaojie Zhang, Siteng Huang, Linfeng Zhang✉",
    title: "STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models",
    venue: "arXiv preprint arXiv:xxxx",
    note: "Under review (ACL ARR 2026)",
    links: [
      { label: "github", url: "https://github.com/kawhiiiileo/STaR-KV" },
    ],
    stars: "kawhiiiileo/STaR-KV",
  },
  {
    badge: "arXiv-2605.20022",
    authors: "Y Zhang, J Huang, Junlong Ke, Yuhang Han, Y Long, T Zhao, B Qi, Linfeng Zhang✉",
    title: "FlexDraft: Flexible Speculative Decoding via Attention Tuning and Bonus-Guided Calibration",
    venue: "arXiv preprint arXiv:2605.20022",
    note: "Under review (NeurIPS 2026)",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.20022" },
    ],
  },
  {
    badge: "arXiv-2605.18859",
    authors: "P Yang, W Chen, T Yang, P Feng, J Xing, W Guo, Y Yao, Yuhang Han, H Li, et al.",
    title: "TwinRouterBench: Fast Static and Live Dynamic Evaluation for Realistic Agentic LLM Routing",
    venue: "arXiv preprint arXiv:2605.18859",
    note: "Under review (NeurIPS 2026)",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.18859" },
      { label: "github", url: "https://github.com/CommonstackAI/TwinRouterBench" },
    ],
    stars: "CommonstackAI/TwinRouterBench",
  },
];

// Experience
export const experiences = [
  {
    role: "Research Intern",
    institution: "DP Technology",
    period: "May 2026 – Present",
    location: "Shanghai, China",
    team: "Foundation Model / Base Model group",
    topic: "Foundation model post-training, reinforcement learning, and on-policy distillation",
    outputs: [],
  },
  {
    role: "Research Intern",
    institution: "QwenC, Alibaba",
    period: "April 2026 – May 2026",
    location: "Guangzhou, China",
    team: "Multimodal Reasoning & Agent Team",
    topic: "Multimodal reasoning and agent systems for vision-language tasks",
    outputs: [],
  },
  {
    role: "Research Assistant",
    institution: "EPIC Lab, Shanghai Jiao Tong University",
    period: "October 2025 – Present",
    location: "Shanghai, China",
    advisor: "Prof. Linfeng Zhang",
    topic: "Diffusion large language model and MLLM RL",
    outputs: [
      { text: "Innovator-VL", url: "https://github.com/InnovatorLM/Innovator-VL" },
      { text: "KAWHI", url: "https://kawhiiiileo.github.io/KAWHI_PAGE/" },
      { text: "STaR-KV", url: "https://github.com/kawhiiiileo/STaR-KV" },
    ],
  },
  {
    role: "Research Assistant",
    institution: "MiLab, Westlake University",
    period: "Aug. 2024 – Dec. 2024",
    location: "Hangzhou, China",
    advisor: "Dr. Siteng Huang, Prof. Donglin Wang",
    topic: "Efficient Multimodal Large Language Model",
    outputs: [
      { text: "FiCoCo", url: "https://github.com/kawhiiiileo/FiCoCo" },
    ],
  },
];

export const honors: HonorItem[] = [
  { title: "Outstanding Graduate of Northeast Forestry University", year: "2025" },
  { title: "Merit Student of Northeast Forestry University", year: "2024" },
  { title: "Excellent Communist Youth League Member of Northeast Forestry University", year: "2023" },
  { title: "First-Class Scholarship of Northeast Forestry University", year: "2021–2024", level: "6 times" },
];

export const competitions: HonorItem[] = [
  { title: "MathorCup Big Data Challenge", year: "2023", level: "National First Prize" },
  { title: "National Mathematical Modeling Competition", year: "2024", level: "Heilongjiang First Prize" },
  { title: "Northeast Three Provinces Math Modeling", year: "2024", level: "Heilongjiang First Prize" },
  { title: "iCAN Innovation and Entrepreneurship", year: "2023", level: "Heilongjiang Second Prize" },
  { title: "National Business Elite Challenge", year: "2023", level: "National Third Prize" },
  { title: "Lanqiao Cup Programming Contest", year: "2022", level: "Heilongjiang Third Prize" },
];

// Services
export const conferenceServices: ServiceItem[] = [
  { name: "AAAI Conference on Artificial Intelligence", url: "https://aaai.org/conference/aaii/", note: "AAAI 2026" },
  { name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition", url: "https://ieeexplore.ieee.org/xpl/conhome/1000147/all-proceedings", note: "CVPR" },
  { name: "International Joint Conference on Artificial Intelligence", url: "https://www.ijcai.org/", note: "IJCAI" },
];

export const journalServices: ServiceItem[] = [];

// Misc
export const miscLinks = [
  { text: "GitHub", url: "https://github.com/kawhiiiileo" },
  { text: "Google Scholar", url: profile.googleScholar },
];

// Social links for sidebar
export const socialLinks = [
  { icon: "🎓", label: "Google Scholar", url: profile.googleScholar },
  { icon: "💻", label: "GitHub", url: profile.github },
  { icon: "📧", label: "Email", url: profile.email ? `mailto:${profile.email}` : "" },
  { icon: "📍", label: "Shanghai, China", url: "" },
];
