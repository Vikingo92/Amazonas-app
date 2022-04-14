import React from 'react'
import { StyledCard, Card, StyledLink } from './styles/Card.Styled';


const Cards = ({ data }) => {
    return (
        <>
            <StyledCard>
                {data.map(item => (
                    <Card key={item.id}>
                        <StyledLink to={`/detail/${item.id}`} >
                            <h4>{item.category}</h4>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p style={{ color: 'red' }}>$ {item.price}</p>
                        </StyledLink>
                    </Card>
                ))}
            </StyledCard>
            <h3>Productos relacionados con este artículo</h3>
        </>
    )
}

export default Cards