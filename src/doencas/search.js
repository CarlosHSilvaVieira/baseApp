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
    CheckBox,
    Thumbnail,
    Footer
  } from "native-base";

import MyListItem from '../components/List/ListItem/listItem';

import axios from 'axios';

import styles from '../style/styles';

export default class DoencasSearch extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {nome: '', doencas: [], selecionadas: []};
    }

    pesquisar()
    {
        let uri = global.uri + "/doencas/" + this.state.nome;
        axios.get(uri)
        .then((resposta) => {this.setState({doencas: resposta.data})})
        .catch((erro) => alert(erro))
    }

    voltar()
    {
        this.props.navigation.goBack();

        if(this.props.navigation.state.params)
        {
            this.props.navigation.state.params.onAddDoencas(this.state.selecionadas);
        }
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
                        <Input placeholder="Digite o nome da doença" onChangeText={(text) => {this.setState({nome: text})}}/>
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

                        renderRow={(doenca, sectionID, rowId) => 
                        {
                            return(
                                <MyListItem objeto={doenca} retornaSelecionado={this.getSelecionado}/>
                            ); 
                        }   
                    }/>   
                </Content>    
            </Container>    
        );
    }
}