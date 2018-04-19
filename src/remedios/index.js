import React, { Component } from 'react';

import styles from './styles';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    List,
    ListItem,
    Text,
    Fab,
    Tabs,
    Grid,
    Col,
    Row,
    H3,
    Title
  } from "native-base";

const data =  [{id: 1, nome: "remedio 01", bula: "", dateStart: new Date('2018-01-03'), dateEnd: new Date('2018-01-15'), hora: "15:00", dias:["seg ", "ter "]}];

export default class RemediosIndex extends Component {
    
    constructor(props) {
        super(props);
        this.state = {remedios: data};
    }

    render() 
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Remedios</Title>
                    </Body>    
                    <Right />    
                </Header> 
                <Content>  
                    <List
                        dataArray={this.state.remedios}
                        renderRow = {(remedio) => 
                            <ListItem button
                                onPress = {() => this.props.navigation.navigate("RemediosView", {remedio: remedio})}>
                                <Text>{remedio.nome}</Text>
                            </ListItem>    
                        }>
                    </List>   
                </Content>   
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position = "bottomRight"
                    onPress = {() => this.props.navigation.navigate("RemediosCreate")}>
                    <Icon name="ios-add" />
                </Fab>      
            </Container>    
        );
    }    
}