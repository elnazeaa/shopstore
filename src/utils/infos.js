import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/ecommerce-react-context",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  {
    id: 4,
    text: "articles",
    url: "/articles",
  },
  {
    id: 5,
    text: "faq",
    url: "/faq",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const items = [
  {
    id: 0,
    name: "Marta. - Dream Homes Staging",
    text: "Our team often marvels at the support extended to us as clients by the employees at Staging & Design Network. It goes beyond competence and efficiency, and it’s not just one or two great staffers. It’s a pervasive “we’ll go to the ends of the earth for you” culture that informs the day to day operations of this unique company. You inspire us, and we appreciate you!",
  },
  {
    id: 1,
    name: "Michelle B.",
    text: "This is a fabulous resource for agents who stage their listings. Nice selection of rental items, owned by high-end builders, and stagers. Easy to use their user-friendly website, and order online late at night (because you know there just isn’t enough time during the day with this market). I haven’t used any other rental place since I found them, and all my listings look great staged!",
  },
  {
    id: 2,
    name: "Darcy L. - Windermere",
    job: "intern",
    text: "Staging & Design Network is a gold mine for me. Over the past number of years, the market has been unpredictable, but our results couldn’t be. Having spent thousands with staging companies over the years, I could never find stylish and high-quality rental inventory available specifically for staging – until SDN. I highly recommend Staging & Design Network to any company looking for a suite of services tailored to your specific needs, supported with first-class service.",
  },
  {
    id: 3,
    name: "Alina",
    text: "Loved my experience with SDN! I looked everywhere for options with a different feel than the standard event furniture, which was really hard to find in Seattle…until now! The items SDN didn’t have, I purchased through them. Those pieces I bought are now in the Rental Pool. Such a great feeling that the items I purchased are not going to waste. The whole business model is super clever!",
  },
];

const faqs = [
  {
    page: "orders",
    links: [
      {
        id: 0,
        question: "How Do I Start A Rental Order?",
        answer:
          "We know putting together a design is a process and we want to give you as much flexibility as possible to get it perfect. You can easily add or remove items through our website until 4:30 PM, 2 full days prior to delivery and will-call. The reason for The Freeze is so that we have time to pull the items and optimize the route for our field crew. As an example, orders delivering on a Wednesday freeze on Monday at 4:30 PM. Keep in mind, a Monday delivery will freeze on Thursday at 4:30 PM.Please keep in mind that Mondays and Tuesdays are our busiest days. If you would like these days, please plan your order accordingly.",
      },
      {
        id: 1,
        question: "What Is The Freeze?",
        answer:
          "The reason for The Freeze is so that we have time to pull the items and optimize the route for our field crew. As an example, orders delivering on a Wednesday freeze on Monday at 4:30 PM. Keep in mind, a Monday delivery will freeze on Thursday at 4:30 PM.Please keep in mind that Mondays and Tuesdays are our busiest days. If you would like these days, please plan your order accordingly.",
      },
      {
        id: 2,
        question: "Are There Rental Minimums?",
        answer:
          "There IS a minimum 30-day rental for every item, even if you only need it for a day or week. After the first 30-days, you are only charged for the days your items are renting.After the 30th day, your order rental will accrue daily and you will be charged every 7 days or on the day the items are returned, whichever comes first.",
      },
      {
        id: 3,
        question: "What If I Want To Return Before The 30-Day Minimum Is Met?",
        answer:
          "You are welcome to return the items sooner, but will still be charged the 30-day minimum.",
      },
      {
        id: 4,
        question: "How Do I Add Items To An Existing Order?",
        answer:
          "After you have created an order, you have two ways to add to an order. Start your shopping like you are creating a new order. ",
      },
      {
        id: 5,
        question: "How Do I Cancel An Item Off An Order?",
        answer:
          "If you do not see these options, the order is already renting, or the order is in the Freeze window. Once your order is delivered, if you need any additional items you will need to create a new order.",
      },
      {
        id: 6,
        question: "Do I Have To Pay To Rent My Own Inventory?",
        answer:
          "When you click the “Checkout Button”, you will have the option of adding all the items in your cart to an open order.If you just need to add a single item, a new button will appear on the product page the next time you are shopping out of the same location. The button will allow you to instantly add an item to any current open order at that location.",
      },
      {
        id: 7,
        question: "Does The Delivery Team Wear Walkthrough Booties?",
        answer:
          "Yes. For the first 30 days of each rental, you will pay 70% of your item’s published rental value. There will be no additional daily rental charge after the first 30-day period of your rental order (on your items). Once you’ve paid the first 30 days of the rental, you can keep using it until you don’t need it.",
      },
      {
        id: 8,
        question: "Is There A Daily Rental Option?",
        answer:
          "You are responsible for maintaining the rental items in good and complete condition.Items for rent are meant to be utilized for staging purposes only, they are not intended for daily use. We understand there may be occasional use by a potential buyer such as sitting on a sofa or chair. This excludes any damage that may come from pets or owner-occupied homes.",
      },
      {
        id: 9,
        question: "What Happens If I Damage Or Lose Part Of A Set?",
        answer:
          " When items are rented that are intended to go into an owner-occupied home, you are responsible for advising the homeowner against using the items.",
      },
      {
        id: 10,
        question: "What Is Included In My Final Bill?",
        answer:
          "        In the event of damage or loss not covered by the Damage Waiver Fee, SDN will charge you for the costs of lost rent as well as replacing or repairing the rental items.",
      },
    ],
  },
  {
    page: "billing",
    links: [
      {
        id: 0,
        question: "How To Change A Credit Card On A Rental Order?",
        answer:
          "Once you have completed these steps, any future payments related to that order will charge the newly assigned card. This does not change any past charges related to that order. If you need to make adjustments, you need to update your card before the Freeze.",
      },
      {
        id: 1,
        question: "How To See What Credit Card Is Assigned To Which Order?",
        answer:
          "For any open or renting order, you can quickly see what credit card is assigned to your order by following these steps:",
      },
      {
        id: 2,
        question: "When And How Do I Pay For My Rental?",
        answer:
          "When you submit your online order, you will provide your credit card at checkout (we only accept VISA or MasterCard). We place an authorization on your card which may appear as a $1.00 or less verification charge on your credit card account. We don’t charge the entire order total until the 8th day from checkout or the delivery/pickup date, whichever comes first.",
      },
      {
        id: 3,
        question: "How Do I Calculate My First 30 Days?",
        answer:
          "The charge will be for the first 30-day rental. Sales tax, a damage waiver fee, and delivery services (if applicable) will be included in your total.",
      },
      {
        id: 4,
        question: "What If I Want To Keep My Items Longer Than 30 Days?",
        answer:
          "After you have completed checkout your START DATE has been initiated and a 7-day grace period begins. During this grace period, items may be added or deleted at will. On day 8 your 30-day rental term begins, regardless of if you have received the inventory through delivery or will-call pick up.",
      },
      {
        id: 5,
        question: "What Is The Damage Waver Fee?",
        answer:
          "If you receive your inventory during the 7-day grace period, your 30-day rental period begins on the day of delivery or will-call pick up.",
      },
      {
        id: 6,
        question: "Billing Policy",
        answer:
          "Renewals are automatically pre-billed for 7 days on day 31 of your rental period if items have not been returned or a destage request has not been made.",
      },
      {
        id: 7,
        question: "What Is Included In My Final Bill?",
        answer:
          "Destage requests must be submitted at least 7 days in advance of the date requested. Your destage request must be confirmed or you will continue to be charged for pre-billed renewals. If a partial return is made, you will only be billed for the items still renting.",
      },
    ],
  },
  {
    page: "delivery & scheduling",
    links: [
      {
        id: 0,
        question: "How Much Is Delivery And Setup?",
        answer:
          "SDN offers one-touch placement, destage, and will-call. Delivery includes two professional movers and one truck. Delivery & Destage fees on rental orders above $1,000 before taxes and fees are FREE! (Some exclusions apply). For orders valued at less than $500, one-way rates start at $119. For orders valued between $500-$999, one-way rates start at $169. Your base delivery fees cover up to 30 minutes of drive time and a one-time placement of furniture.",
      },
      {
        id: 1,
        question: "Requested Delivery & Destage Or Will-Call Date",
        answer:
          "You will request your desired delivery & destage or Will-Call date at checkout, but are subject to confirmation. To schedule a destage go to Orders on your account page and click “Request Destage”.We will contact you within 24 HOURS to confirm your requests.",
      },
      {
        id: 2,
        question: "Delivery & Destage | One-Way Rates",
        answer:
          "We know putting together a design is a process and we want to give you as much flexibility as possible to get it perfect. You can easily add or remove items through our website until 4:30 PM, 2 full days prior to delivery and will-call. The reason for The Freeze is so that we have time to pull the items and optimize the route for our field crew. As an example, orders delivering on a Wednesday freeze on Monday at 4:30 PM. Keep in mind, a Monday delivery will freeze on Thursday at 4:30 PM.",
      },
      {
        id: 3,
        question: "Will Call Options & Rates",
        answer:
          "Please keep in mind that Mondays and Tuesdays are our busiest days. If you would like these days, please plan your order accordingly.",
      },
      {
        id: 4,
        question: "Transfer Fees",
        answer:
          "The reason for The Freeze is so that we have time to pull the items and optimize the route for our field crew. As an example, orders delivering on a Wednesday freeze on Monday at 4:30 PM. Keep in mind, a Monday delivery will freeze on Thursday at 4:30 PM.",
      },
    ],
  },
];

export default faqs;

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
