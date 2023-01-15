import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import {Searchbar, Form, SearchFormButton, SearchFormLabel, SearchFormInput} from "./Searchbar.styled"
import {toast} from "react-toastify";
import { useState } from 'react';

export const Search = ({onSubmit}) => {
    const [query, setQuery] = useState('');


    const handleChange = e => {
        setQuery(e.currentTarget.value.toLowerCase())
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            toast('Enter the name of the picture!');
            return;
        }

        onSubmit(query);

    }
               
        return(
        <Searchbar>
        <Form onSubmit={handleSubmit}>
            <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
            </SearchFormButton>
    
            <SearchFormInput
            name="name"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
            />
        </Form>
        </Searchbar>

    )}



    Search.propTypes ={
        onSubmit: PropTypes.func.isRequired, 
      }
