// ============================================
// Personal Profile Data - Academic Template
// ============================================

// Type definitions
export interface Paper {
  badge: string;
  badgeUrl?: string;
  badgeStyle?: string;
  authors?: string;
  title: string;
  venue: string;
  contribution?: string;
  note?: string;
  oral?: boolean;
  citations?: number;
  links?: { label: string; url: string }[];
  stars?: string;
  image?: string;
  imageAlt?: string;
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

export interface HonorItem {
  title: string;
  year: string;
  level?: string;
}

export const profile = {
  name: "Yuhang Han",
  nameCN: "韩宇航",
  title: "First-Year PhD Student",
  bio: "Direct-entry PhD student at HKUST (GZ), EPIC Lab. Working on multimodal acceleration, multimodal reinforcement learning, AI memory (RSI), and coding agents (RSI).",
  email: "kawhiiileo2@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=I0V2KAEAAAAJ&hl=zh-CN",
  citations: 326,
  github: "https://github.com/kawhiiiileo",
  location: "Guangzhou, China",
  avatar: `${import.meta.env.BASE_URL}avatar.png`,

  education: {
    institution: "HKUST (GZ)",
    lab: "EPIC Lab",
    advisor: "Prof. Linfeng Zhang",
    advisorUrl: "https://www.zhanglinfeng.tech/",
    coAdvisor: "Prof. Zhijiang Guo",
    coAdvisorUrl: "https://cartus.github.io/",
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
    {
      title: "Multimodal Acceleration",
      works: [
        { label: "FiCoCo", url: "https://ficoco-accelerate.github.io/" },
        { label: "GlobalCom²", url: "https://arxiv.org/abs/2501.05179" },
        { label: "STaR-KV", url: "https://arxiv.org/abs/2606.01790" },
      ],
    },
    {
      title: "Multimodal Reinforcement Learning",
      works: [
        { label: "KAWHI", url: "https://kawhiiiileo.github.io/KAWHI_PAGE/" },
        { label: "Innovator-VL", url: "https://innovatorlm.github.io/Innovator-VL/" },
      ],
    },
    {
      title: "AI Memory (RSI)",
      works: [
        { label: "HMS", url: "https://github.com/Shadow-Weave/HMS" },
      ],
    },
    {
      title: "Coding Agents (RSI)",
      works: [
        { label: "Endless Frontier · Ongoing", url: "#experience" },
      ],
    },
  ],
};

// Intro paragraph
export const introText = `I am a **first-year direct-entry PhD student at HKUST (GZ)**, advised by [Prof. Linfeng Zhang](https://www.zhanglinfeng.tech/) (primary advisor, SJTU EPIC Lab) and [Prof. Zhijiang Guo](https://cartus.github.io/) (HKUST (GZ)). I also collaborate closely with [Dr. Siteng Huang](https://kyonhuang.top/) at DAMO Academy, Alibaba Group.

I am currently a research intern at **Endless Frontier**, focusing on **coding agents for recursive self-improvement (RSI)**.`;

// News items - format matching reference project
export const recentNews: NewsItem[] = [
  {
    date: "2026/09",
    content: `[NeurIPS'26] [TwinRouterBench](https://arxiv.org/abs/2605.18859) has been accepted to **NeurIPS 2026**! See [Code](https://github.com/CommonstackAI/TwinRouterBench) for more details.`,
  },
  {
    date: "2026/09",
    content: `[TMLR] [MAPGD](https://arxiv.org/abs/2509.11361) has been accepted to **Transactions on Machine Learning Research (TMLR)**! See [Code](https://github.com/kawhiiiileo/MAPGD) for more details.`,
  },
  {
    date: "2026/06",
    content: `[ECCV'26] [KAWHI](https://kawhiiiileo.github.io/KAWHI_PAGE/) got accepted to ECCV 2026!`,
  },
  {
    date: "2026/06",
    content: `[Preprint] We released [STaR-KV](https://arxiv.org/abs/2606.01790), a training-free method for KV cache compression in GUI agents!`,
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
    content: `[Technical Report] We released [Innovator-VL](https://innovatorlm.github.io/Innovator-VL/), a multimodal large language model tailored for scientific discovery! See [Project page](https://innovatorlm.github.io/Innovator-VL/) for more details!`,
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
    badge: "NeurIPS-2026",
    image: "twinrouter.png",
    imageAlt: "TwinRouterBench project overview",
    authors: "P Yang, W Chen, T Yang, P Feng, J Xing, W Guo, Y Yao, Yuhang Han, H Li, et al.",
    title: "TwinRouterBench: Fast Static and Live Dynamic Evaluation for Realistic Agentic LLM Routing",
    venue: "Conference on Neural Information Processing Systems (NeurIPS)",
    note: "Accepted in September 2026",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.18859" },
      { label: "github", url: "https://github.com/CommonstackAI/TwinRouterBench" },
    ],
    stars: "CommonstackAI/TwinRouterBench",
  },
  {
    badge: "ECCV-2026",
    image: "kawhi.png",
    imageAlt: "KAWHI method overview",
    authors: "Yuhang Han†, Yuyang Wu, Zhengbo Jiao, Yiyu Wang, Xuyang Liu, Shaobo Wang, Hanlin Xu, Xuming Hu, Linfeng Zhang✉",
    title: "Bridging Visual Representation and Reinforcement Learning from Verifiable Rewards in Large Vision-Language Models",
    venue: "European Conference on Computer Vision (ECCV)",
    note: "CCF B",
    links: [
      { label: "project page", url: "https://kawhiiiileo.github.io/KAWHI_PAGE/" },
    ],
  },
  {
    badge: "AAAI-2026",
    badgeUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/33131",
    authors: "Xuyang Liu, Ziming Wang, Yuhang Han, Yingyao Wang, Jiale Yuan, Jun Song, Bo Zheng, Linfeng Zhang, Siteng Huang, Honggang Chen✉",
    title: "Compression with Global Guidance: Towards Training-free High-Resolution MLLMs Acceleration",
    image: "globalcom.jpg",
    imageAlt: "GlobalCom² compression framework",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
    note: "CCF A",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2501.05179" },
      { label: "github", url: "https://github.com/xuyang-liu16/GlobalCom2" },
    ],
    stars: "xuyang-liu16/GlobalCom2",
    citations: 65,
  },
  {
    badge: "AAAI-2026",
    badgeUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/33131",
    authors: "Yuhang Han*†, Xuyang Liu*, Pengxiang Ding, Donglin Wang, Honggang Chen, Qingsen Yan, Siteng Huang✉",
    title: "Filter, Correlate, Compress: Training-Free Token Reduction for MLLM Acceleration",
    image: "ficoco.png",
    imageAlt: "FiCoCo token reduction framework",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence",
    note: "CCF A",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.17686" },
      { label: "project page", url: "https://ficoco-accelerate.github.io/" },
      { label: "github", url: "https://github.com/kawhiiiileo/FiCoCo" },
    ],
    stars: "kawhiiiileo/FiCoCo",
    citations: 67,
  },
];

