import React, { Component } from 'react';

import styles from './styles';

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
    List,
    ListItem,
    Text,
    Tab,
    Tabs,
    Grid,
    Col,
    Row,
    H3,
    Fab
  } from "native-base";

import axios from 'axios';

import ListVacinas from './list';  
import VacinasReinforce from './reinforce';

export default class VacinasIndex extends Component {

    constructor(props)
    {
        super(props);
        this.state = {pagina: 0, vacinas: [], reforcar: []}
    }

    render()
    {
        return(
            <Container style={styles.container}>
                <Header hasTabs>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Vacinas</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs initialPage={this.state.pagina}>
                     <Tab heading="Minha lista">
                        <ListVacinas navigation={this.props.navigation}/>
                    </Tab> 
                    <Tab heading="Reforçar">
                        <VacinasReinforce navigation={this.props.navigation}/>
                    </Tab>
                </Tabs> 
            </Container>    
        );
    }
}