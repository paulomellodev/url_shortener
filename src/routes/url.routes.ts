import { Router } from "express";
import { UrlShortController } from "../controllers/urlShortController";

const urlRouter = Router();

const UrlShorten = new UrlShortController();

urlRouter.post("/shorten", UrlShorten.shortenUrl);
urlRouter.get("/:hash", UrlShorten.redirect);

export default urlRouter;
