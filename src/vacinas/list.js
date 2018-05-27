import React, { Component } from 'react';

import {
    Content,
    Icon,
    List,
    ListItem,
    Text,
    Fab,
    Container
  } from 'native-base';

import * as request from '../components/request';

export default class ListVacinas extends Component {
    
    constructor(props) {
        super(props);
        this.state = { vacinas: [] };
    }

    componentWillMount() {
        this.getVacinas();
    }

    getVacinas() {
        const uri = '/vacinas/paciente/';
        const valor = request.getByPaciente(uri, global.paciente._id);
        valor.then((response) => { this.setState({ vacinas: response }); });
    }

    addVacina = (dados) => {
        const vetor = this.state.vacinas;
        vetor.push(dados);
        this.setState({ vacinas: vetor });
    }

    deleteVacina = (vacina) => {
        const vetor = this.state.vacinas;
        const index = vetor.indexOf(vacina);
        vetor.splice(index, 1);
        this.setState({ vacinas: vetor });
    }

    render() {
        this.getVacinas();
        return (
            <Container>
                <Content>
                    <List 
                        dataArray={this.state.vacinas}
                        renderRow={(item) =>                        
                            <ListItem 
                            button
                            onPress={
                                () => this.props.navigation.navigate('VacinasView', 
                                { vacina: item, deleteVacina: this.deleteVacina })} 
                            >
                                <Text>{item.nome}</Text>
                            </ListItem>    
                        }
                    />
                </Content>    
                <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={
                    () => this.props.navigation.navigate('VacinasCreate',
                     { addVacina: this.addVacina })}
                >
                    <Icon name="ios-add" />
                </Fab>
            </Container>    
        );
    }
} 
