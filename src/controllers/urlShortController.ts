import { Request, Response } from "express";
import Url from "../models/UrlShortener";
import shortid from "shortid";

export class UrlShortController {
  async shortenUrl(req: Request, res: Response): Promise<Response> {
    const { originalURL } = req.body;
    const url = await Url.findOne({ originalURL });

    if (url) {
      return res.status(401).send(url);
    }

    const hash = shortid.generate();
    const shortUrl = `${process.env.API_URL}/${hash}`;
    const newURL = await Url.create({ hash, shortUrl, originalURL });

    return res.status(201).send(newURL);
  }

  async redirect(req: Request, res: Response): Promise<Response | void> {
    const { hash } = req.params;
    const url = await Url.findOne({ hash });
    if (url) {
      res.redirect(url.originalURL);
      return;
    }
    return res.status(400).json({ error: "URL not found" });
  }
}
