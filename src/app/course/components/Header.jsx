import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex flow-row justify-between items-center p-5 h-16 sticky top-0 z-50 bg-white border-b-anylearn-blue-dark border-2">
      <div>
        <IoIosArrowBack className="text-2xl" onClick={() => navigate(-1)} />
      </div>
      <div>
        <p className="font-medium text-2xl">Curso</p>
      </div>
      <div onClick={() => setBookmarked(!bookmarked)}>
        {bookmarked ? (
          <BsBookmarkFill className="text-2xl fill-anylearn-accent" />
        ) : (
          <BsBookmark className="text-2xl fill-anylearn-accent" />
        )}
      </div>
    </div>
  );
};

export default Header;
