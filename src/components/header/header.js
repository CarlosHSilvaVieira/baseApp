import React, {Component} from 'react';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Label,
  } from "native-base";


export default class MyHeader extends Component 
{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <Header>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.voltar()}
                    >
                    <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.titulo}</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => this.props.metodo()}
                        >
                        <Text>{this.props.texto}</Text>
                        </Button>
                </Right>
            </Header>
        );
    }
} 