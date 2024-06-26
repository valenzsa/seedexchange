import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import axios from "axios";
//import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
//import products from "../products";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import Message from "./Message";
import { addToCart } from "../slices/cartSlice";

const ProductDetail = () => {
  //const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  console.log("product detail");
  console.log(product);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const fetchProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/products/${productId.id}`);
  //     console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  const totalInStock = (seedCount, numberOfSeedsPerPack) => {
    return Number(seedCount / numberOfSeedsPerPack);
  };

  // console.log(typeof totalInStock);
  // console.log(totalInStock(product?.seedCount, product?.numberOfSeedsPerPack));

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            {/* <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid d-flex"
          /> */}

            {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {product.images.map((image) => (
              <SwiperSlide>
                <img className="img-fluid" src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper> */}
            <div className="swiper-container">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {product?.images?.map((image) => (
                  <SwiperSlide>
                    <div className="image-container">
                      <img className="img-fluid" src={image} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {product?.images?.map((image) => (
                  <SwiperSlide>
                    <img className="img-fluid" src={image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h1>{product.name}</h1>
            <div className="ratings mb-2 d-flex align-items-baseline" as="div">
              <div className="star-ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <div className="number-of-reviews">
                {product.numberOfReviews} Reviews
              </div>
            </div>
            <div
              className="prices d-flex mb-3"
              style={{ gap: "10px", alignItems: "baseline" }}
            >
              <div className="old-price text-decoration-line-through text-black-50 fs-3">
                ${product.oldPrice}
              </div>
              <div className="price fs-3">${product.price}</div>
            </div>
            <div className="inStock mb-3">
              {Math.floor(
                totalInStock(product.seedCount, product.numberOfSeedsPerPack)
              )}
              {totalInStock(product.seedCount, product.numberOfSeedsPerPack) > 0
                ? " In Stock"
                : "Out of Stock"}
            </div>
            <p>{product.description}</p>
            <div className="d-flex mb-5">
              {/* <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                style={{ maxWidth: "3rem" }}
              ></input> */}

              <Form.Control
                as="select"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[
                  ...Array(
                    Math.floor(
                      totalInStock(
                        product?.seedCount,
                        product?.numberOfSeedsPerPack
                      )
                    )
                  ).keys(),
                ].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Form.Control>

              <Button
                className="btn btn-outline-dark"
                variant="light"
                onClick={addToCartHandler}
              >
                Add To Cart
              </Button>
            </div>
            <div className="categories">
              <strong>Categories: </strong>
              {product?.category?.map((cat, index) => {
                return (
                  <span key={index}>
                    {cat}
                    {index < cat.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </div>
            <div className="tags">
              <strong>Tags: </strong>
              {product?.tags?.map((tag, index) => {
                return (
                  <span key={index}>
                    {tag}
                    {index < tag.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default ProductDetail;
