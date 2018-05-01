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

import axios from 'axios';  

const pacienteId = "5ae1e6c71162282378693abc";

export default class RemediosIndex extends Component {
    
    constructor(props) 
    {
        super(props);
        let id_paciente = this.props.navigation.state.params ? this.props.navigation.state.params.id_paciente : null;
        this.state = {remedios: [], id_paciente: id_paciente};
    }

    getRemedios()
    {
        if(pacienteId != null)
        {
            let uri = "http://192.168.0.10:3000/remedios/" + global.paciente._id;

            axios.get(uri)
            .then((response) => this.setState({remedios: response.data}))
            .catch((erro) => alert(erro));
        }
        else
        {
            alert("erro ao buscar os remédios do usuário");
        }
    }

    componentWillMount()
    {
        this.getRemedios();
    }

    addRemedio = (data) =>
    {
        let vetor = this.state.remedios;
        vetor.push(data);
        this.setState({remedios: vetor});
    }

    deleteRemedio = (data) =>
    {
        let vetor = this.state.remedios;
        let index = vetor.indexOf(data);
        vetor.splice(index, 1);
        this.setState({remedios: vetor});
    }

    render() 
    {
        this.getRemedios();
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
                                onPress = {() => this.props.navigation.navigate("RemediosView", {remedio: remedio, deleteRemedio: this.deleteRemedio})}>
                                <Text>{remedio.nome}</Text>
                            </ListItem>    
                        }>
                    </List>   
                </Content>   
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position = "bottomRight"
                    onPress = {() => this.props.navigation.navigate("RemediosCreate", {addRemedio: this.addRemedio})}>
                    <Icon name="ios-add" />
                </Fab>      
            </Container>    
        );
    }    
}