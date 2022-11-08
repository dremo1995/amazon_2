import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
  return (
    <div key={id} className="flex flex-col relative p-10 m-5 bg-white z-30 ">
      <p className="absolute top-2 right-2 text-gray-300 text-xs italic my-3">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="pt-4">{title}</h4>
      <div className="flex">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-300" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency
          quantity={price}
          currency="USD"
          className="text-xl font-semibold"
        />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://links.papareact.com/fdw"
            alt=""
            height={50}
            width={50}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
