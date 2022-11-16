import React from 'react'
import { Container, HeaderElement, Comeback, Name, UserImg } from './styles'
import User from "../../assets/profile-user.png";

const Header = () => {
    return (
        <Container>
            <HeaderElement>
                <Comeback>Bem vindo,
                    <Name>{'\n'}Ana Carla</Name>
                </Comeback>

                <UserImg source={User}/>
            </HeaderElement>
        </Container>
    )
}

export default Header