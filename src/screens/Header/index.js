import React from 'react'
import {Header} from './styled'
import Search from '../../components/Search'
import Logo from "../../assets/images/lider-logo.svg";
import {useHistory} from "react-router-dom";
import {getProducts} from '../../services/productService'
import {isMobile} from "react-device-detect";

const HeaderComponent = () => {
    const history = useHistory();

    return (
        <Header.Container>
            <Header.Content>
                <img src={Logo} width={isMobile ? '100':'152'} height="50" alt={'logo'} style={{marginLeft:10}} onClick={() => history.push('/')}/>
                <Search searchAction={async (searchText) => {
                        try{
                            let objProduct = await getProducts(searchText,0);
  
                            history.push(
                                {
                                    pathname: '/search',
                                    state: {
                                        objProduct: objProduct.data,
                                        searchText: searchText
                                    },
                                }
                            )
                        }catch(err){
                            console.log(err)
                        }
                    }
                }
                />
            </Header.Content>
        </Header.Container>
    )
}

export default HeaderComponent;