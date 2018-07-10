import axios from "axios";
import filterParams from "./filterParams";

export default {
  // get articles from NYT
  getArticles: function(params) {
    return axios.get("/api/nyt", { params: filterParams(params) });
  },
  // get articles from mongo
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // delete articles to db
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // save articles to db
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
