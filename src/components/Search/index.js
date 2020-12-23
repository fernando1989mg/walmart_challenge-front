import React from 'react'
import {Search} from './styled'
import {Form, Field} from "react-final-form";
import {isMobile} from "react-device-detect";

const SearchComponent = ({searchAction}) => {
    const onSubmit = (values, form) => {
        searchAction(values.searchText);
    };

    return (
        <Search.Container>
            <Search.Content>
                <Form
                    onSubmit={(values, form) => onSubmit(values, form)}
                    render={({handleSubmit, invalid, values, form}) => (
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="button" 
                                id="submit" 
                                value="🔍"
                                onClick={() => form.submit()}
                            />
                            <Field
                                name="searchText"
                                render={props => (
                                    <input
                                        {...props}
                                        {...props.input}
                                        placeholder={isMobile ? "¿Qué buscas?":"¿Qué estás buscando?"}
                                        autoComplete="off"
                                        autoCorrect="off"
                                        spellCheck="off"
                                        type="search"
                                        name="searchText"
                                    />
                                )}
                            />
                        </form>
                    )}
                />
            </Search.Content>
        </Search.Container>
    )
}

export default SearchComponent;