import React, { Component } from 'react';

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
  } from 'native-base';

import DatePicker from 'react-native-datepicker';

import styles from './styles';

import * as request from '../components/request';

export default class DoencaCreate extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', sintomas: '', dataInicio: '', dataFim: '' };
    }

    onValueChange(valor) {
        this.setState({ selecionado: valor });
    }

    onSave(objeto) {
        this.props.navigation.state.params.addDoenca(objeto);
        this.props.navigation.goBack();        
    }

    sendRequest() {
        const doencaObjeto = {
            nome: this.state.nome, 
            sintomas: this.state.sintomas, 
            dataInicio: this.state.dataInicio, 
            dataFim: this.state.dataFim, 
            paciente: global.paciente._id };
        
        const valor = request.post('/doencas', doencaObjeto);
        valor.then((resp) => this.onSave(resp));
    }

    render() {
        return (
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
                            <Input onChangeText={(texto) => this.setState({ nome: texto })} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Descrição</Label>
                            <Input onChangeText={(texto) => this.setState({ descricao: texto })} />
                        </Item>   
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input onChangeText={(texto) => this.setState({ sintomas: texto })} />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Inicio dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.dataInicio}
                                    mode='date'
                                    showIcon={false}
                                    androidMode="calendar"
                                    placeholder='select date'
                                    minDate={new Date('1999-01-01')}
                                    maxDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={
                                        (date) => { this.setState({ dataInicio: date }); }}
                                /> 
                        </Item>  
                        <Item style={styles.item}>
                            <Label>Fim dos sintomas</Label>
                                <DatePicker
                                    style={styles.datePicker}
                                    date={this.state.dataFim}
                                    mode='date'
                                    showIcon={false}
                                    androidMode="calendar"
                                    placeholder='select date'
                                    minDate={new Date('1999-01-01')}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={(date) => { this.setState({ dataFim: date }); }}
                                /> 
                        </Item>       
                    </Form>
                </Content>     
            </Container>
        );
    }
}
