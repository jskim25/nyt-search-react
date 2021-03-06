import React from "react";
import { ListItem } from "../List";

const Article = ({ title, url, _id, handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          className="btn btn-light"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Article
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
      </span>
    </h3>
  </ListItem>
);

export default Article;
