export interface Work {
  id: number;
  title: string;
  category: "心灵鸡汤" | "武汉故事" | "美食探店";
  description: string;
  image: string;
  link?: string;
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
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Golden%20sunrise%20over%20Wuhan%20Yangtze%20River%20city%20skyline%2C%20warm%20orange%20morning%20light%2C%20beautiful%20bridge%20silhouette%2C%20peaceful%20river%2C%20cinematic%20photography%2C%20professional%20landscape%2C%20no%20people%2C%20high%20quality%2C%208k%2C%20warm%20tones&image_size=square_hd",
  },
  {
    id: 2,
    title: "吉庆街的烟火气",
    category: "武汉故事",
    description: "探寻百年吉庆街的前世今生，记录老武汉的市井生活与人间烟火。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20street%20food%20night%20market%2C%20red%20lanterns%20glowing%2C%20delicious%20food%20stalls%20with%20steam%20rising%2C%20Wuhan%20Jiqing%20Street%20atmosphere%2C%20warm%20cozy%20lighting%2C%20appetizing%20street%20food%2C%20cinematic%20food%20photography%2C%20no%20people%2C%20high%20quality&image_size=square_hd",
  },
  {
    id: 3,
    title: "热干面的秘密",
    category: "美食探店",
    description: "走遍武汉三镇，寻找最地道的热干面，解密芝麻酱的黄金比例。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhan%20famous%20hot%20dry%20noodles%20reganmian%20close%20up%2C%20creamy%20sesame%20paste%20sauce%2C%20chopsticks%20lifting%20noodles%2C%20fresh%20green%20onions%2C%20sesame%20seeds%2C%20appetizing%2C%20wooden%20table%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20no%20people%2C%20delicious%2C%20high%20quality&image_size=square_hd",
  },
  {
    id: 4,
    title: "茶馆里的山城火锅",
    category: "美食探店",
    description: "大热天能够出门的那都是胃口，还能够一起涮火锅的，那绝对是实打实的真爱！和江涛老师围着热火锅边吃边聊，氛围感拉满，高温天的相聚简单又治愈。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Spicy%20Sichuan%20Chongqing%20hot%20pot%20in%20traditional%20Chinese%20teahouse%2C%20red%20chili%20oil%20broth%20bubbling%2C%20fresh%20meat%20vegetables%2C%20steam%20rising%2C%20cozy%20vintage%20teahouse%2C%20wooden%20tables%2C%20warm%20atmosphere%2C%20professional%20food%20photography%2C%20no%20people%2C%20appetizing%2C%20high%20quality&image_size=square_hd",
    link: "https://v.douyin.com/DWRSnAhlxSY/",
  },
  {
    id: 5,
    title: "藕汤印象",
    category: "美食探店",
    description: "happy波带你藕汤印象，藕汤印象这几年发展势头超猛，地道湖北藕汤，粉糯莲藕配浓郁骨汤，暖心暖胃，就是湖北人家的味道。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hubei%20style%20lotus%20root%20pork%20rib%20soup%20in%20traditional%20clay%20pot%2C%20pink%20tender%20lotus%20root%20slices%2C%20steaming%20hot%2C%20homemade%20Chinese%20comfort%20food%2C%20warm%20cozy%20home%20cooking%2C%20professional%20food%20photography%2C%20ceramic%20spoon%2C%20wooden%20table%2C%20no%20people%2C%20delicious%2C%20high%20quality&image_size=square_hd",
    link: "https://v.douyin.com/rtBr2v21bXw/",
  },
  {
    id: 6,
    title: "满天星太珍火锅",
    category: "美食探店",
    description: "happy波带你满天星太珍火锅，徐总约我打卡太珍火锅，正宗老武汉火锅味道，麻辣鲜香，越煮越有味，满天星光下吃火锅氛围感拉满。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Authentic%20old%20Wuhan%20style%20hot%20pot%20restaurant%20at%20night%2C%20warm%20fairy%20string%20lights%20like%20stars%2C%20spicy%20red%20hot%20pot%20steaming%2C%20cozy%20nostalgic%20atmosphere%2C%20delicious%20food%20spread%2C%20vintage%20restaurant%2C%20professional%20food%20photography%2C%20no%20people%2C%20warm%20lighting%2C%20high%20quality&image_size=square_hd",
    link: "https://v.douyin.com/7PAQ8KSUGNw/",
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
