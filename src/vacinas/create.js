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
    Switch
  } from 'native-base';

import DatePicker from 'react-native-datepicker';

import styles from './styles';

import * as request from '../components/request';

export default class VacinaCreate extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', data: new Date(), dataReforco: new Date(), reforco: false };
    }

    onSave() {
        const uri = '/vacinas';

        const dados = { 
            data: this.state.data, 
            nome: this.state.nome, 
            reforco: this.state.reforco, 
            dataReforco: this.state.dataReforco, 
            paciente: global.paciente._id
        };

        const valor = request.post(uri, dados);
        valor.then((response) => this.goBack(response.data));
    }

    goBack(resposta) {
        this.props.navigation.goBack();
        this.props.navigation.state.params.addVacina(resposta);
    }

    render() {
        return (
            <Container>
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
                        <Title>Vacinas</Title>
                    </Body>
                    <Right>
                    <Button
                        transparent
                        onPress={() => this.onSave()}
                    >
                            <Text>Salvar</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input onChangeText={(texto) => this.setState({ nome: texto })} />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data da vacinação</Label>
                            <Left />
                            <Body />
                            <Right>
                                <DatePicker
                                    customStyles={{ dateInput: 
                                        { borderWidth: 1, borderRadius: 20 } }}
                                    style={styles.datePicker}
                                    date={this.state.data}
                                    mode='date'
                                    showIcon={false}
                                    androidMode="calendar"
                                    placeholder='selecione'
                                    minDate={new Date('1999-01-01')}
                                    maxDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={(date) => { this.setState({ data: date }); }}
                                />
                            </Right>
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Necessita de refoço</Label>
                            <Left />
                            <Body>
                                <Switch 
                                    style={styles.switch} 
                                    value={this.state.reforco} 
                                    onValueChange={(novo) => this.setState({ reforco: novo })} 
                                /> 
                            </Body>  
                            <Right />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Reforço</Label>
                            <Left />
                            <Body />
                            <Right>
                                <DatePicker
                                    customStyles={{ dateInput: 
                                        { borderWidth: 1, borderRadius: 20 } }}
                                    style={styles.datePicker}
                                    disabled={!this.state.reforco}
                                    date={this.state.dataReforco}
                                    mode='date'
                                    showIcon={false}
                                    androidMode="calendar"
                                    placeholder='selecione'
                                    minDate={new Date()}
                                    confirmBtnText='Confirm'
                                    cancelBtnText='Cancel'
                                    onDateChange={
                                        (date) => { this.setState({ dataReforco: date }); }}
                                />
                            </Right>
                        </Item> 
                    </Form>    
                </Content>    
            </Container>    
        );
    }
}
