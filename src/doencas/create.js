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

export default class DoencaCreate extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = { nome: '', sintomas: "",  dataInicio: '', dataFim: ''};
    }

    onValueChange(valor)
    {
        this.setState({selecionado: valor});
    }

    sendRequest()
    {
        let uri = global.uri + "/doencas";
        let doenca_objeto = {nome: this.state.nome, sintomas: this.state.sintomas, 
        dataInicio: this.state.dataInicio, dataFim: this.state.dataFim, paciente: global.paciente._id};
        
        axios.post(uri,  doenca_objeto)
        .then((response) => this.onSave(response.data))
        .catch((error) => console.log(error))
        
    }

    onSave(objeto)
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.addDoenca(objeto);
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
                            <Input onChangeText={(texto) => this.setState({nome: texto})} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Descrição</Label>
                            <Input onChangeText={(texto) => this.setState({descricao: texto})} />
                        </Item>   
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input onChangeText={(texto) => this.setState({sintomas: texto})} />
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