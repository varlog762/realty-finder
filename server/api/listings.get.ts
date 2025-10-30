export default defineEventHandler(() => {
  const mockListings = [
    {
      id: "12345",
      type: "House",
      region: "North",
      district: "Downtown",
      address: "123 Main St, Anytown",
      status: "For Sale",
      area: "1,200 sqft",
      price: 450000,
      detailsUrl: "/listings/12345", // Наша "заглушка" для Actions
    },
    {
      id: "67890",
      type: "Apartment",
      region: "South",
      district: "Suburb",
      address: "456 Oak Ave, Sometown",
      status: "Sold",
      area: "850 sqft",
      price: 280000,
      detailsUrl: "/listings/67890",
    },
    {
      id: "11223",
      type: "Land",
      region: "East",
      district: "Rural",
      address: "789 Pine Rd, Otherville",
      status: "Pending",
      area: "5 acres",
      price: 150000,
      detailsUrl: "/listings/11223",
    },
  ];

  return mockListings;
});
