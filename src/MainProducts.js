import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "./myStyle.css";
import { ListGroupItem } from "react-bootstrap";

function MainProducts(props) {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const [pagesProducts, setPagesProducts] = useState([]);
  const data = {
    method: "get",
    url: "https://theme-1081.shopfa.com/api/system/pages",
    params: {
      module: props.module,
    },
  };
  const secondData = {
    method: "get",
    url: "https://theme-1081.shopfa.com/api/shop/product/list",
    params: {
      // module : props.module,
      page_id: id,
    },
  };
  const handelClick = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
  };
  useEffect(() => {
    axios(data).then((Response) => {
      // console.log(Response);
      setProducts(Response.data.items);
    });
  }, []);
  useEffect(() => {
    axios(secondData).then((Response) => {
      // console.log(Response);
      console.log(Response);
      setPagesProducts(Response.data.items);
    });
  }, [id]);
  // console.log(products)
  return (
    <>
      <Container>
        <Row>
          <Col lg={2} className='my-4'>
            {products.length > 0 && (
              <ListGroup>
                <h2 className="fw-lighter">صفحات</h2>
                {products.map((product) => (
                  <>
                    {/* <li>
                      <a
                        onClick={handelClick}
                        style={{ cursor: "pointer" }}
                        id={product.id}
                      >
                        {product.title}
                      </a>
                    </li> */}

                    <ListGroup.Item className="p-3">
                      <a
                        onClick={handelClick}
                        style={{ cursor: "pointer" }}
                        id={product.id}
                      >
                        {product.title}
                      </a>
                    </ListGroup.Item>
                  </>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col>
            {pagesProducts.length > 0 && (
              <>
                <h2 className="fw-lighter">محصولات</h2>
                <ListGroup className="my-3">
                  <Row>
                    {pagesProducts.map((pagesProduct) => (
                      <>
                        <Col className="my-3 product rounded-3">
                          <ListGroupItem>
                            <img style={{width : '13rem'}} src={pagesProduct.thumb} />
                          </ListGroupItem>
                          <ListGroupItem className="name">{pagesProduct.title}</ListGroupItem>
                          <ListGroupItem>{pagesProduct.price} تومان</ListGroupItem>
                        </Col>
                      </>
                    ))}
                  </Row>
                </ListGroup>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainProducts;
