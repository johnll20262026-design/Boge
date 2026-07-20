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
    title: "牛伢狗面馆",
    category: "美食探店",
    description: "happy波带你牛伢狗面馆，江岸后湖挖到宝藏老牌面馆，地道武汉味，面条筋道汤底浓郁，值得打卡！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Delicious%20Wuhan%20beef%20noodles%20in%20ceramic%20bowl%2C%20rich%20brown%20beef%20broth%2C%20tender%20beef%20slices%2C%20green%20onions%2C%20chopsticks%2C%20steaming%20hot%2C%20traditional%20Chinese%20noodle%20restaurant%2C%20professional%20food%20photography%2C%20wooden%20table%2C%20no%20people%2C%20appetizing%2C%20warm%20lighting%2C%20high%20quality&image_size=square_hd&v=20260721",
    link: "https://v.douyin.com/r9IlcMXmOCU/",
  },
  {
    id: 2,
    title: "毛大佑汉派烤虾球",
    category: "美食探店",
    description: "happy波带你毛大佑汉派烤虾球，别被名字骗了！地道汉派烧烤，烤虾球外焦里嫩，下酒神器！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhan%20style%20grilled%20shrimp%20balls%20on%20bamboo%20skewers%2C%20Chinese%20BBQ%2C%20spicy%20golden%20brown%20roasted%20shrimp%2C%20charcoal%20grill%2C%20appetizing%20street%20food%2C%20professional%20food%20photography%2C%20warm%20night%20market%20atmosphere%2C%20no%20people%2C%20delicious%2C%20high%20quality&image_size=square_hd&v=20260721",
    link: "https://v.douyin.com/-piF6YdkmSA/",
  },
  {
    id: 3,
    title: "郑满意火锅",
    category: "美食探店",
    description: "happy波带你郑满意火锅，到光谷不打卡光谷排队王等于白来！正宗火锅味道，人气爆棚！",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Popular%20Wuhan%20spicy%20hot%20pot%20in%20restaurant%2C%20red%20chili%20oil%20broth%20bubbling%2C%20fresh%20meat%20and%20vegetables%2C%20cozy%20restaurant%20atmosphere%2C%20steaming%20hot%2C%20delicious%20food%20spread%2C%20professional%20food%20photography%2C%20warm%20lighting%2C%20no%20people%2C%20high%20quality&image_size=square_hd&v=20260721",
    link: "https://v.douyin.com/33Ohfc-g7fw/",
  },
  {
    id: 4,
    title: "茶馆里的山城火锅",
    category: "美食探店",
    description: "大热天能够出门的那都是胃口，还能够一起涮火锅的，那绝对是实打实的真爱！和江涛老师围着热火锅边吃边聊，氛围感拉满，高温天的相聚简单又治愈。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Spicy%20Sichuan%20Chongqing%20hot%20pot%20in%20traditional%20Chinese%20teahouse%2C%20red%20chili%20oil%20broth%20bubbling%2C%20fresh%20meat%20vegetables%2C%20steam%20rising%2C%20cozy%20vintage%20teahouse%2C%20wooden%20tables%2C%20warm%20atmosphere%2C%20professional%20food%20photography%2C%20no%20people%2C%20appetizing%2C%20high%20quality&image_size=square_hd&v=20260721",
    link: "https://v.douyin.com/DWRSnAhlxSY/",
  },
  {
    id: 5,
    title: "藕汤印象",
    category: "美食探店",
    description: "happy波带你藕汤印象，藕汤印象这几年发展势头超猛，地道湖北藕汤，粉糯莲藕配浓郁骨汤，暖心暖胃，就是湖北人家的味道。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hubei%20style%20lotus%20root%20pork%20rib%20soup%20in%20traditional%20clay%20pot%2C%20pink%20tender%20lotus%20root%20slices%2C%20steaming%20hot%2C%20homemade%20Chinese%20comfort%20food%2C%20warm%20cozy%20home%20cooking%2C%20professional%20food%20photography%2C%20ceramic%20spoon%2C%20wooden%20table%2C%20no%20people%2C%20delicious%2C%20high%20quality&image_size=square_hd&v=20260721",
    link: "https://v.douyin.com/rtBr2v21bXw/",
  },
  {
    id: 6,
    title: "满天星太珍火锅",
    category: "美食探店",
    description: "happy波带你满天星太珍火锅，徐总约我打卡太珍火锅，正宗老武汉火锅味道，麻辣鲜香，越煮越有味，满天星光下吃火锅氛围感拉满。",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Authentic%20old%20Wuhan%20style%20hot%20pot%20restaurant%20at%20night%2C%20warm%20fairy%20string%20lights%20like%20stars%2C%20spicy%20red%20hot%20pot%20steaming%2C%20cozy%20nostalgic%20atmosphere%2C%20delicious%20food%20spread%2C%20vintage%20restaurant%2C%20professional%20food%20photography%2C%20no%20people%2C%20warm%20lighting%2C%20high%20quality&image_size=square_hd&v=20260721",
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
