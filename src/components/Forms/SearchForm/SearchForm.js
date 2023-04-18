import React, {useEffect} from 'react';
import {SearchIcon} from "../../Icons/SearchIcon";

import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {searchActions} from "../../../redux";
import {useDispatch} from "react-redux";

import css from './Search.css';


const SearchForm = () => {
    const {handleSubmit, register, reset} = useForm();

    const [query, setQuery] = useSearchParams({page:'1'});

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const queryName = query.get('name');
    const queryPageNumber = query.get('page');


    useEffect(()=>{
        dispatch(searchActions.getSearch({page:queryPageNumber,name:queryName}))
    },[dispatch,query,queryPageNumber])

    const findMovie =  async (dataInput) => {
        const {name} = dataInput;
        if (name !== '' ) {
            setQuery(name)
            navigate(`search/movie?name=${name}`)
            reset()
        }
    };

    return (
            <form onSubmit={handleSubmit(findMovie)}>
                <input placeholder={'Search'} {...register('name')}/>
                <button><SearchIcon/></button>
            </form>
    );
};

export {
    SearchForm
}