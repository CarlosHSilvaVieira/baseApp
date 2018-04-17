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

import ListVacinas from './list';  
import VacinasReinforce from './reinforce';

export default class VacinasIndex extends Component {

    constructor(props)
    {
        super(props);
        this.state = {pagina: 0}
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
                    <Tab heading="Reforçar">
                        <VacinasReinforce navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Minha lista">
                        <ListVacinas navigation={this.props.navigation}/>
                        <Fab
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate("VacinasCreate")}>
                            <Icon name="ios-add"/>
                        </Fab> 
                    </Tab>  
                </Tabs>    
                   
            </Container>    
        );
    }
}