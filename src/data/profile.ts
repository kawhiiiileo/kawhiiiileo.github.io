// ============================================
// Personal Profile Data - Easy to maintain
// Update this file to modify content
// ============================================

// Type definitions
export interface Paper {
  badge: string;
  badgeType: 'conference' | 'journal' | 'arxiv';
  authors: string;
  title: string;
  venue: string;
  note?: string;
  paperUrl?: string;
  pageUrl?: string;
  codeUrl?: string;
  stars?: string;
}

export const profile = {
  name: "Yuhang Han",
  nameCN: "韩宇航",
  title: "Incoming PhD Student",
  email: "", // Add your email if you want
  googleScholar: "https://scholar.google.com/citations?user=I0V2KAEAAAAJ&hl=en",
  github: "https://github.com/kawhiiiileo",
  quote: "All or nothing.",
  quoteDate: "December 1, 2025",
  
  education: {
    institution: "Shanghai Jiao Tong University & HKUST (Guangzhou)",
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
    {
      icon: "⚡",
      title: "Efficient Large Model Inference",
      description: "Accelerating multimodal LLMs and ViTs",
    },
    {
      icon: "🧠",
      title: "DLLM or MLLM",
      description: "RL-based optimization strategy",
    },
  ],
};

// News items - add new items at the top
export const newsItems = [
    {
    date: "2026.03",
    emoji: "🎉",
    content: "We released ",
    link: {
      text: "KAWHI",
      url: "https://kawhiiiileo.github.io/KAWHI_PAGE/",
    },
    extra: ", a plug-and-play reward reweighting mechanism that explicitly incorporates structured visual information into uniform reward policy optimization methods!",
  },
  {
    date: "2026.01",
    emoji: "🎉",
    content: "We release ",
    link: {
      text: "Innovator-VL",
      url: "https://innovatorlm.github.io/Innovator-VL/",
    },
    extra: ", a large language model tailored for scientific research!",
  },
  {
    date: "2025.11",
    emoji: "🎉",
    content: "Two papers accepted to ",
    highlight: "AAAI 2026",
    extra: " on training-free acceleration for high-resolution MLLMs!",
  },
  {
    date: "2025.10",
    emoji: "🔬",
    content: "Joined ",
    highlight: "EPIC Lab @ SJTU",
    extra: " as Research Assistant, focusing on accelerating diffusion LLMs via remasking & RL-driven optimization.",
  },
  {
    date: "2025.09",
    emoji: "📄",
    content: "Released ",
    link: {
      text: "MAGPD",
      url: "https://arxiv.org/abs/2509.11361",
    },
    extra: ": Multi-agent collaborative framework for instruction optimization",
    codeUrl: "https://github.com/kawhiiiileo/MAPGD",
  },
  {
    date: "2025.01",
    emoji: "📄",
    content: "Released ",
    link: {
      text: "GlobalCom²",
      url: "https://arxiv.org/abs/2501.05179",
    },
    extra: ": Global-to-local training-free acceleration for high-resolution MLLMs",
    codeUrl: "https://github.com/xuyang-liu16/GlobalCom2",
  },
  {
    date: "2024.11",
    emoji: "📄",
    content: "Released ",
    link: {
      text: "FiCoCo",
      url: "https://ficoco-accelerate.github.io/",
    },
    extra: ": Unified paradigm for training-free token reduction in MLLMs",
  },
];

// Publications - Conference Papers
export const conferencePapers: Paper[] = [
  {
    badge: "AAAI 2026",
    badgeType: "conference",
    authors: "Xuyang Liu, Ziming Wang, Yuhang Han, Yingyao Wang, Jiale Yuan, Jun Song, Bo Zheng, Linfeng Zhang, Siteng Huang, Honggang Chen",
    title: "Compression with Global Guidance: Towards Training-free High-Resolution MLLMs Acceleration",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 2026",
    note: "CCF A",
    paperUrl: "https://arxiv.org/pdf/2501.05179",
    codeUrl: "https://github.com/xuyang-liu16/GlobalCom2",
    stars: "xuyang-liu16/GlobalCom2",
  },
  {
    badge: "AAAI 2026",
    badgeType: "conference",
    authors: "Yuhang Han*, Xuyang Liu*, Pengxiang Ding, Donglin Wang, Honggang Chen, Qingsen Yan, Siteng Huang",
    title: "Filter, Correlate, Compress: Training-Free Token Reduction for MLLM Acceleration",
    venue: "Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), 2026",
    note: "CCF A",
    paperUrl: "https://arxiv.org/pdf/2411.17686",
    pageUrl: "https://ficoco-accelerate.github.io/",
    codeUrl: "https://github.com/kawhiiiileo/FiCoCo",
    stars: "kawhiiiileo/FiCoCo",
  },
];

