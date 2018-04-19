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
    View,
    H3
  } from "native-base";

import DatePicker from 'react-native-datepicker';

import styles from './styles';

export default class ConsultasCreate extends Component {

    constructor(props)
    {
        super(props);
        this.state = {data: new Date(), doencas: [], remedios: []};
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
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Consultas</Title>
                    </Body>
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
                            <Label>Local</Label>
                            <Input onChangeText = {(texto) => this.setState({local: texto})} />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data</Label>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.data}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                format = "DD-MM-YYYY"
                                placeholder='select date'
                                minDate={new Date('2016-05-01')}
                                maxDate={new Date()}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({data: date})}}
                            />  
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Medico</Label>
                            <Input onChangeText = {(texto) => this.setState({nome_medico: texto})} />
                        </Item> 
                        <Item>
                            <Label>CRM</Label>
                            <Input onChangeText = {(texto) => this.setState({crm_medico: texto})} />
                        </Item>   
                        <Item inlineLabel style={styles.item}>
                            <Label>Especialidade</Label>
                            <Input onChangeText = {(texto) => this.setState({especialidade_medico: texto})} />
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Doença</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("AddDoencasConsulta", {onAddDoencas: this.onAddDoencas})}><Text>{this.state.doencas.length + " doenças"}</Text></Button>
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Remedios</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("AddRemediosConsulta", {onAddRemedios: this.onAddRemedios})}><Text>{this.state.remedios.length + " remedios"}</Text></Button>  
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Receita</Label>
                            <Textarea editable={false} rowSpan={5} onTouchMove={false} onChangeText={(texto) => this.setState({receita: texto})}></Textarea>  
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}