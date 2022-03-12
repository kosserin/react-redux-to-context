import React, {useState} from 'react';

export const ProductsContext = React.createContext({
    products: [],
    toggleFav: id => {}
});

export default props => {
    const [productsList, setProductsList] = useState([
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
    ]);
    
    const toggleFavorite = productId => {
        setProductsList(currentProductsList => {
            const productIndex = currentProductsList.findIndex(p => p.id === productId);
            const newStatus = !currentProductsList[productIndex].isFavorite;
            const updatedProducts = [...currentProductsList];
            updatedProducts[productIndex] = {
                ...currentProductsList[productIndex],
                isFavorite: newStatus
            };
            return updatedProducts;
        })
    }

    return (
        <ProductsContext.Provider value={{
            products: productsList,
            toggleFav: toggleFavorite
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}