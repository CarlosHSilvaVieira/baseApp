import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    Fab
  } from 'native-base';

import DatePicker from 'react-native-datepicker';  
  
import * as request from '../components/request';

import styles from './styles';

export default class RemediosView extends Component {

    constructor(props) {
        super(props);
        const { state } = this.props.navigation;
        const auxRemedio = state.params ? state.params.remedio : null;
        this.state = { 
            remedio: auxRemedio, 
            dataInicio: auxRemedio.dataInicio, 
            dataFim: auxRemedio.dataFim };
    }

    updateRemedio = (auxRemedio) => {
        this.setState({ 
            remedio: auxRemedio, 
            dataInicio: auxRemedio.dataInicio, 
            dataFim: auxRemedio.dataFim });
    }

    deleteRemedio() {
        const local = '/remedio/';
        const valor = request.delete(local, this.state.remedio._id);
        valor.then((resposta) => this.goBack(resposta));
    }
    
    goBack(resp) {
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
                    <Right>
                        <Button
                            transparent
                            onPress={
                                () => this.props.navigation.navigate('RemediosEdit', 
                                { remedio: this.state.remedio, updateRemedio: this.updateRemedio })}
                        >
                            <Text>Editar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input disabled><Text>{this.state.remedio.nome}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Detalhes</Label>
                            <Input disabled><Text>{this.state.remedio.detalhes}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataInicio}
                                disabled
                                mode='date'
                                showIcon={false}
                                androidMode="calendar"
                                is24Hour
                            />
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataFim}
                                disabled
                                mode='date'
                                showIcon={false}
                                androidMode="calendar"
                                is24Hour
                            /> 
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <List
                                dataArray={this.state.remedio.horarios}
                                renderRow={(hora) =>
                                    <ListItem>
                                        <Text>{hora}</Text>
                                    </ListItem>    
                                }
                            />
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Dias da medicação</Label>
                            <List
                                dataArray={this.state.remedio.dias}
                                renderRow={(dia) =>
                                    <ListItem>
                                        <Text>{dia}</Text>
                                    </ListItem> 
                                }
                            />
                        </Item>   
                    </Form>
                </Content>    
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.deleteRemedio()}
                >
                    <Icon name="ios-trash" />
                </Fab> 
            </Container>    
        );
    }
}
