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

const data = [
    {
        id: 1, 
        medico: {nome: "José", crm: 156631, especialidade: "Especialidade"}, 
        local: "Hospital 01", data: new Date(), 
        data: new Date("2018-03-25"),
        doencas: [{id: 1, nome: "Doenca 01", localizacao: []}], 
        receita: 
        {
            texto: "Algum texto", 
            remedios: [
                {id: 1, nome: "remedio 01", bula: "", dateStart: new Date('2018-01-03'), dateEnd: new Date('2018-01-15'), hora: "15:00", dias:["seg ", "ter "]}
            ]
        } 
    }];

export default class ConsultasIndex extends Component {

    constructor(props)
    {
        super(props);
        this.state = {consultas: data};
    }

    render()
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress = {() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name = "menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Consultas</Title>
                    </Body>
                    <Right />    
                </Header>
                <Content>  
                    <List
                        dataArray={this.state.consultas}
                        renderRow = {(consulta) => 
                            <ListItem button
                                onPress = {() => this.props.navigation.navigate("ConsultasView", {consulta: consulta})}>
                                <Left><Text>{consulta.local}</Text></Left>
                                <Right><Text>{consulta.data.toLocaleDateString()}</Text></Right>
                            </ListItem>    
                        }>
                    </List>   
                </Content>   
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position = "bottomRight"
                    onPress = {() => this.props.navigation.navigate("ConsultasCreate")}>
                    <Icon name="ios-add" />
                </Fab>           
            </Container>    
        );
    }
}  