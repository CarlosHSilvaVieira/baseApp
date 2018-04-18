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
    Textarea
  } from "native-base";

import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import styles from './styles';
import Week from './week';

export default class RemediosEdit extends Component
{
    constructor(props)
    {
        super(props);
        const {state} = this.props.navigation;
        let remedio_aux = state.params ? state.params.remedio : null;
        this.state = {
            remedio: remedio_aux,
            name: remedio_aux.name,
            dateStart: remedio_aux.dateStart,
            dateEnd: remedio_aux.dateEnd,
            hour: remedio_aux.hour,
            days: remedio_aux.days
        };
    }

    onDaysChange = (data) =>
    {
        this.setState(data);
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
                        <Text>Cancelar</Text>
                        </Button>
                    </Left>
                    
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <Text>Salvar</Text>
                            </Button>
                    </Right>
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input onChangeText = {(text) => {this.setState({name: text})}}><Text>{this.state.name}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dateStart}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({dateStart: date})}}
                            />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.dateEnd}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({dateEnd: date})}}
                            />
                        </Item>  

                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.hour}
                                mode='time'
                                showIcon = {false}
                                is24Hour = {true}
                                androidMode = "spinner"
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({hour: date})}}
                            />
                        </Item>

                        <List>
                            <ListItem button
                                onPress = {() => this.props.navigation.navigate("Week", {onDaysChange: this.onDaysChange})}>
                                <Label>Dias da medicação</Label>
                                <Input disabled><Text>{this.state.days}</Text></Input>  
                            </ListItem>    
                            <Item />
                        </List>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}