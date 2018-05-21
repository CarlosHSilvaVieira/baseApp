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

import Axios from 'axios';

export default class ViewRemediosConsulta extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux = state.params.remedios ? state.params.remedios : [];
        this.state = {remedios: [], aux: aux}
    }

    componentWillMount()
    {
        this.state.aux.forEach(element => {
            this.getRemedios(element);
        });
    }

    getRemedios(id)
    {
        let uri = global.uri + "/remedio/" + id;

        Axios.get(uri)
        .then((response) => {this.atualiza(response.data)})
        .catch((err) => alert(err))
    }

    atualiza(data)
    {
        let vetor = this.state.remedios;
        vetor.push(data);
        this.setState({remedios: vetor});
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
                        <Title>Lista de remedios</Title>
                    </Body>    
                    <Right />   
                </Header>
                <Content>
                    <List
                        dataArray = {this.state.remedios}
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