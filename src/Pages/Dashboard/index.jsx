import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { Container, Content, Input, Button } from './styles'

export const Dashboard = () => {
    const [part1, setPar1] = useState(0)

    return (
        <Container>
            <Content>
                <label htmlFor="Nickname">
                    <h1 className="title">Digite o usuário GIT</h1>
                    <Input  id="nickname" type="text" placeholder="Digite aqui seu usuário" />
                </label>
            

                <Button> Buscar <FaSearch /> </Button>
            </Content>
        </Container>
    )
}