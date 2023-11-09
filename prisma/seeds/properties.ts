import { Flat, Prisma } from "@prisma/client";

const properties = [
  {
    id: 1,
    name: "Flat 1",
    city: "London",
    price: 100000,
    nb_rooms: 3,
    surface: 100,
    contract_type: "LMNP",
    rent_amount: 1000,
    need_refresh: true,
    status: "AVAILABLE",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Flat 2",
    price: 200000,
    nb_rooms: 4,
    surface: 200,
    city: "London",
    contract_type: "LMNP",
    rent_amount: 2000,
    need_refresh: false,
    status: "RENTED",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Flat 3",
    price: 300000,
    city: "London",
    nb_rooms: 5,
    surface: 300,
    contract_type: "Airbnb",
    rent_amount: 3000,
    need_refresh: false,
    status: "AVAILABLE",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default properties;
