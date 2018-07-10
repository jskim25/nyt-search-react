import axios from "axios";
import filterParams from "./filterParams";

export default {
  // get articles from NYT
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // get articles from db
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // save articles to db
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // delete articles from db
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};
