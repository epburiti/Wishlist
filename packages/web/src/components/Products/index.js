import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsRequest } from '../../Store/ducks/Products/actions';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';
import { Container } from './styles';
import CardProduct from '../CardProduct';

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
        <CardProduct {...item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
