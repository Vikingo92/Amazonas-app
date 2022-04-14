import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import { StyledHeader, StyledFilter } from './styles/Header.Styled';

const Header = () => {

   
    return (
        <div>
                    
            <StyledHeader>
                <StyledFilter>
                    <div>
                        <Link to='/Login'>
                           <button> Iniciar Sesion</button>
                        </Link>
                        <img src='/images/logo-amazon.png' alt='' />
                        <SearchFilter />
                    </div>
                </StyledFilter>
            </StyledHeader>
        </div>
    )
}

export default Header