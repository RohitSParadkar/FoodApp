import React, { useState, useEffect } from "react";
import { resturantList } from "./config";
import ResturantCard from "./ResturantCard";

const Body = () => {
  //let searchWord = "myworld";  javascript variable
  const [searchText, setSearchText] = useState("");
  const [resturant, setResturant] = useState(resturantList);

  let mysearch = "false";

  //use for filtering the data
  function searchClick(searchText, resturant) {
    const filterdata = resturant.filter((resturants) =>
      resturants.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterdata;
  }
  //use Effect (callbackfunction,dependancy array[])
  useEffect(() => {
    //api call and array dependancy empty to call it one time
    getResturant();
  }, []);

  async function getResturant() {
    try{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      console.log(
        jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
      setResturant(
        jsonData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }catch(error){
      console.error("Error fetching data:", error);
    }
   
  }
  console.log("render");
  return (
    <>
      <div className="search-container">
        <input
          className="text-search"
          type="text"
          placeholder="search"
          name="#"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const data = searchClick(searchText, resturant);
            setResturant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="cardContainer">
        {resturant.map((resturant, index) => {
          return <ResturantCard key={index} resturant={resturant} />;
        })}
      </div>
    </>
  );
};

export default Body;
