import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Products(props) {
  const [dataw, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const getPriceData = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=8b05662c880742d7a0d11187509b9b86"
    );
    const actualdata = await res.json();
    setData(actualdata.articles);
  };
  useEffect(() => {
    getPriceData();
  }, []);
  console.log(dataw);
  return (
    <>
      <div className="kabi">
        <div className="head">Top Headlines</div>
        <div className="search">
          <input
            style={{
              width: "70%",
              height: "30px",
              fontSize: "20px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "black",
              border: "0.1px solid aqua",
            }}
            type="text"
            placeholder=" Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div className="contsa">
          {dataw
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((curtab, ind) => {
              return (
                <Card
                  heading={curtab.title}
                  para1={curtab.content}
                  ims={curtab.urlToImage}
                  para2={curtab.description}
                  lik={curtab.url}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
