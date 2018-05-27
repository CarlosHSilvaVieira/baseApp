import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Input,
    Item,
    List,
    ListItem,
    Thumbnail,
  } from 'native-base';

import * as request from '../components/request';

export default class MedicosSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { crm: '', medicos: [] };
    }

    pesquisar() {
        const uri = '/medicos/';
        const valor = request.get(uri.concat(this.state.crm));
        valor.then((resposta) => { this.setState({ medicos: resposta }); });
    }

    selecionarMedico(dados) {
        if (this.props.navigation.state.params) {
            this.props.navigation.goBack();
            this.props.navigation.state.params.getMedicoSelecionado(dados);
        }
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="Digite o CRM" 
                            onChangeText={(text) => { this.setState({ crm: text }); }} 
                        />
                        <Button onPress={() => this.pesquisar()}>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <List
                        dataArray={this.state.medicos} 
                        renderRow={(medico) => 
                        <ListItem 
                            avatar 
                            selected 
                            button 
                            onPress={() => this.selecionarMedico(medico)}
                        >
                            <Left>
                                <Thumbnail source={{ uri: '../../assets/user.jpg' }} />
                            </Left>
                            <Body>
                                <Text>{medico.nome}</Text>
                                <Text note>{medico.crm}</Text>
                            </Body>
                            <Right />
                        </ListItem>    
                    }
                    />   
                </Content>    
            </Container>    
        );
    }
}
