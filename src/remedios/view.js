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

import styles from './styles';

export default class RemediosView extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux_remedio = state.params ? state.params.remedio : null;
        this.state = {remedio : aux_remedio};
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
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Remedios</Title>
                    </Body>    
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("RemediosEdit", {remedio: this.state.remedio, onDaysChange: this.onDaysChange})}
                            >
                            <Text>Editar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Nome</Label>
                            <Input disabled><Text>{this.state.remedio.name}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de inicio da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.remedio.dateStart}
                                mode='date'
                                disabled = {true}
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                            />
                        </Item>  
                        <Item inlineLabel style={styles.item}>
                            <Label>Data de fim da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.remedio.dateEnd}
                                mode='date'
                                disabled = {true}
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                            />
                        </Item>  

                        <Item inlineLabel style={styles.item}>
                            <Label>Horário da medicação</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.remedio.hour}
                                mode='time'
                                disabled = {true}
                                showIcon = {false}
                                is24Hour = {true}
                                androidMode = "spinner"
                            />
                        </Item>

                        <List>
                            <ListItem>
                                <Label>Dias da medicação</Label>
                                <Input disabled><Text>{this.state.remedio.days}</Text></Input>   
                            </ListItem>    
                            <Item />
                        </List>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}