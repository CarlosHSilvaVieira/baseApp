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
    H3
  } from "native-base";

const data =  [{id: 1, name: "remedio 01", bull: "", dateStart: new Date('2018-01-03'), dateEnd: new Date('2018-01-15'), hours: ["15:00"]}];

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
                        <Text>Remedios</Text>
                    </Body>    
                    <Right />    
                </Header> 
                <Content>  
                    <List
                        dataArray={this.state.remedios}
                        renderRow = {(remedio) => 
                            <ListItem button
                                onPress = {() => this.props.navigation.navigate("RemediosView", {remedio: remedio})}>
                                <Text>{remedio.name}</Text>
                            </ListItem>    
                        }>
                    </List>   
                </Content>   
                <Fab
                    style = {styles.fab}
                    position = "bottomRight"
                    onPress = {() => this.props.navigation.navigate("RemediosCreate")}>
                    <Icon name="ios-add" />
                </Fab>      
            </Container>    
        );
    }    
}