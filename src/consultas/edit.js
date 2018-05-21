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

import styles from '../style/styles';

export default class ConsultasEdit extends Component {

    constructor(props)
    {
        super(props);

        if(this.props.navigation.state.params)
        {
            const consulta_aux = this.props.navigation.state.params.consulta;
            this.state = {_id: consulta_aux._id, local: consulta_aux.local, data: new Date(consulta_aux.data),  medico: {crm: ''}, doencas: [], remedios: [], detalhes: consulta_aux.detalhes};
        }
        else
        {
            this.state = {_id: '', medico: {crm: ''}, local: "", data: new Date(), doencas: [], remedios: [], detalhes: ""};
        }
    }

    getMedicoSelecionado = (dados) => 
    {
        this.setState({medico: dados});
    }

    atualizar()
    {
        let uri = global.uri + "/consulta/" + this.state._id ;

        let dados = {local: this.state.local, data: this.state.data, doencas: this.state.doencas, 
            remedios: this.state.remedios, medico: this.state.medico, detalhes: this.state.detalhes,
            paciente: global.paciente._id};

        axios.put(uri, dados)
        .then((resposta) => {this.voltar(resposta.data)})
        .catch((err) => alert(err))
    }

    voltar(dados)
    {
        this.props.navigation.goBack();

        if(this.props.navigation.state.params)
        {
            this.props.navigation.state.params.updateConsulta(dados);
        }
    }

    onAddDoencas = (doencas_add) =>
    {
        this.setState({doencas: doencas_add});
    }

    onAddRemedios = (remedios) => 
    {
        this.setState({remedios: remedios});
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
                            onPress={() => this.atualizar()}
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
                                customStyles={{dateInput: {borderWidth: 1, borderRadius: 20}}}
                                style={styles.datePicker}
                                date={this.state.data}
                                mode='date'
                                showIcon = {false}
                                androidMode = "calendar"
                                placeholder='select date'
                                minDate={new Date('2000-01-01')}
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                onDateChange={(date) => {this.setState({data: date})}}
                            />  
                        </Item>
                        
                        <Item inlineLabel style={styles.item}>
                            <Label>Doença</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("DoencasSearch", {onAddDoencas: this.onAddDoencas})}><Text>{this.state.doencas.length + " doenças"}</Text></Button>
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>CRM do Medico</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("MedicosSearch", {getMedicoSelecionado: this.getMedicoSelecionado})}><Text>{this.state.medico.crm}</Text></Button>
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Remedios</Label>
                            <Button transparent onPress = {() => this.props.navigation.navigate("RemediosSearch", {onAddRemedios: this.onAddRemedios})}><Text>{this.state.remedios.length + " remedios"}</Text></Button>  
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Detalhes</Label>
                            <Input onChangeText={(texto) => this.setState({detalhes: texto})}></Input>  
                        </Item>
                    </Form>
                </Content>    
            </Container>  
        );
    }
}