import React, { Component } from 'react';

import styles from './styles';

import {
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
    Fab,
    Container
  } from "native-base";

import axios from 'axios';  

export default class ListVacinas extends Component {

    constructor(props)
    {
        super(props);
        this.state = {vacinas: []};
    }

    componentWillMount()
    {
        this.getVacinas();
    }

    getVacinas()
    {
        let uri = global.uri + "/vacinas/"+ global.paciente._id;
        axios.get(uri)
        .then((response) => {this.setState({vacinas: response.data})})
        .catch((error) => alert(error))
    }

    addVacina = (dados) =>
    {
        let vetor = this.state.vacinas;
        vetor.push(dados);
        this.setState({vacinas: vetor});
    }

    deleteVacina = (vacina) =>
    {
        let vetor = this.state.vacinas;
        let index = vetor.indexOf(vacina);
        vetor.splice(index, 1);
        this.setState({vacinas: vetor});
    }

    render()
    {
        return(
            <Container>
                <Content>
                    <List dataArray={this.state.vacinas}
                        renderRow={(item) =>                        
                            <ListItem button
                            onPress = {() => this.props.navigation.navigate("VacinasView", {vacina: item, deleteVacina: this.deleteVacina})}>
                                <Text>{item.nome}</Text>
                            </ListItem>    
                        }>
                    </List>
                </Content>    
                <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.props.navigation.navigate("VacinasCreate", {addVacina: this.addVacina})}>
                    <Icon name="ios-add"/>
                </Fab>
            </Container>    
        );
    }
} 