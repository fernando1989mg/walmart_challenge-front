import React from 'react'
import {Result} from './styled'
import CardProduct from '../../components/CardProduct'
import Heading from '../../components/Heading'
import Header from '../Header'
import Paginator from "../../components/Paginator"
import {getProducts} from '../../services/productService'
import {useHistory} from "react-router-dom";
import {isMobile} from "react-device-detect";

const SearchResultScreen = ({location}) => {
    const history = useHistory();

    return (
        <Result.Container>
            <Header />
            <Result.Body>
                <Result.Content>
                    <Heading type={'H2'} style={{marginTop:0}}>
                        {
                            location.state.objProduct.products.length > 0 &&
                            `Resultados para ${location.state.searchText}` ||
                            `No se encontraron productos para la búsqueda ${location.state.searchText || ''}`
                        }
                    </Heading>
                </Result.Content>
                <Result.Content justifyContent={'flex-end'}>
                    {
                        !isMobile &&
                        <Result.Content width={'20%'}>
                            &nbsp;
                        </Result.Content>
                    }
                    <Result.Content width={isMobile ? '100%':'80%'} flexWrap={'wrap'}>
                        {
                            location.state.objProduct.products.map((product, index) => {
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
                        }
                    </Result.Content>
                </Result.Content>
                <Result.Content justifyContent={'flex-end'}>
                    {
                        !isMobile &&
                        <Result.Content width={'20%'}>
                            &nbsp;
                        </Result.Content>
                    }
                    <Result.Content width={isMobile ? '100%':'80%'} flexWrap={'wrap'} justifyContent={'center'}>
                        <Paginator 
                            totalPages={location.state.objProduct.totalPages} 
                            callback={async (page) => {
                                try{
                                    let objProduct = await getProducts(location.state.searchText, page-1);

                                    history.push(
                                        {
                                            pathname: '/search',
                                            state: {
                                                objProduct: objProduct.data,
                                                searchText: location.state.searchText
                                            },
                                        }
                                    )
                                }catch(err){
                                    console.log(err)
                                }
                            }}
                            page={location.state.objProduct.currentPage}
                        />
                    </Result.Content>
                </Result.Content>
            </Result.Body>
        </Result.Container>
    );
}

export default SearchResultScreen;