import React, { useState, useEffect, useRef } from "react";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showBeforeTaxes, setShowBeforeTaxes] = useState(false);
  const filterBarRef = useRef(null);
  const [sortOption, setSortOption] = useState("");

  const mockData = { 
    // Mock data unchanged for brevity
    Cabins: [
        {
          id: 1,
          name: "Hwacheon-myeon, Hongcheon",
          location: "South Korea",
          distance: "5,681 kilometres away",
          date: "4–9 Jan",
          price: "₹39,167",
          rating: 4.88,
          image: "https://a0.muscache.com/im/pictures/32e8b4a0-83ff-4dba-8253-5340d8d05215.jpg?im_w=720&im_format=avif",
        },
        {
          id: 2,
          name: "Tabanan",
          location: "Indonesia",
          distance: "4,773 kilometres away",
          date: "9–14 Jan",
          price: "₹4,06,062",
          rating: 4.92,
          image: "https://a0.muscache.com/im/pictures/91fd04fa-b271-4335-8f18-61384692cd48.jpg?im_w=720&im_format=avif",
        },
        {
          "id": 3,
          "name": "Mountain Log Cabin",
          "location": "Colorado, USA",
          "distance": "9,000 kilometres away",
          "date": "10–15 Feb",
          "price": "₹20,000 total before taxes",
          "rating": 4.9,
          "image": "https://images.squarespace-cdn.com/content/v1/5f7c262aa662414be19169fa/1607363529810-6UC9PRE5S8TX6ZUQX8C1/mt_rainier.jpg"
        },
        {
          "id": 4,
          "name": "Forest Hideaway",
          "location": "British Columbia, Canada",
          "distance": "8,500 kilometres away",
          "date": "15–20 Feb",
          "price": "₹22,500 total before taxes",
          "rating": 4.8,
          "image": "https://www.aspinallfoundation.org/media/3723/img_5932_sue-edit_small.jpg?center=0.35204081632653061,0.57823129251700678&mode=crop&quality=75&width=934&height=495&rnd=132024991680000000"
        }
      ],
      Icons: [
        {
          id: 3,
          name: "Lucuan-Baay",
          location: "Philippines",
          distance: "4,667 kilometres away",
          date: "21–26 Dec",
          price: "₹71,899",
          rating: 4.9,
          image: "https://a0.muscache.com/im/pictures/610a5be2-bdaa-44cc-9c80-facbcc38aa9f.jpg?im_w=720&im_format=avif",
        },
        {
          "id": 2,
          "name": "Eiffel Tower View Apartment",
          "location": "Paris, France",
          "distance": "7,200 kilometres away",
          "date": "5–10 March",
          "price": "₹50,000 total before taxes",
          "rating": 4.95,
          "image": "https://images.stockcake.com/public/2/3/6/23600bb3-9672-4b60-90a0-dd29fa8019e6_large/eiffel-tower-night-stockcake.jpg"
        },
        {
          "id": 3,
          "name": "Sydney Opera House Stay",
          "location": "Sydney, Australia",
          "distance": "8,000 kilometres away",
          "date": "15–20 March",
          "price": "₹60,000 total before taxes",
          "rating": 5.0,
          "image": "https://www.therocks.com/getmedia/b684c30d-30d7-42ab-b4f3-48da3bba80bf/Park-Hyatt-Sydney-P115-Exterior-Vertical-adapt_-16x9-1920-1080.jpg"
        }
      ],
      Islands: [
          {
            id: 1,
            name: "Pulau Seribu, Jakarta, Indonesia",
            location: "3,815 kilometres away",
            date: "5 nights · 20–25 Dec",
            price: "₹55,848 total before taxes",
            rating: 5.0,
            image: "https://a0.muscache.com/im/pictures/32e8b4a0-83ff-4dba-8253-5340d8d05215.jpg?im_w=720&im_format=avif",
            label: "Guest favourite",
          },
          {
            id: 2,
            name: "Lovina, Indonesia",
            location: "4,745 kilometres away",
            date: "5 nights · 31 Dec–5 Jan",
            price: "₹1,25,668 total before taxes",
            rating: 4.9,
            image: "https://a0.muscache.com/im/pictures/91fd04fa-b271-4335-8f18-61384692cd48.jpg?im_w=720&im_format=avif",
          },
          {
            id: 3,
            name: "Pulau Seribu, Jakarta, Indonesia",
            location: "3,815 kilometres away",
            date: "5 nights · 22–27 Dec",
            price: "₹60,279 total before taxes",
            rating: 5.0,
            image: "https://a0.muscache.com/im/pictures/610a5be2-bdaa-44cc-9c80-facbcc38aa9f.jpg?im_w=720&im_format=avif",
            label: "Guest favourite",
          },
          {
            id: 4,
            name: "El Nido, Philippines",
            location: "4,540 kilometres away",
            date: "5 nights · 28 Jan–2 Feb",
            price: "₹1,57,969 total before taxes",
            rating: 4.92,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-697345039809294002/original/e238e84e-4e86-49b2-9f1e-47f20d1396ef.jpeg?im_w=720&im_format=avif",
          },
          {
            "id": 5,
            "name": "Private Island Retreat",
            "location": "Fiji",
            "distance": "12,000 kilometres away",
            "date": "5–10 April",
            "price": "₹1,20,000 total before taxes",
            "rating": 5.0,
            "image": "https://media.glampinghub.com/collections/dee47a1b-4635-448f-a5ac-a57bb7d65ef1.jpg"
          },
          {
            "id": 6,
            "name": "Tropical Island Villa",
            "location": "Philippines",
            "distance": "4,800 kilometres away",
            "date": "10–15 April",
            "price": "₹90,000 total before taxes",
            "rating": 4.9,
            "image": "https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2015/04/4-island-home-4-15-15.jpg"
          }
        ],
      "Historical Homes": [
        {
          id: 6,
          name: "Castle Retreat",
          location: "Germany",
          distance: "8,000 kilometres away",
          date: "10–15 Jan",
          price: "₹80,000",
          rating: 4.6,
          image: "https://i2-prod.liverpoolecho.co.uk/incoming/article15787742.ece/ALTERNATES/s615b/0_22.jpg",
        },
        {
          "id": 1,
          "name": "Victorian Mansion",
          "location": "London, UK",
          "distance": "7,000 kilometres away",
          "date": "5–10 May",
          "price": "₹80,000 total before taxes",
          "rating": 4.8,
          "image": "https://th.bing.com/th/id/OIP.E4Ol9EfvI8Jrxp6fOu2BxwHaE7?rs=1&pid=ImgDetMain"
        },
        {
          "id": 2,
          "name": "Colonial Heritage House",
          "location": "Charleston, USA",
          "distance": "10,000 kilometres away",
          "date": "10–15 May",
          "price": "₹70,000 total before taxes",
          "rating": 4.7,
          "image": "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/2/19/3/DesignLens_tan-colonial-house_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1400976335937.jpeg"
        }
      ],

      "Amazing Views": [
      {
        id: 1,
        name: "Kandy, Sri Lanka",
        location: "725 kilometres away",
        date: "5 nights · 19–24 Dec",
        price: "₹81,707 total before taxes",
        rating: 4.9,
        image: "https://a0.muscache.com/im/pictures/94e6244c-b20b-4f8a-9e73-de1283bdd1cd.jpg?im_w=720&im_format=avif",
      },
      {
        id: 2,
        name: "Karnataka, India",
        location: "Mountain and garden views",
        date: "5 nights · 8–13 Jan",
        price: "₹36,521 total before taxes",
        rating: 4.86,
        image: "https://a0.muscache.com/im/pictures/d2b6be35-0b3f-47d6-b6a8-e9d9a44f62e9.jpg?im_w=720&im_format=avif",
      },
      {
        id: 3,
        name: "Nandi Hills, India",
        location: "Mountain and pool views",
        date: "5 nights · 5–10 Jan",
        price: "₹57,059 total before taxes",
        rating: 4.86,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-604855093626546308/original/e87a6018-10e5-488b-a7f7-cddca3f63baf.jpeg?im_w=720&im_format=avif",
      },
      {
        id: 4,
        name: "Muddenahalli, India",
        location: "Mountain views",
        date: "5 nights · 30 Dec–4 Jan",
        price: "₹82,048 total before taxes",
        rating: 4.95,
        image: "https://a0.muscache.com/im/pictures/8446ea5b-eae8-4f1e-8090-9ba3d1705c86.jpg?im_w=720&im_format=avif",
      },
      {
        id: 5,
        name: "Kanathur Reddikuppam, India",
        location: "Beach and ocean views",
        date: "5 nights · 22–27 Dec",
        price: "₹2,65,887 total before taxes",
        rating: 4.84,
        image: "https://a0.muscache.com/im/pictures/7c602a65-7fef-4a97-9973-abfb2248c4bf.jpg?im_w=720&im_format=avif",
      },
      {
        id: 6,
        name: "Thavinhal, India",
        location: "Mountain views",
        date: "5 nights · 5–10 Jan",
        price: "₹23,736 total before taxes",
        rating: 4.82,
        image: "https://a0.muscache.com/im/pictures/e7b1d848-296a-4aa0-917e-68db960c0d66.jpg?im_w=720&im_format=avif",
      },
      {
        id: 7,
        name: "Idukki, India",
        location: "334 kilometres away",
        date: "5 nights · 1–6 Jan",
        price: "₹20,370 total before taxes",
        rating: 4.84,
        image: "https://a0.muscache.com/im/pictures/460b347f-411e-432b-99fc-6fe4e71b7bbf.jpg?im_w=720&im_format=avif",
      },
      {
        id: 8,
        name: "Kodaikanal, India",
        location: "307 kilometres away",
        date: "5 nights · 1–6 Jan",
        price: "₹90,724 total before taxes",
        rating: 4.79,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-625759051698693330/original/5e4a2811-fdc2-46ce-8877-ce3a72c16404.jpeg?im_w=720&im_format=avif",
      },
    ],
    "Trending": [
    {
      "id": 1,
      "name": "Luxury Desert Glamping",
      "location": "Dubai, UAE",
      "distance": "3,000 kilometres away",
      "date": "20–25 May",
      "price": "₹50,000 total before taxes",
      "rating": 4.9,
      "image": "https://i.pinimg.com/originals/75/d2/e8/75d2e8eb576733b1f45ed83e18be5c87.jpg"
    },
    {
      "id": 2,
      "name": "Jungle Treehouse Stay",
      "location": "Costa Rica",
      "distance": "12,000 kilometres away",
      "date": "25–30 May",
      "price": "₹45,000 total before taxes",
      "rating": 4.85,
      "image": "https://i.pinimg.com/originals/26/68/3f/26683fedc82ab2d7d91f9f76f1db7763.jpg"
    }
    ], 
    Countryside:[
      {
        "id": 1,
        "name": "Rustic Countryside Cottage",
        "location": "Yorkshire, UK",
        "distance": "7,100 kilometres away",
        "date": "1–6 June",
        "price": "₹25,000 total before taxes",
        "rating": 4.7,
        "image": "https://th.bing.com/th/id/OIP.7Bwm-JtMje1n_sJd2Xx8OwAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "id": 2,
        "name": "Charming Farm Stay",
        "location": "Tuscany, Italy",
        "distance": "6,500 kilometres away",
        "date": "10–15 June",
        "price": "₹30,000 total before taxes",
        "rating": 4.9,
        "image": "https://via.placeholder.com/720x480?text=Charming+Farm+Stay"
      }
    ],
    Caves:[
      {
        "id": 1,
        "name": "Ortahisar",
        "location": "Turkey",
        "distance": "5,071 kilometres away",
        "date": "20–25 Dec",
        "price": "₹30,846",
        "rating": 5.0,
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 2,
        "name": "Ortahisar",
        "location": "Turkey",
        "distance": "5,072 kilometres away",
        "date": "20–25 Dec",
        "price": "₹59,297",
        "rating": 5.0,
        "image": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNDEwMDM5MDkwNDY3MDU0Nw%3D%3D/original/92387447-f912-486e-b487-af1dc9f27fe8.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 3,
        "name": "Ortahisar",
        "location": "Turkey",
        "distance": "5,072 kilometres away",
        "date": "5–10 Jan",
        "price": "₹45,842",
        "rating": 4.98,
        "image": "https://a0.muscache.com/im/pictures/11fb4e7a-eb9f-4714-82a6-08687a6c83af.jpg?im_w=720&im_format=avif"
      },
      {
        "id": 4,
        "name": "Ortahisar",
        "location": "Turkey",
        "distance": "5,071 kilometres away",
        "date": "5–10 Jan",
        "price": "₹41,252",
        "rating": 4.97,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-945552515163782010/original/6300df88-af2e-4620-a73e-7660def9895f.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 5,
        "name": "Ayvalı",
        "location": "Turkey",
        "distance": "5,068 kilometres away",
        "date": "20–25 Dec",
        "price": "₹1,02,981",
        "rating": "N/A",
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-1228909354209718384/original/3722b5ef-549e-4dd4-ab22-686ed161b8d0.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 6,
        "name": "Göreme",
        "location": "Turkey",
        "distance": "5,075 kilometres away",
        "date": "31 Jan–5 Feb",
        "price": "₹30,814",
        "rating": 4.9,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-824678192424913331/original/47c4b4b9-9a98-4c3d-b650-3a54017faf04.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 7,
        "name": "Wadi Rum Village",
        "location": "Jordan",
        "distance": "4,746 kilometres away",
        "date": "20–25 Dec",
        "price": "₹3,534",
        "rating": "N/A",
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-41656133/original/5fbccf60-b601-467f-94b4-bc87c8195c22.jpeg?im_w=720&im_format=avif"
      },
      {
        "id": 8,
        "name": "Uçhisar",
        "location": "Turkey",
        "distance": "5,076 kilometres away",
        "date": "22–27 Dec",
        "price": "₹38,044",
        "rating": 5.0,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-1149926849511399052/original/9a7c5c3e-ca00-44cf-96eb-4a1b599c2df8.jpeg?im_w=720&im_format=avif"
      }
    ],
      "Farms": [
        {
          "id": 1,
          "name": "Farmhouse in Tuscany",
          "location": "Italy",
          "distance": "6,500 kilometres away",
          "date": "10–15 Jan",
          "price": "₹15,000 total before taxes",
          "rating": 4.8,
          "image": "https://via.placeholder.com/300x200?text=Farmhouse+Italy"
        },
        {
          "id": 2,
          "name": "Countryside Retreat",
          "location": "France",
          "distance": "7,100 kilometres away",
          "date": "15–20 Jan",
          "price": "₹20,000 total before taxes",
          "rating": 4.7,
          "image": "https://via.placeholder.com/300x200?text=Countryside+Farm"
        }
      ],
      "Amazing Pools": [
        {
          "id": 1,
          "name": "Infinity Pool Villa",
          "location": "Bali, Indonesia",
          "distance": "4,500 kilometres away",
          "date": "20–25 Jan",
          "price": "₹40,000 total before taxes",
          "rating": 5.0,
          "image": "https://via.placeholder.com/300x200?text=Infinity+Pool"
        },
        {
          "id": 2,
          "name": "Seaside Pool Retreat",
          "location": "Maldives",
          "distance": "3,800 kilometres away",
          "date": "15–20 Feb",
          "price": "₹55,000 total before taxes",
          "rating": 4.9,
          "image": "https://via.placeholder.com/300x200?text=Seaside+Pool"
        }
      ],
      "Beachfront": [
        {
          "id": 1,
          "name": "Maldives Beach Villa",
          "location": "Maldives",
          "distance": "4,200 kilometres away",
          "date": "5–10 Feb",
          "price": "₹70,000 total before taxes",
          "rating": 4.9,
          "image": "https://via.placeholder.com/300x200?text=Beachfront+Maldives"
        },
        {
          "id": 2,
          "name": "Tropical Beach House",
          "location": "Hawaii, USA",
          "distance": "10,000 kilometres away",
          "date": "12–17 Feb",
          "price": "₹1,00,000 total before taxes",
          "rating": 5.0,
          "image": "https://via.placeholder.com/300x200?text=Beachfront+Hawaii"
        }
      ],
      "Houseboats": [
        {
          "id": 1,
          "name": "Luxury Houseboat",
          "location": "Kerala, India",
          "distance": "2,000 kilometres away",
          "date": "5–10 Feb",
          "price": "₹12,000 total before taxes",
          "rating": 4.7,
          "image": "https://via.placeholder.com/300x200?text=Luxury+Houseboat"
        },
        {
          "id": 2,
          "name": "River Houseboat Stay",
          "location": "Amsterdam, Netherlands",
          "distance": "7,500 kilometres away",
          "date": "10–15 Feb",
          "price": "₹35,000 total before taxes",
          "rating": 4.8,
          "image": "https://via.placeholder.com/300x200?text=River+Houseboat"
        }
      ],
      "Castles": [
        {
          "id": 1,
          "name": "Scottish Highlands Castle",
          "location": "Scotland",
          "distance": "7,500 kilometres away",
          "date": "1–6 March",
          "price": "₹1,00,000 total before taxes",
          "rating": 5.0,
          "image": "https://via.placeholder.com/300x200?text=Scottish+Castle"
        },
        {
          "id": 2,
          "name": "Medieval Castle Stay",
          "location": "Germany",
          "distance": "6,800 kilometres away",
          "date": "10–15 March",
          "price": "₹90,000 total before taxes",
          "rating": 4.9,
          "image": "https://via.placeholder.com/300x200?text=Medieval+Castle"
        }
      ],
      "Lakefront": [
        {
          "id": 1,
          "name": "Lakehouse in Switzerland",
          "location": "Switzerland",
          "distance": "6,200 kilometres away",
          "date": "12–17 March",
          "price": "₹25,000 total before taxes",
          "rating": 4.6,
          "image": "https://via.placeholder.com/300x200?text=Swiss+Lakehouse"
        },
        {
          "id": 2,
          "name": "Cabin by the Lake",
          "location": "Canada",
          "distance": "8,000 kilometres away",
          "date": "20–25 March",
          "price": "₹30,000 total before taxes",
          "rating": 4.8,
          "image": "https://via.placeholder.com/300x200?text=Lakefront+Cabin"
        }
      ],
        "Mansions": [
          {
            "id": 1,
            "name": "Beverly Hills Mansion",
            "location": "California, USA",
            "distance": "12,000 kilometres away",
            "date": "15–20 Jan",
            "price": "₹5,00,000 total before taxes",
            "rating": 5.0,
            "image": "https://via.placeholder.com/720x480?text=Beverly+Hills+Mansion"
          },
          {
            "id": 2,
            "name": "French Château",
            "location": "Provence, France",
            "distance": "7,500 kilometres away",
            "date": "10–15 Feb",
            "price": "₹4,50,000 total before taxes",
            "rating": 4.95,
            "image": "https://via.placeholder.com/720x480?text=French+Château"
          }
        ],
        "Luxe": [
          {
            "id": 1,
            "name": "Private Jet Villa",
            "location": "Maldives",
            "distance": "8,500 kilometres away",
            "date": "1–5 March",
            "price": "₹6,00,000 total before taxes",
            "rating": 5.0,
            "image": "https://via.placeholder.com/720x480?text=Private+Jet+Villa"
          },
          {
            "id": 2,
            "name": "Skyline Penthouse",
            "location": "New York, USA",
            "distance": "13,000 kilometres away",
            "date": "10–15 March",
            "price": "₹7,00,000 total before taxes",
            "rating": 4.9,
            "image": "https://via.placeholder.com/720x480?text=Skyline+Penthouse"
          }
        ],
        "Arctic": [
          {
            "id": 1,
            "name": "Glass Igloo",
            "location": "Finland",
            "distance": "5,500 kilometres away",
            "date": "15–20 Dec",
            "price": "₹40,000 total before taxes",
            "rating": 4.85,
            "image": "https://via.placeholder.com/720x480?text=Glass+Igloo"
          },
          {
            "id": 2,
            "name": "Arctic Ice Dome",
            "location": "Norway",
            "distance": "6,000 kilometres away",
            "date": "20–25 Jan",
            "price": "₹50,000 total before taxes",
            "rating": 5.0,
            "image": "https://via.placeholder.com/720x480?text=Arctic+Ice+Dome"
          }
        ],
        "Domes": [
          {
            "id": 1,
            "name": "Desert Dome Retreat",
            "location": "Nevada, USA",
            "distance": "11,000 kilometres away",
            "date": "10–15 Feb",
            "price": "₹35,000 total before taxes",
            "rating": 4.9,
            "image": "https://via.placeholder.com/720x480?text=Desert+Dome+Retreat"
          },
          {
            "id": 2,
            "name": "Forest Dome Stay",
            "location": "Oregon, USA",
            "distance": "9,000 kilometres away",
            "date": "5–10 March",
            "price": "₹28,000 total before taxes",
            "rating": 4.85,
            "image": "https://via.placeholder.com/720x480?text=Forest+Dome+Stay"
          }
        ],
        "Design": [
          {
            "id": 1,
            "name": "Minimalist Loft",
            "location": "Tokyo, Japan",
            "distance": "6,500 kilometres away",
            "date": "10–15 April",
            "price": "₹20,000 total before taxes",
            "rating": 4.9,
            "image": "https://via.placeholder.com/720x480?text=Minimalist+Loft"
          },
          {
            "id": 2,
            "name": "Architectural Wonder",
            "location": "Dubai, UAE",
            "distance": "3,500 kilometres away",
            "date": "5–10 May",
            "price": "₹30,000 total before taxes",
            "rating": 4.95,
            "image": "https://via.placeholder.com/720x480?text=Architectural+Wonder"
          }
        ],
        "Play": [
          {
            "id": 1,
            "name": "Adventure Treehouse",
            "location": "Costa Rica",
            "distance": "10,000 kilometres away",
            "date": "15–20 March",
            "price": "₹25,000 total before taxes",
            "rating": 4.8,
            "image": "https://via.placeholder.com/720x480?text=Adventure+Treehouse"
          },
          {
            "id": 2,
            "name": "Luxury Game Villa",
            "location": "California, USA",
            "distance": "12,000 kilometres away",
            "date": "20–25 March",
            "price": "₹40,000 total before taxes",
            "rating": 4.95,
            "image": "https://via.placeholder.com/720x480?text=Luxury+Game+Villa"
          }
        ],
        "Desserts": [
          {
            "id": 1,
            "name": "Sahara Desert Camp",
            "location": "Morocco",
            "distance": "5,200 kilometres away",
            "date": "1–5 June",
            "price": "₹50,000 total before taxes",
            "rating": 4.9,
            "image": "https://a0.muscache.com/im/pictures/d09b5f07-2c41-4b71-a3b5-c1a08024058c.jpg?im_w=720&im_format=avif"
          },
          {
            "id": 2,
            "name": "Thar Desert Retreat",
            "location": "Rajasthan, India",
            "distance": "800 kilometres away",
            "date": "5–10 June",
            "price": "₹15,000 total before taxes",
            "rating": 4.85,
            "image": "https://a0.muscache.com/im/pictures/ff7bd6e9-2686-421d-8acf-05e8f1dba54f.jpg?im_w=720&im_format=avif"
          }
        ],
        "Caves": [
          {
            "id": 1,
            "name": "Cave Hotel",
            "location": "Cappadocia, Turkey",
            "distance": "5,000 kilometres away",
            "date": "10–15 May",
            "price": "₹40,000 total before taxes",
            "rating": 4.9,
            "image": "https://via.placeholder.com/720x480?text=Cave+Hotel"
          },
          {
            "id": 2,
            "name": "Hidden Cave Retreat",
            "location": "Petra, Jordan",
            "distance": "4,500 kilometres away",
            "date": "15–20 May",
            "price": "₹45,000 total before taxes",
            "rating": 4.95,
            "image": "https://via.placeholder.com/720x480?text=Hidden+Cave+Retreat"
          }
        ]
    
  };

  const filterIcons = {
    Cabins: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    Icons: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
    Islands: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    "Historical Homes": "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    "Amazing Views": "https://via.placeholder.com/30/purple",
    Trending:"https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    "Countryside":"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    "Amazing Views":"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    Farms:"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    "Amazing Pools":"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    Beachfront: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    Houseboats:"https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
    Castles: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    Lakefront: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    Mansions: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    Luxe: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    Arctic: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    Domes: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    Design: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    Play: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    Desserts: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    Caves: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    // Filter icons unchanged for brevity
  };

  const filters = [
    "Cabins",
    "Icons",
    "Islands",
    "Historical Homes",
    "Trending",
    "Countryside",
    "Amazing Views",
    "Farms",
    "Amazing Pools",
    "Beachfront",
    "Houseboats",
    "Castles",
    "Lakefront",
    "Mansions",
    "Luxe",
    "Arctic",
    "Domes",
    "Design",
    "Play",
    "Desserts",
    "Caves",
    // Filters unchanged for brevity
  ];

  useEffect(() => {
    let allListings = [];
    if (selectedFilter === "All") {
      Object.values(mockData).forEach((listingsArray) => {
        allListings = [...allListings, ...listingsArray];
      });
    } else {
      allListings = mockData[selectedFilter] || [];
    }

    if (sortOption === "price") {
      allListings.sort(
        (a, b) =>
          parseInt(a.price.replace(/[^0-9]/g, ""), 10) -
          parseInt(b.price.replace(/[^0-9]/g, ""), 10)
      );
    } else if (sortOption === "rating") {
      allListings.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "name") {
      allListings.sort((a, b) => a.name.localeCompare(b.name));
    }
    setListings(allListings);
  }, [selectedFilter, sortOption]);

  const calculateBeforeTaxes = (price) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);
    const beforeTaxes = numericPrice - numericPrice * 0.18;
    return `₹${beforeTaxes.toLocaleString()}`;
  };

  const scrollFilters = (direction) => {
    const scrollAmount = direction === "left" ? -200 : 200;
    filterBarRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const MyComponent = () => {
    useEffect(() => {
      const handleScroll = () => {
        const filterBar = filterBarRef.current;
        if (filterBar) {
          if (window.scrollY > filterBar.offsetTop) {
            filterBar.classList.add("sticky");
          } else {
            filterBar.classList.remove("sticky");
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);}
  return (
    <div className="container mx-auto p-6">
    {/* Sticky Header Filter Bar */}
    <div className="sticky top-[5.9rem]  z-20 bg-white ">
  <div className="relative mb-6">
    <div className="flex items-center mb-6 relative">
      {/* Left Scroll Button */}
      <button
        className="hidden md:block  absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 opacity-50 rounded-full shadow hover:shadow-md"
        onClick={() => scrollFilters("left")}
      >
        ◀
      </button>
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        {/* Filter Bar */}
        <div
        className="flex space-x-6 overflow-x-auto border-b pb-2 scrollbar-hide relative"
        style={{ justifyContent: "flex-start" }}
        ref={filterBarRef}
      >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`flex flex-col items-center px-4 py-2 ${
                selectedFilter === filter
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              <img
                src={filterIcons[filter]}
                alt={`${filter} icon`}
                className="w-6 h-6 mb-1"
              />
              <span>{filter}</span>
            </button>
          ))}
        </div>
        {/* Right Gradient */}
        <div className=" absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
      {/* Right Scroll Button */}
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:shadow-md opacity-50"
        onClick={() => scrollFilters("right")}
      >
        ▶
      </button>
    </div>
  </div>
</div>


      {/* Buttons for Sorting and Toggle */}
      <div className="flex justify-between items-center mb-4">
      <div className="flex justify-between items-center mb-4">
  <div>
    <button
      onClick={() => setSortOption("price")}
      className="px-4 py-2 mr-2 bg-red-200 text-black rounded-full border border-red-200 transition-all hover:bg-red-500 hover:border-red-700 hover:text-white"
    >
      Sort by Price
    </button>
    <button
      onClick={() => setSortOption("rating")}
      className="px-4 py-2 mr-2 bg-red-200 text-black rounded-full border border-red-200 transition-all hover:bg-red-500 hover:border-red-700 hover:text-white"
    >
      Sort by Rating
    </button>
    <button
      onClick={() => setSortOption("name")}
      className="px-4 py-2 bg-red-200 text-black rounded-full border border-red-200 transition-all hover:bg-red-500 hover:border-red-700 hover:text-white"
    >
      Sort by Name
    </button>
  </div>
</div>


        {/* Toggle Button */}
        <div className="flex items-center ml-4 -mt-4 z-0">
  <span className="mr-2 text-gray-600 ">
    {showBeforeTaxes ? "Without Taxes" : "With Taxes"}
  </span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={showBeforeTaxes}
      onChange={() => setShowBeforeTaxes(!showBeforeTaxes)}
    />
    <div className="w-11 h-6 bg-red-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer dark:bg-red-300 peer-checked:bg-red-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-red-500"></div>
  </label>
</div>

      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings && listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedListing(listing)}
            >
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{listing.name}</h3>
                <p className="text-gray-500 text-sm">{listing.location}</p>
                <p className="text-gray-500 text-sm">{listing.distance}</p>
                <p className="text-gray-500 text-sm">{listing.date}</p>
                <p className="text-gray-800 font-semibold">
                  {showBeforeTaxes
                    ? calculateBeforeTaxes(listing.price)
                    : listing.price}{" "}
                  total
                </p>
                <p className="text-yellow-500 font-semibold">
                  ★ {listing.rating}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No listings available for the selected filter.
          </div>
        )}
      </div>
      {/* Full-Screen Popup */}
{selectedListing && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-2xl p-6 rounded-lg overflow-auto h-auto relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        onClick={() => setSelectedListing(null)}
      >
        ✖
      </button>

      {/* Content */}
      <img
        src={selectedListing.image}
        alt={selectedListing.name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold">{selectedListing.name}</h2>
      <p className="text-gray-500">{selectedListing.location}</p>
      <p className="text-gray-500">{selectedListing.distance}</p>
      <p className="text-gray-500">{selectedListing.date}</p>
      <p className="text-gray-800 font-semibold">
        {showBeforeTaxes
          ? calculateBeforeTaxes(selectedListing.price)
          : selectedListing.price}{" "}
        total
      </p>
      <p className="text-yellow-500 font-semibold">
        ★ {selectedListing.rating}
      </p>
      <p className="mt-4 text-gray-700">{selectedListing.description}</p>
    </div>
  </div>
)}

    </div>
  );
};

export default Filter;
