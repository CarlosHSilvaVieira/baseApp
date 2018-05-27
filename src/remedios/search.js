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

export default class RemediosSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', remedios: [], selecionadas: [] };
    }

    getSelecionado = (selecionado, objeto) => {
        if (selecionado === true) {
            this.adicionaSelecionado(objeto);
        } else {
            this.removeSelecionado(objeto);
        }
    }

    pesquisar() {
        const uri = '/remedios/';
        const valor = request.get(uri.concat(this.state.nome));
        valor.then((resposta) => { this.setState({ remedios: resposta }); });
    }

    adicionaSelecionado(objeto) {
        this.state.selecionadas.push(objeto);
    }

    removeSelecionado(objeto) {
        const index = this.state.selecionadas.indexOf(objeto);
        this.state.selecionadas.splice(index, 1);
    }

    voltar() {
        if (this.props.navigation.state.params) {
            this.props.navigation.state.params.onAddRemedios(this.state.selecionadas);
        }
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.voltar()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Digite o nome do remedio" 
                            onChangeText={(text) => { this.setState({ nome: text }); }} 
                        />
                        <Button onPress={() => this.pesquisar()}>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <List
                        pagingEnabled
                        scrollEnabled

                        dataArray={this.state.remedios}
                        renderRow={(row) => 
                            <MyListItem objeto={row} retornaSelecionado={this.getSelecionado} />
                        }
                    />   
                </Content>    
            </Container>    
        );
    }
}
