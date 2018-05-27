import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Right,
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    Icon
  } from 'native-base';

import DatePicker from 'react-native-datepicker';

import * as request from '../components/request';

import styles from './styles';

export default class RemediosEdit extends Component {
    
    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const remedioAux = state.params ? state.params.remedio : null;
        this.state = {
            id: remedioAux._id,
            nome: remedioAux.nome,
            detalhes: remedioAux.detalhes,
            dataInicio: remedioAux.dataInicio,
            dataFim: remedioAux.dataFim,
            horarios: remedioAux.horarios,
            dias: remedioAux.dias
        };
    }

    onDaysChange = (data) => {
        this.setState({ dias: data });
    }
    
    onAddHoras = (hora) => {
        this.setState({ horarios: hora });
    }

    atualizar() {
        const remedio = {
            nome: this.state.nome, 
            detalhes: this.state.detalhes, 
            dataInicio: this.state.dataInicio,
            dataFim: this.state.dataFim,
            horarios: this.state.horarios,
            dias: this.state.dias,
            paciente: global.paciente._id
        };  
        const valor = request.put('/remedio/', this.state.id, remedio);
        valor.then((response) => this.goBack(response));
    }

    goBack(data) {
        this.props.navigation.goBack();
        this.props.navigation.state.params.updateRemedio(data);
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
                    
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.atualizar()}
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
                            onChangeText={(text) => { this.setState({ nome: text }); }}
                            >
                            <Text>{this.state.nome}</Text>
                            </Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Detalhes</Label>
                            <Input 
                                onChangeText={(text) => { this.setState({ detalhes: text }); }}
                            >
                            <Text>{this.state.detalhes}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataInicio}
                                mode='date'
                                showIcon={false}
                                androidMode="calendar"
                                placeholder='select date'
                                minDate={new Date('1990-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => { this.setState({ dataInicio: date }); }}
                            />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataFim}
                                mode='date'
                                showIcon={false}
                                androidMode="calendar"
                                placeholder='select date'
                                minDate={new Date('1990-01-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => { this.setState({ dataFim: date }); }}
                            />
                        </Item>  

                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <Button 
                                transparent 
                                onPress={() => this.props.navigation.navigate('Hours', 
                                { onAddHoras: this.onAddHoras, horarios: this.state.horarios })}
                            >
                                <Text>{this.state.horarios.length + ' horários'}</Text>
                            </Button>
                        </Item>

                        <Item style={styles.item}>
                            <Label>Dias da medicação</Label>
                            <List
                                dataArray={this.state.dias}
                                renderRow={(dia) =>
                                    <ListItem 
                                        button
                                        onPress={() => this.props.navigation.navigate('Week', 
                                        { onDaysChange: this.onDaysChange, dias: this.state.dias })}
                                    >
                                        <Text>{dia}</Text>
                                    </ListItem> 
                                }
                            /> 
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}
