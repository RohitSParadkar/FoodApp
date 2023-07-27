import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img
    alt="logo"
    id="logo"
    src="data:image/png;base64,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"
  />
);

//header component
const HeadComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// body component

const resturantList = [
  {
    data: {
      name: "Oventarry Pizza",
      description: "Pizza,Fast Food",
      img: "https://b.zmtcdn.com/data/pictures/chains/0/18386400/7eec9cf2fa794f804ef41c842cac8e75_o2_featured_v2.jpg?output-format=webp",
      cuisine: ["burger", "coffe"],
      rating: "3.4",
    },
    subtype: "basic",
    type: "resturant",
  },
  {
    data: {
      name: "Dale's Eden",
      description: "Bekari Mithai",
      img: "https://b.zmtcdn.com/data/pictures/chains/7/37567/c928ea08453c1bd836acde177ca87cec_o2_featured_v2.jpg?output-format=webp",
      cuisine: ["Bekari", "Mithai"],
      rating: "4.5",
    },
    subtype: "basic",
    type: "resturant",
  },
  {
    data: {
      name: "Meraki",
      description: "Pizza,Fast Food",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/18276605/b8d265680deb022e3adf1b29cdd931f7_o2_featured_v2.jpg?output-format=webp",
      cuisine: ["Chinese", "Thai", "Burmese"],
      rating: "3.2",
    },
    subtype: "basic",
    type: "resturant",
  },
  {
    data:{
    name: "Sahara Restaurant",
    description: "Pizza,Fast Food",
    img: "https://b.zmtcdn.com/data/pictures/3/38083/3d6c960a411dedf5c050484aa70bc737_o2_featured_v2.jpg",
    cuisine: ["North Indian", "Mughlai", "Chinese"],
    rating: "3.2"},
    subtype: "basic",
    type: "resturant",
  },
  {
    data:{
      name: "Meraki",
    description: "Pizza,Fast Food",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/18276605/b8d265680deb022e3adf1b29cdd931f7_o2_featured_v2.jpg?output-format=webp",
    cuisine: ["Chinese", "Thai", "Burmese"],
    rating: "3.2"},
    subtype: "basic",
    type: "resturant",
  },
  {
    data:{
      name: "Meraki",
    description: "Pizza,Fast Food",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/18276605/b8d265680deb022e3adf1b29cdd931f7_o2_featured_v2.jpg?output-format=webp",
    cuisine: ["Chinese", "Thai", "Burmese"],
    rating: "3.2"},
    subtype: "basic",
    type: "resturant",
  },
  {
    data:{
      name: "Meraki",
    description: "Pizza,Fast Food",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/18276605/b8d265680deb022e3adf1b29cdd931f7_o2_featured_v2.jpg?output-format=webp",
    cuisine: ["Chinese", "Thai", "Burmese"],
    rating: "3.2"},
    subtype: "basic",
    type: "resturant",
  },
  {
    data:{
      name: "Meraki",
    description: "Pizza,Fast Food",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/18276605/b8d265680deb022e3adf1b29cdd931f7_o2_featured_v2.jpg?output-format=webp",
    cuisine: ["Chinese", "Thai", "Burmese"],
    rating: "3.2"},
    subtype: "basic",
    type: "resturant",
  },
];
const ResturantCard = ({resturant}) => {
  const {name,cuisine,rating,img}=resturant.data
  return (
    <div className="resturantCard">
      <img alt="Restaurant Card" id="cardimg" src={img} />
      <h2>{name}</h2>
      <h3>{resturant.data.cuisine.join(",")}</h3>
      <h4>{rating} star</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="cardContainer">
      {resturantList.map((resturant,index)=>{
        return <ResturantCard key={index} resturant={resturant}/>
      })}


    </div>
  );
};

//footer component
const Footer = () => {
  return <h2>footer</h2>;
};

const Layout = () => {
  return (
    <>
      <HeadComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
