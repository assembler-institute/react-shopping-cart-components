import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function ItemCard({
  id,
  img,
  title,
  shortDescription,
  isFavorite,
  upVotes,
  downVotes,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
}) {
  function onDownVote() {
    handleDownVote(id);
  }
  function onUpVote() {
    handleUpVote(id);
  }
  function onSetFavorite() {
    handleSetFavorite(id);
  }
  function onAddToCart() {
    handleAddToCart(id);
  }

  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-4">
      <img src={img} alt="productImage" />
      <FavoriteIconButton
        handleSetFavorite={onSetFavorite}
        isFavorite={isFavorite}
      />
      <h2>{title}</h2>
      <Divider />
      <p>{shortDescription}</p>
      <Divider />
      <div className="ItemCard__buttons-panel">
        <div className="ItemCard__popularity-panel">
          <IconButton aria-label="up vote product" handleClick={onUpVote}>
            <ThumbDown />
            <p>{downVotes.currentValue}</p>
          </IconButton>
          <IconButton aria-label="down  vote product" handleClick={onDownVote}>
            <ThumbUp />
            <p>{upVotes.currentValue}</p>
          </IconButton>
        </div>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </div>
    </article>
  );
}

export default ItemCard;