// Publications - Journal Papers
export const journalPapers: Paper[] = [
  {
    badge: "TMLR-2026",
    image: "mapgd.png",
    imageAlt: "MAPGD multi-agent prompt optimization workflow",
    authors: "Yichen Han*, Yuhang Han*†, Bojun Liu, Zhengpeng Zhou, Zeng Zhang, Guanyu Liu, Yang Yang, Wenli Wang, Isaac N. Shi, Yunyan, Lewei He, Tianyu Shi✉",
    title: "MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization",
    venue: "Transactions on Machine Learning Research (TMLR)",
    note: "Accepted in September 2026",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.11361" },
      { label: "github", url: "https://github.com/kawhiiiileo/MAPGD" },
    ],
    stars: "kawhiiiileo/MAPGD",
  },
  {
    badge: "RS-2024",
    image: "luffd-method.png",
    imageAlt: "LUFFD-YOLO method: the proposed ESDC2f module with multi-head self-attention (Figure 5)",
    authors: "Y Han, B Duan, R Guan, G Yang, Z Zhen✉",
    title: "LUFFD-YOLO: A Lightweight Model for UAV Remote Sensing Forest Fire Detection Based on Attention Mechanism and Multi-Level Feature Fusion",
    venue: "Remote Sensing",
    note: "CAAI B & Q1",
    citations: 69,
    links: [
      { label: "paper", url: "https://www.mdpi.com/2072-4292/16/12/2177" },
    ],
  },
];

