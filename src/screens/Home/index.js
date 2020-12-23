import React, {useState, useEffect} from 'react'
import Header from '../Header'
import CardProduct from '../../components/CardProduct'
import {Home} from './styled'
import {getProducts} from '../../services/productService'
import Loader from "../../assets/images/loader.gif";

const HomeScreen = () => {
    const [objProducts, setObjProducts] = useState(undefined);

    useEffect(() => {
        async function fetchData(){
            try{
                let objProduct = await getProducts('',0);
                setObjProducts(objProduct.data);
            }catch(err){
                console.log('falta implementar pantalla de error')
            }
        }

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Home.Body>
                <Home.Content width={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
                    {
                        objProducts &&
                        objProducts.products.map((product, index) => {
                            return (
                                <CardProduct
                                    key={index}
                                    imageUrl={product.image}
                                    brand={product.brand}
                                    description={product.description}
                                    price={product.price}
                                    discountRate={product.discountRate}
                                    oldPrice={product.oldPrice}
                                    style={{marginLeft:7}}
                                />
                            );
                        })
                        ||
                        <img src={Loader} alt={'loader'} />
                    }
                </Home.Content>
            </Home.Body>
        </React.Fragment>
    );
}

export default HomeScreen;