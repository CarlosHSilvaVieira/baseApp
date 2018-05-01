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

import styles from './styles';

export default class ConsultasView extends Component {

    constructor(props)
    {
        super(props);
        const { state } = this.props.navigation;
        let aux = state.params ? state.params.consulta : null;
        this.state = {consulta : aux};
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
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("ConsultasEdit", {consulta: this.state.consulta, onDaysChange: this.onDaysChange})}
                            >
                            <Text>Editar</Text>
                        </Button>
                    </Right>   
                </Header>
                <Content>
                    <Form style={styles.form}>
                        <Item inlineLabel style={styles.item}>
                            <Label>Local</Label>
                            <Input disabled><Text>{this.state.consulta.local}</Text></Input>   
                        </Item> 
                        <Item inlineLabel style={styles.item}>
                            <Label>Data</Label>
                            <Input disabled><Text>{this.state.consulta.data.toLocaleDateString()}</Text></Input>   
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Medico</Label>
                            <Input disabled><Text>{this.state.consulta.medico.nome}</Text></Input>   
                        </Item> 
                        <Item>
                            <Label>CRM</Label>
                            <Input disabled><Text>{this.state.consulta.medico.crm}</Text></Input> 
                        </Item>   
                        <Item inlineLabel style={styles.item}>
                            <Label>Especialidade</Label>
                            <Input disabled><Text>{this.state.consulta.medico.especialidade}</Text></Input> 
                        </Item> 
                        <Item inlineLabel style={styles.item} onPress={() => this.props.navigation.navigate("ViewDoencasConsulta", {doencas: this.state.consulta.doencas})} >
                            <Label>Doença</Label>
                            <Input disabled  value={this.state.consulta.doencas.length + " doenças"} />   
                        </Item>
                        <Item inlineLabel style={styles.item} onPress={() => this.props.navigation.navigate("ViewRemediosConsulta", {remedios: this.state.consulta.receita.remedios})}>
                            <Label>Remedios</Label>
                            <Input disabled  value={this.state.consulta.receita.remedios.length + " remedios"} />    
                        </Item>
                        <Item inlineLabel style={styles.item}>
                            <Label>Receita</Label>
                            <Textarea editable={false} rowSpan={5} onTouchMove={false} value={this.state.consulta.receita.texto}></Textarea>  
                        </Item>
                    </Form>
                </Content>    
            </Container>    
        );
    }
}