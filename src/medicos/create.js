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

import MyHeader from '../components/header/header';

export default class MedicosCreate extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {nome: "", crm: "", especialidade: ""}
    }

    onSave()
    {
        let dados = {nome: this.state.nome, crm: this.state.crm, especialidade: this.state.especialidade};

        let uri = global.uri + "/medicos";
        axios.post(uri, dados)
        .then((response) => {this.props.navigation.goBack()})
        .catch((error) => {alert(error)});
    }

    render()
    {
        return(
            <Container>
                <MyHeader titulo="Médico" voltar={this.props.navigation.goBack} metodo={this.onSave} texto="Salvar"/>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Medico</Label>
                            <Input onChangeText = {(texto) => this.setState({nome: texto})} />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>CRM</Label>
                            <Input onChangeText = {(texto) => this.setState({crm: texto})} />
                        </Item>   
                        <Item inlineLabel style={styles.item}>
                            <Label>Especialidade</Label>
                            <Input onChangeText = {(texto) => this.setState({especialidade: texto})} />
                        </Item>    
                    </Form>    
                </Content>    
            </Container>    
        );
    }
}