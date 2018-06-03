import React, { Component } from 'react';

import { Dimensions } from 'react-native';

import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Content
  } from 'native-base';

import MapView, { Marker } from 'react-native-maps';

import * as request from '../components/request';

import MyMap from '../components/myMap';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { dimensions: undefined, dados: [] };
    }

    /*componentWillMount() {
        this.getAllPoints();
    }*/

    getAllPoints() {
        const valor = request.getAllPoints();
        valor.then((resposta) => { this.setState({ dados: resposta }); });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>   
                <MyMap />          
            </Container> 
        );
    }
}  
