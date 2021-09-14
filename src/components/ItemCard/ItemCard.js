import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function ItemCard({ id,
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

  return <article className="item-card col col-12 col-md-6 col-lg-4" >
    <header>
      <div className="item-card__image-wrapper">
        <img src={img} className="item-card__image" alt={title} />
        <FavoriteIconButton
          handleSetFavorite={onSetFavorite}
          isFavorite={isFavorite}
        />
      </div>
      <h2 className="item-card__title">{title}</h2>
    </header>
    <Divider />
    <p className="item-card__description">{shortDescription}</p>
    <Divider />
    <footer className="item-card__meta">
      <div className="item-card__icons">
        <div className="item-card__icon-row">
          <IconButton aria-label="up vote product" handleClick={onUpVote}>
            <ThumbDown />
          </IconButton>
          <p className="item-card__icon-txt">{downVotes.currentValue}</p>
        </div>
        <div className="item-card__icon-row">
          <IconButton aria-label="down vote product" handleClick={onDownVote}>
            <ThumbUp />
          </IconButton>
          <p className="item-card__icon-txt">{upVotes.currentValue}</p>
        </div>
      </div>
      <div className="item-card__icon-row">
        <Button onClick={onAddToCart}>Add to cart</Button>
      </div>
    </footer>
  </article>


    ;
}

export default ItemCard;
