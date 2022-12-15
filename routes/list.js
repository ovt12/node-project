import Router from "express";

import {
    addLists,
    getLists,
    matchLists,
    updateListById,
    deleteLists,
  } from "../Controller/list.js";
  
  const router = Router();

  router.post("/", addLists);
  
  router.get("/", getLists);
  
  router.get("/:id", matchLists);

  router.put("/:id", updateListById);
  
  router.delete("/:id", deleteLists);

  export default router;
  
  
  // Create a POST request -> sending data to API
  
  // const bodyParser = require('body-parser');
  