// Technical Reports
export const technicalReports: Paper[] = [
  {
    badge: "Technical Report",
    title: "Holographic Memory System (HMS)",
    image: "hms-main.png",
    imageAlt: "HMS main framework: memory intent planning, evidence reconstruction, and state compilation and response generation",
    venue: "Technical report",
    contribution: "Contributed to memory system design (first author)",
    links: [
      { label: "github", url: "https://github.com/Shadow-Weave/HMS" },
    ],
    stars: "Shadow-Weave/HMS",
  },
  {
    badge: "Technical Report",
    title: "Innovator-VL: A Multimodal Large Language Model for Scientific Discovery",
    image: "innovator.png",
    imageAlt: "Innovator-VL model architecture",
    venue: "Technical report, arXiv:2601.19325",
    contribution: "Contributed to scientific training data for SFT and RL",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2601.19325" },
      { label: "github", url: "https://github.com/InnovatorLM/Innovator-VL" },
    ],
    stars: "InnovatorLM/Innovator-VL",
  },
];

// Publications - Preprints
export const preprints: Paper[] = [
  {
    badge: "arXiv-2606.01790",
    image: "star-kv.png",
    imageAlt: "STaR-KV spatio-temporal KV cache compression framework",
    authors: "Yuhang Han*†, Wenzheng Yang*, Yujie Chen, Xiangqi Jin, Yaojie Zhang, Siteng Huang, Linfeng Zhang✉",
    title: "STaR-KV: Spatio-Temporal Adaptive Re-weighting for KV Cache Compression in GUI Vision-Language Models",
    venue: "arXiv preprint arXiv:2606.01790",
    note: "Under review (ACL ARR 2026)",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2606.01790" },
      { label: "github", url: "https://github.com/kawhiiiileo/STaR-KV" },
    ],
    stars: "kawhiiiileo/STaR-KV",
  },
  {
    badge: "arXiv-2605.20022",
    image: "flexdraft.png",
    imageAlt: "FlexDraft speculative decoding pipeline",
    authors: "Y Zhang, J Huang, Junlong Ke, Yuhang Han, Y Long, T Zhao, B Qi, Linfeng Zhang✉",
    title: "FlexDraft: Flexible Speculative Decoding via Attention Tuning and Bonus-Guided Calibration",
    venue: "arXiv preprint arXiv:2605.20022",
    note: "Under review (NeurIPS 2026)",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.20022" },
    ],
  },
];

// Experience
export const experiences = [
  {
    role: "Research Intern",
    institution: "Endless Frontier",
    logo: "endless-frontier.png",
    organizationUrl: "https://endlessfrontier.tech/",
    period: "Present",
    topic: "Coding agents for recursive self-improvement (RSI)",
    outputs: [],
  },
  {
    role: "Research Intern",
    institution: "DP Technology",
    logo: "dp-technology.png",
    organizationUrl: "https://www.dp.tech/en",
    period: "June 2026 – September 2026",
    location: "Shanghai, China",
    team: "Foundation Model / Base Model group",
    topic: "Foundation model post-training, reinforcement learning, and on-policy distillation",
    outputs: [],
  },
  {
    role: "Research Intern",
    institution: "QwenC, Alibaba",
    logo: "qwen.png",
    organizationUrl: "https://qwen.ai/",
    period: "April 2026 – May 2026",
    location: "Guangzhou, China",
    team: "Multimodal Reasoning & Agent Team",
    topic: "Multimodal reasoning and agent systems for vision-language tasks",
    outputs: [],
  },
  {
    role: "Research Assistant",
    institution: "EPIC Lab, Shanghai Jiao Tong University",
    logo: "epic.jpg",
    organizationUrl: "https://www.zhanglinfeng.tech/",
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
    logo: "westlake.png",
    organizationUrl: "https://milab.westlake.edu.cn/",
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
];

// Social links for sidebar
export const socialLinks = [
  { icon: "💻", label: "GitHub", url: profile.github },
  { icon: "📧", label: "Email", url: profile.email ? `mailto:${profile.email}` : "" },
  { icon: "📍", label: profile.location, url: "" },
];
