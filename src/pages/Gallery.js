import React, { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";

const Gallery = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Orion Nebula",
      category: "Nebula",
      description:
        "The Orion Nebula is a diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion.",
      url: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80g",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
      likes: 5,
    },
    {
      id: 2,
      name: "Andromeda Galaxy",
      category: "Galaxy",
      description:
        "The Andromeda Galaxy, also known as Messier 31, is a spiral galaxy located approximately 2.5 million light-years away in the constellation Andromeda.",
      url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      likes: 12,
    },
    {
      id: 3,
      name: "Pillars of Creation",
      category: "Nebula",
      description:
        "The Pillars of Creation are a region of the Eagle Nebula, a star-forming region located in the constellation Serpens.",
      url: "https://images.unsplash.com/photo-1617457485942-458b94408f01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
      likes: 4,
    },
    {
      id: 4,
      name: "Alpha Centauri",
      category: "Stars",
      description:
        "Alpha Centauri is the closest star system to our solar system, located about 4.37 light years away. It is a triple star system, consisting of three stars named Alpha Centauri A, Alpha Centauri B, and Proxima Centauri.",
      url: "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
      likes: 43,
    },
    {
      id: 5,
      name: "Mars",
      category: "Planets",
      description:
        "Mars is the fourth planet from the sun and the second-smallest planet in the solar system. It is known as the Red Planet due to its reddish appearance, caused by iron oxide (rust) on its surface.",
      url: "https://images.unsplash.com/photo-1632395627727-3b97d0724814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
      likes: 41,
    },
    {
      id: 6,
      name: "Whirlpool Galaxy",
      category: "Galaxies",
      description:
        "The Whirlpool Galaxy is a spiral galaxy located about 23 million light years away from Earth. It is also known as Messier 51 or M51 and is one of the most famous galaxies in the night sky due to its striking appearance.",
      url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
      likes: 1,
    },
    {
      id: 7,
      name: "Betelgeuse",
      category: "Stars",
      description:
        "Betelgeuse is a red supergiant star located in the constellation Orion, about 600 light years away from Earth. It is one of the largest stars known, with a diameter that is about 1,000 times larger than that of the sun.",
      url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
      likes: 16,
    },
    {
      id: 8,
      name: "Jupiter",
      category: "Planets",
      description:
        "Jupiter is the fifth planet from the sun and the largest planet in the solar system. It is a gas giant, with a thick atmosphere of hydrogen and helium, and is known for its many moons and its Great Red Spot, a giant storm that has raged for hundreds of years.",
      url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp",
      likes: 65,
    },
    {
      id: 9,
      name: "Andromeda Galaxy",
      category: "Nebula",
      description:
        "The Andromeda Galaxy is a spiral galaxy located about 2.5 million light years away from Earth. It is the closest galaxy to our Milky Way and is one of the brightest objects in the night sky.",
      url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/9.webp",
      likes: 31,
    },
    {
      id: 10,
      name: "Betelgeuse",
      category: "Planet",
      description: "planet earth close photography",
      url: "https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
      likes: 13,
    },
    {
      id: 11,
      name: "Betebdh",
      category: "Planet",
      description:
        "Betelgeuse is a red supergiant star located in the constellation Orion, about 600 light years away from Earth. It is one of the largest stars known, with a diameter that is about 1,000 times larger than that of the sun.",
      url: "https://images.unsplash.com/photo-1544590907-d36afe5aeb96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/7.webp",
      likes: 21,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const results = cards.filter(
      (cards) =>
        cards.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cards.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, cards]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="container mx-auto">
      <Search handleInputChange={handleInputChange} />
      {searchResults.length === 0  ? (
        <h1 className="text-6xl text-center mx-auto mt-32">No Result Found....</h1>
      ) : (
        <div class="container mx-auto px-5 py-24 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            {searchResults.length > 0
              ? searchResults.map((cards) => (
                  <Card key={cards.id} cards={cards} />
                ))
              : cards.map((cards) => <Card key={cards.id} cards={cards} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
