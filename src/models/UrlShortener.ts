import { Schema, model } from "mongoose";

interface IUrl {
  hash: string;
  originalURL: string;
  shortUrl: string;
}

const UrlSchema = new Schema<IUrl>({
  hash: {
    type: String,
    required: true,
  },
  originalURL: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});

const Url = model<IUrl>("Url", UrlSchema);

export default Url;
