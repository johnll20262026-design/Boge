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
    image: "/images/work-1-zaoan.svg",
  },
  {
    id: 2,
    title: "吉庆街的烟火气",
    category: "武汉故事",
    description: "探寻百年吉庆街的前世今生，记录老武汉的市井生活与人间烟火。",
    image: "/images/work-2-jiqingjie.svg",
  },
  {
    id: 3,
    title: "热干面的秘密",
    category: "美食探店",
    description: "走遍武汉三镇，寻找最地道的热干面，解密芝麻酱的黄金比例。",
    image: "/images/work-3-reganmian.svg",
  },
  {
    id: 4,
    title: "茶馆里的山城火锅",
    category: "美食探店",
    description: "大热天能够出门的那都是胃口，还能够一起涮火锅的，那绝对是实打实的真爱！和江涛老师围着热火锅边吃边聊，氛围感拉满，高温天的相聚简单又治愈。",
    image: "/images/work-4-huoguo1.svg",
    link: "https://v.douyin.com/DWRSnAhlxSY/",
  },
  {
    id: 5,
    title: "藕汤印象",
    category: "美食探店",
    description: "happy波带你藕汤印象，藕汤印象这几年发展势头超猛，地道湖北藕汤，粉糯莲藕配浓郁骨汤，暖心暖胃，就是湖北人家的味道。",
    image: "/images/work-5-outang.svg",
    link: "https://v.douyin.com/rtBr2v21bXw/",
  },
  {
    id: 6,
    title: "满天星太珍火锅",
    category: "美食探店",
    description: "happy波带你满天星太珍火锅，徐总约我打卡太珍火锅，正宗老武汉火锅味道，麻辣鲜香，越煮越有味，满天星光下吃火锅氛围感拉满。",
    image: "/images/work-6-huoguo2.svg",
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
