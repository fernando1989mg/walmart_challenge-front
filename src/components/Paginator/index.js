import React, {useState} from 'react'
import {Paginator} from './styled'

const PaginatorComponent = ({totalPages, callback, page}) => {
    const [pageActive, setPageActive] = useState(page || 1);

    return (
        <Paginator.Container>
            {
                pageActive > 1 &&
                <Paginator.Prev 
                    size="50" 
                    onClick={() => {
                        setPageActive(pageActive-1);
                        callback(pageActive-1);
                    }}
                />
            }
            {
                [...Array(totalPages)].map((e,i) => {
                    return (
                        (i+1) == pageActive &&
                        <Paginator.ActivePage key={i}>{i+1}</Paginator.ActivePage> ||
                        <Paginator.Page
                            onClick={() => {
                                setPageActive(i+1);
                                callback(i+1);
                            }}
                            key={i}
                        >
                                {i+1}
                        </Paginator.Page>
                    )
                })
            }
            {
                pageActive < totalPages &&
                <Paginator.Next
                    size="50"
                    onClick={() => {
                        setPageActive(pageActive+1)
                        callback(pageActive+1);
                    }}
                />
            }
        </Paginator.Container>
    );
}

export default PaginatorComponent;