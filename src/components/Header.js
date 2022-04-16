import React from 'react'
import SearchFilter from './SearchFilter';
import { StyledHeader, StyledFilter } from './styles/Header.Styled';

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <StyledFilter>
                    <div>
                        {/* <BtnLink to='/Login'>
                            <p>Hola, identifícate</p>
                        </BtnLink> */}
                    </div>
                </StyledFilter>
                <SearchFilter />
            </StyledHeader>
        </div>
    )
}

export default Header