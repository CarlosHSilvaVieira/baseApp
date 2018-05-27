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

import MapView from 'react-native-maps';

//const fotosuario = require('../../assets/user.jpg');

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { dimensions: undefined };
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
                <Content>
                <MapView
                    style={{ width: Dimensions.get('window').width, height: (Dimensions.get('window').height - 80) }}
                    showsUserLocation
                    zoomControlEnabled
                    zoomEnabled
                    customMapStyle={[]}    
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
                </Content>             
            </Container> 
        );
    }
}  
