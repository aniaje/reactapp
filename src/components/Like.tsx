import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import { AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked)
    return <AiFillHeart color="#ff6b81" size={40} onClick={toggleLike} />;
  return <AiOutlineHeart color="#ff6b81" size={40} onClick={toggleLike} />;
};

export default Like;
