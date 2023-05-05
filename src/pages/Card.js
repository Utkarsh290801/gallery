import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Card = ({ cards }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(cards.likes);

  // const handleLike = () => {
  //   if (liked) {
  //     setLiked(false);
  //     setLikes((prevLikes) => prevLikes - 1);
  //   } else {
  //     setLiked(true);
  //     setLikes((prevLikes) => prevLikes + 1);
  //   }
  // };
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prevLikes) => prevLikes - 1);
      localStorage.removeItem(`cards-${cards.id}`);
    } else {
      setLiked(true);
      setLikes((prevLikes) => prevLikes + 1);
      localStorage.setItem(`cards-${cards.id}`, likes + 1);
    }
  };
  useEffect(() => {
    const storedLikes = localStorage.getItem(`cards-${cards.id}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
      setLiked(true);
    }
  }, [cards.id]);
  return (
    <>
      <div class="flex lg:w-1/3 md:w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2 relative">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={cards.url}
          />
          <div
            className="absolute top-5 p-1 rounded bg-white right-8  bg-opacity-40 cursor-pointer flex justify-center z-10"
            onClick={handleLike}
          >
            {liked ? (
              <AiFillHeart size={30} color="red" />
            ) : (
              <AiOutlineHeart size={30} />
            )}
            <p className="text-lg font-semibold">{likes}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-40">
            <img
              alt="avatar"
              className="block h-10 w-10 rounded-full object-cover object-center mt-4 absolute top-0 "
              src={cards.avatar}
            />
            <h3 className="text-xl font-semibold">{cards.name}</h3>
            <p className="text-sm font-bold text-red-950">{cards.category}</p>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100  transition-opacity duration-300 ease-in-out z-0">
            <div className="h-full flex flex-col justify-center items-center text-white text-center p-4">
              <p className="text-sm font-bold">{cards.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
