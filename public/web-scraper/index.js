const PORT = 4000;
import axios from "axios";

import cheerio from "cheerio";
import fs from "fs";

const url = "https://neal.fun/spend/";

const imageUrls = [];

axios(url)
  .then((resp) => {
    const html = resp.data;
    const $ = cheerio.load(html);
    $(".item-wrapper").each(function (id) {
      const url = "https://neal.fun/" + $(this).find(".item-img").attr("src");
      const name = $(this).find(".item-name").text();
      const price = $(this).find(".item-cost").text();
      imageUrls.push({ url, name, price });
    });
    console.log(imageUrls);
    const jsonContent = JSON.stringify(imageUrls);

    fs.writeFile("./productInfos.json", jsonContent, "utf8", function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
  })
  .catch((err) => console.log(err));