// Publications - Journal Papers
export const journalPapers: Paper[] = [
  {
    badge: "RS 2024",
    badgeType: "journal",
    authors: "Y Han, B Duan, R Guan, G Yang, Z Zhen",
    title: "LUFFD-YOLO: A Lightweight Model for UAV Remote Sensing Forest Fire Detection Based on Attention Mechanism and Multi-Level Feature Fusion",
    venue: "Remote Sensing, 2024",
    note: "CAAI B & Q1",
    paperUrl: "https://www.mdpi.com/2072-4292/16/12/2177",
  },
];

// Publications - Preprints
export const preprints: Paper[] = [
  {
    badge: "arXiv 2509.11361",
    badgeType: "arxiv",
    authors: "Yichen Han*, Yuhang Han*, Bojun Liu, Zhengpeng Zhou, Zeng Zhang, Guanyu Liu, Yang Yang, Wenli Wang, Isaac N. Shi, Yunyan, Lewei He, Tianyu Shi",
    title: "MAPGD: Multi-Agent Prompt Gradient Descent for Collaborative Prompt Optimization",
    venue: "arXiv preprint arXiv:2509.11361, 2025",
    paperUrl: "https://arxiv.org/pdf/2509.11361",
    codeUrl: "https://github.com/kawhiiiileo/MAPGD",
    stars: "kawhiiiileo/MAPGD",
  },
  {
    badge: "arXiv 2601.19325",
    badgeType: "arxiv",
    authors: "Zichen Wen*, Boxue Yang*, Shuang Chen, Yaojie Zhang, Yuhang Han, Junlong Ke, Cong Wang, Yicheng Fu, Jiawang Zhao, Jiangchao Yao, Xi Fang, Zhen Wang, Hengxing Cai, Lin Yao, Zhifeng Gao, Yanhui Hong, Nang Yuan, Yixuan Li, Guojiang Zhao, Haoyu Tao, Nan Wang, Han Lyu, Guolin Ke, Ning Liao, Xiaoxing Wang, Kai Chen, Zhiyu Li, Feiyu Xiong, Sihan Hu, Kun Chen, Yanfeng Wang, Weinan E†, Linfeng Zhang†",
    title: "Innovator-VL: A Multimodal Large Language Model for Scientific Discovery",
    venue: "arXiv preprint arXiv:2601.19325, 2026",
    paperUrl: "https://arxiv.org/pdf/2601.19325",
    codeUrl: "https://github.com/InnovatorLM/Innovator-VL",
    stars: "InnovatorLM/Innovator-VL",
  },
  {
    badge: "arXiv 2603.xxxxx",
    badgeType: "arxiv",
    authors: "Yuhang Han, Yuyang Wu, Zhengbo Jiao, Yiyu Wang, Shaobo Wang, Hanlin Xu, Xuming Hu, Linfeng Zhang†",
    title: "Bridging Visual Representation and Reinforcement Learning from Verifiable Rewards in Large Vision-Language Models",
    venue: "arXiv preprint arXiv:2603.xxxxx, 2026",
    // paperUrl: "https://arxiv.org/pdf/2603.xxxxx",
    pageUrl: "https://kawhiiiileo.github.io/KAWHI_PAGE/",
    // stars: "InnovatorLM/Innovator-VL",
  },
];

// Experience items
export const experiences = [
  {
    role: "Research Assistant",
    institution: "EPIC Lab, Shanghai Jiao Tong University",
    location: "Shanghai",
    advisor: "Prof. Linfeng Zhang",
    period: "October 2025 – Present",
    topic: "RL-based DLLM",
    outputs: [
      { text: "Innovator-VL", url: "https://github.com/InnovatorLM/Innovator-VL" },
    ],
  },
  {
    role: "Research Assistant",
    institution: "MiLab, Westlake University",
    location: "Hangzhou",
    advisor: "Dr. Siteng Huang, Prof. Donglin Wang",
    period: "Aug. 2024 – Dec. 2025",
    topic: "Efficient Multimodal Large Language Model",
    outputs: [
      { text: "FiCoCo", url: "https://github.com/kawhiiiileo/FiCoCo" },
    ],
  },
];
