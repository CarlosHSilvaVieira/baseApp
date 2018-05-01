import React, { Component } from "react";

import { ListView } from 'react-native';

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
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    CheckBox,
    Textarea
  } from "native-base";

import styles from './styles';

export default class ViewDoencasConsulta extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux = state.params.doencas ? state.params.doencas : [];
        this.state = {doencas: aux}
    }


    render()
    {
        return(
            <Container>
                 <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Lista de doenças</Title>
                    </Body>    
                    <Right />   
                </Header>
                <Content>
                    <List
                        dataArray = {this.state.doencas}
                        renderRow = {(data) =>
                            <ListItem>
                                <Text> {data.nome} </Text>
                            </ListItem>
                        }
                    />
                </Content>    
            </Container>    
        );
    }
}