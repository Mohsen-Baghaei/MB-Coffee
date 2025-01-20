import { createSlice } from "@reduxjs/toolkit";
import mainAbout from "../../assets/about/mainAbout.png";
import secondAbout from "../../assets/about/secondAbout.png";
import thirdAbout from "../../assets/about/thirdAbout.png";
import { RootState } from "../store";
import Img2 from "../../assets/coffee2.png";

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
    text: "Some days make the coffee, other days the coffee makes you",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Reza Nikafkar",
    text: "Not all wander are lost; some are simply looking for coffee",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Hassan Asadi",
    text: "Not all wander are lost; some are simply looking for coffee",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Reza Kamali",
    text: "If you’re waiting for a sign to have another coffee, this is it",
    img: "https://picsum.photos/103/103",
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

export type AboutStateType = {
  title: string;
  img: string;
  text: string[];
};

const initialState: AboutStateType[] = [
  {
    title: "Our Heritage",
    img: mainAbout,
    text: [
      "Our story begins in 1971 along the cobblestone streets of Seattle’s historic Pike Place Market. It was here where MB Coffee opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home. Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.",
      "Ten years later, a young New Yorker named Howard Schultz would walk through these doors and become captivated with MB Coffee coffee from his first sip. After joining the company in 1982, a different cobblestone road would lead him to another discovery. It was on a trip to Milan in 1983 that Howard first experienced Italy’s coffeehouses, and he returned to Seattle inspired to bring the warmth and artistry of its coffee culture to MB Coffee. By 1987, we swapped our brown aprons for green ones and embarked on our next chapter as a coffeehouse.",
      "MB Coffee would soon expand to Chicago and Vancouver, Canada and then on to California, Washington, D.C. and New York. By 1996, we would cross the Pacific to open our first store in Japan, followed by Europe in 1998 and China in 1999. Over the next two decades, we would grow to welcome millions of customers each week and become a part of the fabric of tens of thousands of neighborhoods all around the world. In everything we do, we are always dedicated to Our Mission: With every cup, with every conversation, with every community - we nurture the limitless possibilities of human connection.",
    ],
  },
  {
    title: "Coffee & Craft",
    img: secondAbout,
    text: [
      "It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the master roasters who coax the best from every bean, and to the barista who serves it with care. We are committed to the highest standards of quality and service, embracing our heritage while innovating to create new experiences to savor.",
      "The cup of MB Coffee coffee you hold in your hand is more than just a drink. It’s an expertly handcrafted beverage, a daily ritual, the final step in an incredible, global, coffee-production story connecting you to farmers, agronomists, roasters, buyers, engineers, Green Apron baristas and more. MB Coffee was founded on a love for high-quality coffee. Coffee is our heart. We invite you to learn about our story – the coffee fields to your stores, the many hands that nurture the coffee along the way, the incredible journey of a little bean that ends in your cup.",
    ],
  },
  {
    title: "Our Partners",
    img: thirdAbout,
    text: [
      "We like to say that we are not in the coffee business serving people, but in the people business serving coffee. Our employees – who we call partners – are at the heart of the MB Coffee experience. We are committed to making our partners proud and investing in their health, well-being and success and to creating a culture of belonging where everyone is welcome.",
    ],
  },
];

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export const aboutContent = (state: RootState) => state.about;

export default aboutSlice.reducer;
