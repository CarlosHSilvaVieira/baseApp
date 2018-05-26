import React, { Component } from "react";

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
    ListItem,
    List,
    View,
    Text,
    Grid,
    Col,
    Row,
    Footer,
    FooterTab,
    Form,
    Picker,
    Label,
    Input,
    H1,
    Item,
    Textarea
  } from "native-base";

import styles from './styles';

import axios from 'axios';

import DatePicker from 'react-native-datepicker';

export default class DoencaEdit extends Component {
    
    constructor(props)
    {
        super(props);
        let aux_doenca = this.props.navigation.state.params ? this.props.navigation.state.params.doenca : null;
        this.state = {nome: aux_doenca.nome, sintomas: aux_doenca.sintomas, 
            dataInicio: new Date(aux_doenca.dataInicio), dataFim: new Date(aux_doenca.dataFim), 
            deonca: aux_doenca, _id: aux_doenca._id};
    }

    onValueChange(valor)
    {
        this.setState({selecionado: valor});
    }

    sendRequest()
    {

        let uri = global.uri + "/doenca/" + this.state._id;
            let doenca_objeto = {nome: this.state.nome, sintomas: this.state.sintomas, dataInicio: this.state.dataInicio, dataFim: this.state.dataFim, paciente: global.paciente._id};
            
        axios.put(uri,  doenca_objeto)
        .then((response) => this.onSave(response.data))
        .catch((error) => alert(error))
    }

    

    onSave(objeto)
    {
        this.props.navigation.goBack();

        if(this.props.navigation.state.params.updateDoenca)
        {
            this.props.navigation.state.params.updateDoenca(objeto);
        }
    }


    render()
    {
        return(
            <Container style={styles.conteiner}>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Doenças</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.sendRequest()}
                            >
                            <Text>Salvar</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Item style={styles.item}>
                            <Label>Nome da doença</Label>
                            <Input value={this.state.nome} onChangeText={(texto) => this.setState({nome: texto})} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input value={this.state.sintomas} onChangeText={(texto) => this.setState({sintomas: texto})} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Inicio dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.dataInicio}
                                    mode='date'
                                    showIcon = {false}
                                    androidMode = "calendar"
                                    placeholder='select date'
                                    minDate={new Date('1999-01-01')}
                                    maxDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={(date) => {this.setState({dataInicio: date})}}
                                /> 
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Fim dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.dataFim}
                                    mode='date'
                                    showIcon = {false}
                                    androidMode = "calendar"
                                    placeholder='select date'
                                    minDate={new Date('1999-01-01')}
                                    maxDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={(date) => {this.setState({dataFim: date})}}
                                /> 
                        </Item>   
                    </Form>
                </Content>     
            </Container>
        );
    }
}