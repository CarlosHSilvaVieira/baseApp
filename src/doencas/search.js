import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Text,
    Input,
    Item,
    List,
  } from 'native-base';

import MyListItem from '../components/list/listItem/listItem';

import * as request from '../components/request';

export default class DoencasSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', doencas: [], selecionadas: [] };
    }

    getSelecionado = (selecionado, objeto) => {
        if (selecionado === true) {
            this.adicionaSelecionado(objeto);
        } else {
            this.removeSelecionado(objeto);
        }
    }

    pesquisar() {
        const local = '/doencas/';
        const valor = request.get(local.concat(this.state.nome));
        valor.then((resposta) => { this.setState({ doencas: resposta }); });
    }

    backPage() {
        if (this.props.navigation.state.params) {
            this.props.navigation.state.params.onAddDoencas(this.state.selecionadas);
        }
        this.props.navigation.goBack();
    }

    adicionaSelecionado(objeto) {
        this.state.selecionadas.push(objeto);
    }

    removeSelecionado(objeto) {
        const index = this.state.selecionadas.indexOf(objeto);
        this.state.selecionadas.splice(index, 1);
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.backPage()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="Digite o nome da doença" 
                            onChangeText={(text) => { this.setState({ nome: text }); }} 
                        />
                        <Button onPress={() => this.pesquisar()}>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <List
                        dataArray={this.state.doencas} 
                        pagingEnabled
                        scrollEnabled
                        renderRow={(doenca) => 
                            <MyListItem 
                                objeto={doenca} 
                                retornaSelecionado={this.getSelecionado} 
                            />  
                        } 
                    />   
                </Content>    
            </Container>    
        );
    }
}
