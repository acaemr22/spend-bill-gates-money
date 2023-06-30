import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    billGatesMoney: 100000000000,
    productItems: [
      {
        url: "https://neal.fun//spend/images/big-mac.jpg",
        name: "Big Mac",
        price: "$2",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/flip-flops.jpg",
        name: "Flip Flops",
        price: "$3",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/coca-cola-pack.jpg",
        name: "Coca-Cola Pack",
        price: "$5",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/movie-ticket.jpg",
        name: "Movie Ticket",
        price: "$12",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/book.jpg",
        name: "Book",
        price: "$15",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/lobster-dinner.jpg",
        name: "Lobster Dinner",
        price: "$45",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/video-game.jpg",
        name: "Video Game",
        price: "$60",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/amazon-echo.jpg",
        name: "Amazon Echo",
        price: "$99",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/year-of-netflix.jpg",
        name: "Year of Netflix",
        price: "$100",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/air-jordans.jpg",
        name: "Air Jordans",
        price: "$125",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/airpods.jpg",
        name: "Airpods",
        price: "$199",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/gaming-console.jpg",
        name: "Gaming Console",
        price: "$299",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/drone.jpg",
        name: "Drone",
        price: "$350",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/smartphone.jpg",
        name: "Smartphone",
        price: "$699",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/bike.jpg",
        name: "Bike",
        price: "$800",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/kitten.jpg",
        name: "Kitten",
        price: "$1,500",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/puppy.jpg",
        name: "Puppy",
        price: "$1,500",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/auto-rickshaw.jpg",
        name: "Auto Rickshaw",
        price: "$2,300",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/horse.jpg",
        name: "Horse",
        price: "$2,500",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/acre-of-farmland.jpg",
        name: "Acre of Farmland",
        price: "$3,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/designer-handbag.jpg",
        name: "Designer Handbag",
        price: "$5,500",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/hot-tub.jpg",
        name: "Hot Tub",
        price: "$6,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/luxury-wine.jpg",
        name: "Luxury Wine",
        price: "$7,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/diamond-ring.jpg",
        name: "Diamond Ring",
        price: "$10,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/jet-ski.jpg",
        name: "Jet Ski",
        price: "$12,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/rolex.jpg",
        name: "Rolex",
        price: "$15,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/ford-f-150.jpg",
        name: "Ford F-150",
        price: "$30,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/tesla.jpg",
        name: "Tesla",
        price: "$75,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/monster-truck.jpg",
        name: "Monster Truck",
        price: "$150,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/ferrari.jpg",
        name: "Ferrari",
        price: "$250,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/single-family-home.jpg",
        name: "Single Family Home",
        price: "$300,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/gold-bar.jpg",
        name: "Gold Bar",
        price: "$700,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/mcdonalds-franchise.jpg",
        name: "McDonalds Franchise",
        price: "$1,500,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/superbowl-ad.jpg",
        name: "Superbowl Ad",
        price: "$5,250,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/yacht.jpg",
        name: "Yacht",
        price: "$7,500,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/m1-abrams.jpg",
        name: "M1 Abrams",
        price: "$8,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/formula-1-car.jpg",
        name: "Formula 1 Car",
        price: "$15,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/apache-helicopter.jpg",
        name: "Apache Helicopter",
        price: "$31,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/mansion.jpg",
        name: "Mansion",
        price: "$45,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/make-a-movie.jpg",
        name: "Make a Movie",
        price: "$100,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/boeing-747.jpg",
        name: "Boeing 747",
        price: "$148,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/mona-lisa.jpg",
        name: "Mona Lisa",
        price: "$780,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/skyscraper.jpg",
        name: "Skyscraper",
        price: "$850,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/cruise-ship.jpg",
        name: "Cruise Ship",
        price: "$930,000,000",
        number: 0,
      },
      {
        url: "https://neal.fun//spend/images/nba-team.jpg",
        name: "NBA Team",
        price: "$2,120,000,000",
        number: 0,
      },
    ],
    decInterval: null,
    incInterval: null,
  },
  reducers: {
    incNumber: (state, action) => {
      const { name, num, amount } = action.payload;
      state.productItems = state.productItems.map((item) =>
        item.name === name
          ? { ...item, number: (item.number = item.number + amount) }
          : item
      );

      state.billGatesMoney -= state.billGatesMoney - num >= 0 ? num : 0;
    },
    decNumber: (state, action) => {
      const { name, num, amount } = action.payload;
      state.productItems = state.productItems.map((item) =>
        item.name === name
          ? { ...item, number: (item.number = item.number - amount) }
          : item
      );
      state.billGatesMoney = num + state.billGatesMoney;
    },
  },
});

export default productsSlice.reducer;
export const { decNumber, incNumber } = productsSlice.actions;
