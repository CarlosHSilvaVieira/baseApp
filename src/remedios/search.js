import React, {Component} from 'react';

import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
  } from "native-base";

import MyListItem from '../components/List/ListItem/listItem';

import axios from 'axios';

import styles from '../style/styles';

export default class RemediosSearch extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {nome: '', remedios: [], selecionadas: []};
    }

    pesquisar()
    {
        let uri = global.uri + "/remedios/" + this.state.nome;
        axios.get(uri)
        .then((resposta) => {this.setState({remedios: resposta.data})})
        .catch((erro) => alert(erro))
    }

    getSelecionado = (selecionado, objeto) =>
    {
        if(selecionado == true)
        {
            this.adicionaSelecionado(objeto);
        }
        else
        {
            this.removeSelecionado(objeto);
        }
    }

    adicionaSelecionado(objeto)
    {
        this.state.selecionadas.push(objeto);
    }

    removeSelecionado(objeto)
    {
        let index = this.state.selecionadas.indexOf(objeto);
        this.state.selecionadas.splice(index, 1);
    }


    voltar()
    {
        this.props.navigation.goBack();

        if(this.props.navigation.state.params)
        {
            this.props.navigation.state.params.onAddRemedios(this.state.selecionadas);
        }
    }

    render()
    {
        return(
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Button
                            transparent
                            onPress={() => this.voltar()}
                            >
                            <Icon name="arrow-back" />
                        </Button>
                        <Icon name="ios-search"/>
                        <Input placeholder="Digite o nome do remedio" onChangeText={(text) => {this.setState({nome: text})}}/>
                        <Button onPress={() => this.pesquisar()}>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Item>
                </Header>
                <Content>
                    <List
                        pagingEnabled
                        scrollEnabled

                        dataArray = {this.state.remedios}
                        renderRow = {(row, sectionId, rowId) => 
                        {
                            return(<MyListItem objeto={row} retornaSelecionado={this.getSelecionado} />);
                        }
                    }/>   
                </Content>    
            </Container>    
        );
    }
}