export interface Work {
  id: number;
  title: string;
  category: "心灵鸡汤" | "武汉故事" | "美食探店";
  description: string;
  image: string;
}

export interface Service {
  id: number;
  icon: "Mic2" | "UtensilsCrossed" | "Store" | "Video" | "Star";
  title: string;
  description: string;
}

export interface Stat {
  number: number;
  label: string;
  suffix: string;
}

export const personalInfo = {
  name: "车站路波波",
  nickname: "波哥",
  wechatNickname: "happy波",
  wechatId: "hulunbo",
  phone: "13986012778",
  title: "武汉资深电台主持人 · 美食探店达人",
  location: "湖北武汉",
  douyinId: "633592456",
  tagline: "一个每天给你不一样的心灵鸡汤和武汉的那些事",
  bio: "一个跑来跑去的武汉演员，一个可以把小朋友黑哭的电视台主持人，一个可以把别个店吃垮的美食主持人。波哥，土生土长的武汉人，深耕媒体行业数十年，用亲切幽默的风格讲述武汉故事，用镜头记录地道武汉味。",
  experience: [
    "武汉电视台主持人",
    "武汉电台资深节目主持人",
    "抖音本地生活美食探店达人",
    "武汉本土知名演员",
  ],
};

export const works: Work[] = [
  {
    id: 1,
    title: "早安武汉",
    category: "心灵鸡汤",
    description: "每天清晨，波哥用温暖的声音唤醒武汉，分享人生感悟，传递正能量。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=warm%20morning%20sunrise%20over%20Wuhan%20Yangtze%20River%20bridge%2C%20golden%20light%20reflecting%20on%20water%2C%20city%20skyline%20silhouette%2C%20new%20day%20begins%2C%20hopeful%20atmosphere%2C%20beautiful%20landscape%20photography%2C%20peaceful%20morning%2C%20no%20people&image_size=square",
  },
  {
    id: 2,
    title: "吉庆街的烟火气",
    category: "武汉故事",
    description: "探寻百年吉庆街的前世今生，记录老武汉的市井生活与人间烟火。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20Wuhan%20Jiqing%20Street%20food%20market%20at%20night%2C%20neon%20lights%2C%20street%20food%20stalls%20with%20hot%20pot%20and%20skewers%2C%20food%20close%20ups%2C%20vibrant%20atmosphere%2C%20documentary%20photography%2C%20Wuhan%20nightlife%2C%20street%20scenes%2C%20no%20people%20faces%2C%20food%20only&image_size=square",
  },
  {
    id: 3,
    title: "热干面的秘密",
    category: "美食探店",
    description: "走遍武汉三镇，寻找最地道的热干面，解密芝麻酱的黄金比例。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20bowl%20of%20Wuhan%20hot%20dry%20noodles%20reganmian%2C%20sesame%20paste%20coating%20noodles%2C%20chopsticks%20on%20side%2C%20chopped%20scallions%2C%20pickled%20vegetables%2C%20traditional%20Wuhan%20breakfast%20on%20wooden%20table%2C%20warm%20morning%20light%2C%20food%20photography%2C%20no%20people%2C%20no%20face&image_size=square",
  },
  {
    id: 4,
    title: "人生百味",
    category: "心灵鸡汤",
    description: "品美食，悟人生，波哥与你聊聊生活中的那些酸甜苦辣。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=assorted%20Wuhan%20local%20dishes%20on%20wooden%20table%2C%20hot%20dry%20noodles%2C%20soup%20dumplings%2C%20steamed%20buns%2C%20soy%20sauce%20cruet%2C%20chopsticks%2C%20warm%20restaurant%20atmosphere%2C%20comfort%20food%2C%20food%20photography%2C%20no%20people%2C%20overhead%20shot&image_size=square",
  },
  {
    id: 5,
    title: "汉阳造的记忆",
    category: "武汉故事",
    description: "走进汉阳造旧厂区，感受武汉工业历史与文创艺术的碰撞。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20industrial%20factory%20buildings%20in%20Wuhan%20Hanyang%20creative%20district%2C%20red%20brick%20walls%2C%20graffiti%20art%2C%20vintage%20machinery%2C%20modern%20art%20installations%2C%20sunlight%20through%20windows%2C%20industrial%20heritage%2C%20architecture%20photography%2C%20no%20people&image_size=square",
  },
  {
    id: 6,
    title: "小龙虾的夏天",
    category: "美食探店",
    description: "武汉夏天的正确打开方式——油焖大虾、清蒸虾、蒜蓉虾全攻略。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spicy%20Wuhan%20crayfish%20xiaolongxia%20on%20large%20plate%2C%20red%20chili%20oil%2C%20garlic%2C%20beer%20mugs%2C%20outdoor%20night%20food%20stall%20table%2C%20festive%20summer%20atmosphere%2C%20delicious%20seafood%2C%20food%20photography%2C%20no%20people%2C%20close%20up%20food&image_size=square",
  },
];

export const services: Service[] = [
  {
    id: 1,
    icon: "Store",
    title: "商家探店推广",
    description: "专业团队探店拍摄，抖音本地流量扶持，助力商家品牌曝光与引流到店。",
  },
  {
    id: 2,
    icon: "Mic2",
    title: "活动主持策划",
    description: "数十年电台电视台主持经验，承接各类商业活动、开业庆典、婚礼主持。",
  },
  {
    id: 3,
    icon: "Video",
    title: "短视频内容创作",
    description: "从脚本策划到拍摄剪辑，提供一站式短视频内容解决方案。",
  },
  {
    id: 4,
    icon: "Star",
    title: "品牌代言合作",
    description: "本土知名KOL，为优质品牌代言，提升品牌在武汉市场的认知度。",
  },
];

export const stats: Stat[] = [
  { number: 1000, label: "作品数量", suffix: "+" },
  { number: 4.5, label: "万粉丝", suffix: "" },
  { number: 46.6, label: "万获赞", suffix: "" },
  { number: 200, label: "合作商家", suffix: "+" },
];
