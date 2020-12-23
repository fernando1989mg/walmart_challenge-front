import React from 'react'
import {Card} from './styled'
import Heading from '../Heading'
import {formatNumber} from '../../utils/formatNumber'

const CardProduct = ({
    imageUrl, 
    brand,
    description,
    price,
    discountRate,
    oldPrice,
    style}) => {
    return (
        <Card.Container style={style}>
            <Card.Content backgroundColor={'#f9f9f9'}>
                <Card.Image src={'http://'+imageUrl}/>
            </Card.Content>

            <Card.Content backgroundColor={'white'}>
                <Card.Section flexDirection={'row'}>
                    <Heading type={'H3'} style={{marginTop:0}}>{brand}</Heading>
                    <Heading type={'H3'} style={{marginTop:0,marginLeft:10, color:'gray'}}>
                        {description}
                    </Heading>
                </Card.Section>
                <Card.Section flexDirection={'row'}>
                    <Heading type={'H2'} style={{marginBottom:5}}>${formatNumber(price)}</Heading>
                    {
                        discountRate > 0 &&
                        <Heading type={'H3'} style={{marginBottom:5,marginLeft:10,color:'red'}}>
                            {discountRate}%
                        </Heading>
                    }
                </Card.Section>
                <Card.Section>
                    {
                        oldPrice > 0 &&
                        <Heading type={'H3'} style={{textDecoration:'line-through', marginTop:0, marginBottom:0, color:'gray'}}>
                            ${formatNumber(oldPrice)}
                        </Heading>
                    }
                </Card.Section>
            </Card.Content>
        </Card.Container>
    );
}

export default CardProduct;