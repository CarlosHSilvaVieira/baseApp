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
    ListItem,
    CheckBox
  } from "native-base";

import axios from 'axios';

import styles from '../style/styles';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {campo: ""};
    }

    search()
    {
        //axios
        //this.props.metodo(response.data)
        //else this.props.metodo([])
    }

    render()
    {
        return(
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input onChangeText={(texto) => this.setState({campo: texto})} placeholder="Pesquisar CRM" />
                </Item>
                <Button
                transparent
                onPress={() => this.search()}
                >
                    <Text>Pesquisar</Text>
                </Button>
            </Header>
        );
    }
}
