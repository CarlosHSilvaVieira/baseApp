import React, { Component } from 'react';

import {
    Content,
    List,
    ListItem,
    Text
  } from 'native-base';

import * as request from '../components/request';

export default class VacinasReinforce extends Component {

    constructor(props) {
        super(props);
        this.state = { reforcar: [] };
    }

    componentWillMount() {
        this.getVacinasReforcar();
    }

    shouldComponentUpdate() {
        this.getVacinasReforcar();
        return true;
    }

    getVacinasReforcar() {
        const uri = '/vacinas/paciente/reforcar/';
        const valor = request.getByPaciente(uri, global.paciente._id);
        valor.then((response) => { this.setState({ reforcar: response }); });
    }

    render() {
        return (
            <Content>
                <List 
                    dataArray={this.state.reforcar}
                    renderRow={(item) =>                        
                        <ListItem 
                            button
                            onPress={() => this.props.navigation.navigate('VacinasEdit', 
                            { vacina: item })} 
                        >
                            <Text>{item.nome}</Text>
                        </ListItem>    
                    }
                />
            </Content>    
        );
    }
} 