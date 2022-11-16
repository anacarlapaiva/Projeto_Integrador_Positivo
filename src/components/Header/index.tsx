import React from 'react'
import { Container, HeaderElement, Comeback, Name } from './styles'

const Header = () => {
    return (
        <Container>
            <HeaderElement>
                <Comeback>Bem vindo,
                    <Name>Ana Carla</Name>
                </Comeback>

                {/* <Picture /> */}
            </HeaderElement>
        </Container>
    )
}

export default Header