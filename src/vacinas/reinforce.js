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
    H3
  } from "native-base";

import axios from 'axios';

export default class VacinasReinforce extends Component {

    constructor(props)
    {
        super(props);
        this.state = {reforcar: []};
    }

    getVacinasReforcar()
    {
        let uri = global.uri + "/vacinas/reforcar/"+ global.paciente._id;
        axios.get(uri)
        .then((response) => {this.setState({reforcar: response.data})})
        .catch((error) => alert(error))
    }

    componentWillMount()
    {
        this.getVacinasReforcar();
    }

    shouldComponentUpdate()
    {
        this.getVacinasReforcar();
        return true;
    }

    render()
    {
        return(
            <Content>
                <List dataArray={this.state.reforcar}
                    renderRow={(item) =>                        
                        <ListItem button
                        onPress = {() => this.props.navigation.navigate("VacinasEdit", {vacina: item})}>
                            <Text>{item.nome}</Text>
                        </ListItem>    
                    }>
                </List>
                
            </Content>    
        );
    }
} 