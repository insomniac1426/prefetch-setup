import express from "express";
import path from "path";
import React from "react";
import { ChunkExtractor } from "@loadable/server";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const app = new express();

app.use("/static", express.static("react-ssr-loadable/dist"));

app.get("/favicon.ico", (req, res, next) => {
  return res.sendFile(path.resolve(__dirname, "../../assets/p-favicon.ico"));
});

app.get("*", (req, res, next) => {
  const statsFile = path.resolve(__dirname, "../dist/loadable-stats.json");
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(<App />);
  const html = ReactDOMServer.renderToString(jsx);

  const responseHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prefetching in React Apps</title>
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
    </head>
    <body>
        <div id="root">${html}</div>
        ${extractor.getScriptTags()}
    </body>
    </html>
  `;

  return res.send(responseHtml);
});

app.listen(8080, () => {
  console.log("running...");
});
