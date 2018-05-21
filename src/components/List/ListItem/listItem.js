import React, {Component} from 'react';

import { ListItem, Body, Text, Container } from 'native-base';

export default class MyListItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {selecionado: false};
    }

    retornaSelecionado = () =>
    {
        this.setState({selecionado: this.state.selecionado == true ? false: true});

        this.props.retornaSelecionado(!this.state.selecionado, this.props.objeto);
    }

    render()
    {
        return(
            <ListItem button selected={this.state.selecionado} onPress={this.retornaSelecionado}>
                <Body>
                    <Text>{this.props.objeto.nome}</Text>
                </Body>    
            </ListItem>
        );
    }
}