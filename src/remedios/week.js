import React, {Component} from 'react';

import {
    Content,
    List,
    ListItem,
    CheckBox,
    Text,
    Body,
    Container,
    Header, 
    Left, 
    Right,
    Title,
    Button,
    Icon
  } from "native-base";

import styles from './styles';  

export default class Week extends Component {

    constructor(props)
    {
        super(props);
        this.state = {todos_dias: false, segunda: false, terca: false, quarta: false, quinta: false, sexta: false, sabado: false, domingo: false, days: []};
    }

    goBack(props)
    {
        const { navigation } = props;
        navigation.goBack();
        
        let vetor = this.state.days;
        vetor.sort();

        navigation.state.params.onDaysChange({days: vetor});
    }
    
    alteraVetorDias(valor, dia, todos)
    {
        if(!todos)
        {
            let vetor = this.state.days;

            if(valor == true) 
            {
                vetor.push(dia);
                this.setState({days: vetor});
            } else { 
                let index = vetor.indexOf(dia); 
                vetor.splice(index, 1);
                this.setState({days: vetor});
            }
        }
        else
        {
            if(valor == true) {

                this.setState({days: ["seg ", "ter ", "qua ", "qui ", "sex ", "sab ", "dom "]});
            } else {  
                this.setState({days: []});
            }
        }
    }

    alteraCheckBox(todos, valor, dia)
    {
        if(todos == true)
        {
            this.setState({todos_dias: valor, segunda: valor, terca: valor, quarta: valor, quinta: valor, sexta: valor, sabado: valor, domingo: valor})
            this.alteraVetorDias(valor, "", true)
        }
        else if(dia == "segunda")
        {
            this.setState({segunda: valor});
            this.alteraVetorDias(valor, "seg ", false);
        }
        else if(dia == "terça")
        {
            this.setState({terca: valor});
            this.alteraVetorDias(valor, "ter ", false);
        }
        else if(dia == "quarta")
        {
            this.setState({quarta: valor});
            this.alteraVetorDias(valor, "qua ", false);
        }
        else if(dia == "quinta")
        {
            this.setState({quinta: valor});
            this.alteraVetorDias(valor, "qui ", false);
        }
        else if(dia == "sexta")
        {
            this.setState({sexta: valor});
            this.alteraVetorDias(valor, "sex ", false);
        }
        else if(dia == "sabado")
        {
            this.setState({sabado: valor});
            this.alteraVetorDias(valor, "sab ", false);
        }
        else if(dia == "domingo")
        {
            this.setState({domingo: valor});
            this.alteraVetorDias(valor, "dom ", false);
        }
    }

    render()
    {
        return(
            <Container>
                <Header>
                        <Left>
                            <Button
                            transparent
                            onPress={() => this.goBack(this.props)}
                            >
                            <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Dias da medicação</Title>
                        </Body>
                        <Right />
                    </Header>
                <Content>
                    <List>
                        <ListItem>
                            <CheckBox checked={this.state.todos_dias} onPress = {() => this.alteraCheckBox(true, !this.state.todos_dias, "todos")}/>
                                <Body>
                                    <Text>Todos os dias</Text>
                                </Body>     
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.segunda} onPress = {() => this.alteraCheckBox(false, !this.state.todos_dias, "segunda")}/>
                                <Body>
                                    <Text>Segunda</Text>
                                </Body> 
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.terca} onPress = {() => this.alteraCheckBox(false, !this.state.terca, "terça")}/>
                                <Body>
                                    <Text>Terça</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.quarta} onPress = {() => this.alteraCheckBox(false, !this.state.quarta, "quarta")}/>
                                <Body>
                                    <Text>Quarta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.quinta} onPress = {() => this.alteraCheckBox(false, !this.state.quinta, "quinta")}/>
                                <Body>
                                    <Text>Quinta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.sexta} onPress = {() => this.alteraCheckBox(false, !this.state.sexta, "sexta")}/>
                                <Body>
                                    <Text>Sexta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.sabado} onPress = {() => this.alteraCheckBox(false, !this.state.sabado, "sabado")}/>
                                <Body>
                                    <Text>Sabado</Text>
                                </Body> 
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.domingo} onPress = {() => this.alteraCheckBox(false, !this.state.domingo, "domingo")}/>
                                <Body>
                                    <Text>Domingo</Text>
                                </Body>
                        </ListItem>     
                    </List>   
                </Content>   
            </Container> 
        );
    }
}