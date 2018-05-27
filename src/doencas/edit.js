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

export default class DoencaEdit extends Component {
    
    constructor(props) {
        super(props);

        const auxDoenca = this.props.navigation.state.params ? 
        this.props.navigation.state.params.doenca : null;

        this.state = {
            nome: auxDoenca.nome, 
            sintomas: auxDoenca.sintomas, 
            dataInicio: new Date(auxDoenca.dataInicio), 
            dataFim: new Date(auxDoenca.dataFim), 
            deonca: auxDoenca, 
            id: auxDoenca._id
        };
    }

    onValueChange(valor) {
        this.setState({ selecionado: valor });
    }

    onSave(objeto) {
        if (this.props.navigation.state.params.updateDoenca) {
            this.props.navigation.state.params.updateDoenca(objeto);
        }
        this.props.navigation.goBack();
    }

    sendRequest() {
        const doencaObjeto = {
            nome: this.state.nome, 
            sintomas: this.state.sintomas,
            dataInicio: this.state.dataInicio, 
            dataFim: this.state.dataFim, 
            paciente: global.paciente._id };
            
        const valor = request.put('/doenca/', this.state.id, doencaObjeto);
        valor.then((retorno) => this.onSave(retorno));
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
                            <Input 
                                value={this.state.nome} 
                                onChangeText={(texto) => this.setState({ nome: texto })} 
                            />
                        </Item>    
                        <Item style={styles.item}>
                            <Label>Sintomas</Label>
                            <Input 
                                value={this.state.sintomas} 
                                onChangeText={(texto) => this.setState({ sintomas: texto })} 
                            />
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
                                    maxDate={new Date()}
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
