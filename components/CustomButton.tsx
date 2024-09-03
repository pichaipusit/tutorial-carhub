import React from "react";

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={() => {}}
    >
      {/* TODO: Create a reusable btn that anyone can customize title, 
      container and click event (don't forget it's client comp) */}
    </button>
  );
};

export default CustomButton;
