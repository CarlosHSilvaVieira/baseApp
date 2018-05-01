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

export default class ConsultasEdit extends Component {

    constructor(props)
    {
        super(props);

        if(this.props.navigation.state.params)
        {
            const consulta_aux = this.props.navigation.state.params.consulta;
            this.state = {medico: consulta_aux.medico.nome, crm: consulta_aux.medico.crm, especialidade: consulta_aux.medico.especialidade, local: consulta_aux.local, data: consulta_aux.data, doencas: consulta_aux.doencas, remedios: consulta_aux.receita.remedios, texto: consulta_aux.receita.texto};
        }
        else
        {
            this.state = {medico: "", crm: "", especialidade: "", local: "", data: new Date(), doencas: [], remedios: [], texto: ""};
        }
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
                            <Input onChangeText = {(texto) => this.setState({local: texto})}><Text>{this.state.local}</Text></Input>
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
                            <Input onChangeText = {(texto) => this.setState({nome_medico: texto})}><Text>{this.state.medico}</Text></Input>
                        </Item> 
                        <Item>
                            <Label>CRM</Label>
                            <Input onChangeText = {(texto) => this.setState({crm_medico: texto})}><Text>{this.state.crm}</Text></Input>
                        </Item>   
                        <Item inlineLabel style={styles.item}>
                            <Label>Especialidade</Label>
                            <Input onChangeText = {(texto) => this.setState({especialidade_medico: texto})}><Text>{this.state.especialidade}</Text></Input>
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Doença</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("AddDoencasConsulta", {onAddDoencas: this.onAddDoencas, doencas: this.state.doencas})}><Text>{this.state.doencas.length + " doenças"}</Text></Button>
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Remedios</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("AddRemediosConsulta", {onAddRemedios: this.onAddRemedios, remedios: this.state.remedios})}><Text>{this.state.remedios.length + " remedios"}</Text></Button>  
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Receita</Label>
                            <Textarea editable={false} rowSpan={5} onTouchMove={false} value={this.state.texto} onChangeText={(texto) => this.setState({texto: texto})}></Textarea>  
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}