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

export default class VacinaEdit extends Component {

    constructor(props) {
        super(props);
        
        const { state } = this.props.navigation;
        const aux = state.params ? state.params.vacina : null;
        this.state = {
            id: aux._id,
            nome: aux.nome,
            data: aux.data,
            dataReforco: aux.dataReforco,
            reforco: aux.reforco,
        };
    }

    onUpdate() {
        const uri = '/vacina/';

        const dados = {
            data: this.state.data, 
            nome: this.state.nome, 
            reforco: this.state.reforco, 
            dataReforco: this.state.dataReforco, 
            paciente: global.paciente._id
        };
        
        const valor = request.put(uri, this.state.id, dados);
        valor.then((response) => this.goBack(response));
    }

    goBack(dados) {
        if (this.props.navigation.state.params.updateVacina) {
            this.props.navigation.state.params.updateVacina(dados);
        }
        this.props.navigation.goBack();
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
                            onPress={() => this.onUpdate()}
                        >
                                <Text>Salvar</Text>
                        </Button>
                    </Right>
                </Header>

                <Content>
                <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input 
                                value={this.state.nome} 
                                onChangeText={(texto) => this.setState({ nome: texto })} 
                            />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data da vacinação</Label>
                            <Left />
                            <Body />
                            <Right>
                                <DatePicker
                                customStyles={{ dateInput: { borderWidth: 1, borderRadius: 20 } }}
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
                                customStyles={{ dateInput: { borderWidth: 1, borderRadius: 20 } }}
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
                                onDateChange={(date) => { this.setState({ dataReforco: date }); }}
                                />
                            </Right>
                        </Item> 
                    </Form>    
                </Content>    
            </Container>    
           
        );
    }
}
