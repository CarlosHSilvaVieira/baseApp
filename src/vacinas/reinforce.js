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

const datas =  ['vacina 04', 'vacina 05', 'vacina 06'];

export default class VacinasReinforce extends Component {

    constructor(props)
    {
        super(props);
        this.state = {items: datas};
    }

    render()
    {
        return(
            <Content>
                <List dataArray={this.state.items}
                    renderRow={(item) =>                        
                        <ListItem button
                        onPress = {() => this.props.navigation.navigate("VacinasView", {vacina: {text: item}})}>
                            <Text>{item}</Text>
                        </ListItem>    
                    }>
                </List>
                
            </Content>    
        );
    }
} 