import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsRequest } from '../../Store/ducks/Products/actions';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';
import { formatPrice } from '../../utils/format';
import HeartIcon from '../HeartIcon';
import { Container } from './styles';

function Products() {
  const products = useSelector(state => state.Products.data)
  const searchValue = useSelector(state => state.Search.searchValue)
  const [productsRef, setProductsRef] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsRequest());
    dispatch(loadFavoritesRequest());
  }, []);
  useEffect(() => {
    setProductsRef(products);
  }, [products]);
  useEffect(() => {
    console.log("searchValue: ", searchValue);
    console.log("products: ", products);
    if (searchValue.trim() === "") {
      setProductsRef(products);
      return;
    }
    const ref = products.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    setProductsRef(ref)
  }, [searchValue]);
  return (
    <Container>
      {productsRef.map((item) => (
        <div className="card" key={item.id}>
          <div className="favorite-icon">
            <HeartIcon id={item.id} />
          </div>
          <img src={item.image} alt={item.title} />
          <p className="title">{item.title}</p>
          <p className="price">{formatPrice(item.price)}</p>
        </div>
      ))}
    </Container>
  );
}

export default Products;
