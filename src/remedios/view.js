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
    Text,
    Form,
    Label,
    Input,
    Item,
    List,
    ListItem,
    CheckBox,
    Textarea,
    Fab
  } from "native-base";
  
import axios from 'axios';
  
import DatePicker from 'react-native-datepicker';

import styles from './styles';

export default class RemediosView extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux_remedio = state.params ? state.params.remedio : null;
        this.state = {remedio : aux_remedio, dataInicio: aux_remedio.dataInicio, dataFim: aux_remedio.dataFim};
    }

    updateRemedio = (aux_remedio) =>
    {
        console.log(aux_remedio);
        this.setState({remedio: aux_remedio, dataInicio: aux_remedio.dataInicio, dataFim: aux_remedio.dataFim});
    }

    deleteRemedio()
    {
        let uri = global.uri + "/remedio/" + this.state.remedio._id;
        axios.delete(uri)
        .then((response) => this.goBack())
        .catch((error) => alert(error));
    }
    
    goBack()
    {
        this.props.navigation.goBack();
        this.props.navigation.state.params.deleteRemedio(this.state.remedio);
    }

    render()
    {
        return(
            <Container>
                 <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Text>Voltar</Text>
                        </Button>
                    </Left> 
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("RemediosEdit", {remedio: this.state.remedio, updateRemedio: this.updateRemedio})}
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
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataInicio}
                                disabled = {true}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                is24Hour = {true}
                            />
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dataFim}
                                disabled = {true}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                is24Hour = {true}
                            /> 
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <List
                                dataArray = {this.state.remedio.horarios}
                                renderRow = {(hora) =>
                                    <ListItem>
                                        <Text>{hora}</Text>
                                    </ListItem>    
                                }
                            />
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Dias da medicação</Label>
                            <List
                                dataArray = {this.state.remedio.dias}
                                renderRow = {(dia) =>
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
                    position = "bottomRight"
                    onPress = {() => this.deleteRemedio()}>
                    <Icon name="ios-trash" />
                </Fab> 
            </Container>    
        );
    }
}