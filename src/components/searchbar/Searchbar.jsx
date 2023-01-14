
import { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import {Searchbar, Form, SearchFormButton, SearchFormLabel, SearchFormInput} from "./Searchbar.styled"
import {toast} from "react-toastify";



    export class Search  extends Component {
        state = {
            query: '',
        }

        handleChange = e => {
            
            this.setState ({
                query: e.currentTarget.value.toLowerCase(),
            })
            
        }

        handleSubmit = e => {
            e.preventDefault();
            if (this.state.query.trim() === '') {
                toast('Enter the name of the picture!');
                return;
            }

            this.props.onSubmit(this.state.query);

            // this.reset();
        }
        
        // reset = () => {
        //     this.setState ({query: '',});
        // };

        render(){            
            return(
            <Searchbar>
            <Form onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit">
                <SearchFormLabel>Search</SearchFormLabel>
                </SearchFormButton>
        
                <SearchFormInput
                name="name"
                type="text"
                autocomplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
                value={this.state.query}
                />
            </Form>
            </Searchbar>

        )}

        }
    

        Search.propTypes ={
            onSubmit: PropTypes.func.isRequired, 
          }