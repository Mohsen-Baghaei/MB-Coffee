import coffeeregister1 from "../../assets/register/coffeeregister1.png";
import coffeeregister2 from "../../assets/register/coffeeregister2.png";
import coffeeregister3 from "../../assets/register/coffeeregister3.png";
import coffeeregister4 from "../../assets/register/coffeeregister4.png";
import coffeeregister5 from "../../assets/register/coffeeregister5.png";
import coffeeregister6 from "../../assets/register/coffeeregister6.png";
import coffeeregister7 from "../../assets/register/coffeeregister7.png";
import coffeeregister8 from "../../assets/register/coffeeregister8.png";
import coffeeregister9 from "../../assets/register/coffeeregister9.png";
import coffeeregister10 from "../../assets/register/coffeeregister10.png";
import Img2 from "../../assets/coffee2.png";

export const pictutes = [
  coffeeregister1,
  coffeeregister2,
  coffeeregister3,
  coffeeregister4,
  coffeeregister5,
  coffeeregister6,
  coffeeregister7,
  coffeeregister8,
  coffeeregister9,
  coffeeregister10,
];

export type StateOptionsType = {
  name: string;
};

export const stateOptions: StateOptionsType[] = [
  { name: "Azerbaijan sharghi" },
  { name: "Azerbaijan gharbi" },
  { name: "Ardabil" },
  { name: "Isfahan" },
  { name: "Alborz" },
  { name: "Ilam" },
  { name: "Bushehr" },
  { name: "Tehran" },
  { name: "Chaharmahal and Bakhtiari" },
  { name: "Khorasan jonobi" },
  { name: " Khorasan Razavi" },
  { name: "Khorasan shomali" },
  { name: "Khuzestan" },
  { name: "Zanjan" },
  { name: "Semnan" },
  { name: "Sistan and Baluchestan" },
  { name: "Fars" },
  { name: "Qazvin" },
  { name: "Qom" },
  { name: "Golestan" },
  { name: "Gilan" },
  { name: "Lorestan" },
  { name: "Mazandaran" },
  { name: "Markazi" },
  { name: "Hormozgan" },
  { name: "Hamadan" },
  { name: "Kurdistan" },
  { name: "Kerman" },
  { name: "Kermanshah" },
  { name: "Kohgiluyeh and Boyer-Ahmad" },
  { name: "Yazd" },
];

export type TestimonialDataType = {
  id: number;
  name: string;
  text: string;
  img: string;
};

export const TestimonialData: TestimonialDataType[] = [
  {
    id: 1,
    name: "Mohsen Baghaei",
    text: "I no longer go to Starbucks for my coffee. I purchase your bags of coffee, specifically Evangeline's Blend, and brew at home. Your coffee is amazing and I'm happy to eliminate pesticides from my coffee. Thank you!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Reza Nikafkar",
    text: "You have not tried fresh coffee until you've tried Fresh Coffee Scoop coffee. We saw this coffee roasted meticulously and shipped as soon as it comes out of the roaster. Just try one bag and you will be hooked. We are true coffee and this is the only coffee that suits our tastes. Try it in a french press for an unbelievable fresh coffee experience!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Hassan Asadi",
    text: "I purchased your coffee (coffee lover's blend) this weekend at Rice's and I am hoooked. I opened my bag of beans and the aroma was incredible. I never realized that the coffee could smell that good. I couldn't wait to grind them up and make a pot. By far the best coffee I have ever brewed at home. I am going to be spreading the word to my other coffee lovers. Thank you.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Reza Kamali",
    text: "I have been a bit slack in the coffee ordering as of late...the other day my 17 year old got all over me saying, stop buying average coffee just because you have coupons and get back to ordering the best coffee around from Uncle Warren...enough said :)",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Reza Alborzi",
    text: "My favorite espresso. Anyone who enjoys a good espresso should definitely order their espresso!! And its clean, like all their coffee; no added poisons. Can't beat that. Enjoy!!",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 6,
    name: "Maryam Shoja",
    text: "Your Komodo Decaf coffee is the best decaf I've ever tasted. I really like the full-bodied, low-acid, espresso type of coffee, and it seems hard to find in a decaf coffee. So glad to have discovered The Coffee Scoop.",
    img: "https://picsum.photos/106/106",
  },
  {
    id: 7,
    name: "Ahmad IranManesh",
    text: "I tried your coffee this past summer when my husband and I started going to the Wrightstown Farmer's market. I haven't missed a week since for your delicious coffee. I used to buy the very popular coffee and found that yours was better tasting, better kept and made the perfect cup every time!! I even got my other family member hooked on it as well!! Thank you for the best cup of coffee!",
    img: "https://picsum.photos/107/107",
  },
  {
    id: 8,
    name: "Mohammad Akhbari",
    text: "I got hooked on your Komodo DECAF last summer at the Stockton Farmers Market...and was crushed to find you are not there this year. Never had a decaf coffee that is so rich in flavor (I only drink decaf), and my son who has some issues with gastric reflux can drink only this coffee. I have found your beans at other places, so I am happy!",
    img: "https://picsum.photos/108/108",
  },
  {
    id: 9,
    name: "Mohammad Akrami",
    text: "Have you ever wished that coffee could taste as good as the aroma? Mostly I am disappointed. But your coffee tastes as good as it smells. It's the best coffee I have ever had... period!",
    img: "https://picsum.photos/109/109",
  },
  {
    id: 10,
    name: "Reza Abedi",
    text: "The best coffee yet. Being from the Northwest around the Seattle area and exposed to many famous brands of coffee, and I've tried them all. This is the best yet. Anyone that hasn't tried yours is missing out. Even sending your coffee across the country, it is still the freshest I've had.",
    img: "https://picsum.photos/110/110",
  },
];

export const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export type ServicesDataType = {
  id: number;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
};

export const ServicesData: ServicesDataType[] = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    aosDelay: "500",
  },
];
