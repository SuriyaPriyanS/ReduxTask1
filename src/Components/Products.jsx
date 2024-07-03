import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Stroes/cartSlice";

const Products = () => {
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    return CartProducts.some((x) => x.id === productId);
  };

  const toggleCart = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "iPhone 15 pro Max",
        description: "An apple mobile which is nothing like apple",
        price: 89000,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280",
        ],
      },
      {
        id: 2,
        title: "iPhone 12pro",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 58000,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung GalaxgyS24",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 94000,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
          "https://fdn.gsmarena.com/imgroot/news/23/09/samsung-galaxy-s24-design-renders/inline/-1200/gsmarena_001.jpg",
        ],
      },
      {
        id: 4,
        title: "OPPOF27pro",
        description: "OPPO F27pro is officially announced on April 2024.",
        price: 28000,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8yCIumzhl3pBI-wGhDxaO5DwpoQEY-8OxqccV16MKyBJNRsF8-2PsXOmdwTjF8zWcbB3FQ7V99aH3nYQPhYCIYN_7sQD0z9shO4r7xtmug4lagWTQbCm-NQ",
        ],
      },
      {
        id: 5,
        title: "Huawei GAoble A32proMax",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 150000,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/kv/pura70-ultra-kv.jpg",
        ],
      },
    ];

    setProducts(data);
  }, []);

  const cards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <div className="card-products">
        <Card style={{ width: "18rem" }} className="cards">
          <Card.Img
            variant="top"
            src={product.images[0]} // Display the first image
            style={{ width: "250px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Current Price: <i className="fa fa-inr"></i>
              {product.price}
            </Card.Text>
            <Button
              variant="primary"
              className="add"
              onClick={() => toggleCart(product)}
            >
              {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-white">Shopping Cart Using React-Redux</h1>
      <div className="card-products">{cards}</div>
    </>
  );
};

export default Products;
