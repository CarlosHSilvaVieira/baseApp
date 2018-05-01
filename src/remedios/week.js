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
        this.state = {todos_dias: false, segunda: false, terca: false, quarta: false, quinta: false, sexta: false, sabado: false, domingo: false, dias: []};
    }

    componentDidMount() 
    {
        let vetor = this.props.navigation.state.params ? this.props.navigation.state.params.dias : []; 

        if(vetor.length > 0)
        {
            this.setState({dias: vetor});
            for(let i = 0; i < vetor.length; i++)
            {
                this.alteraCheckBox(false, true, vetor[i]);
            }
        }
    }


    goBack(props)
    {
        const { navigation } = props;
        navigation.goBack();

        navigation.state.params.onDaysChange(this.state.dias);
    }
    
    alteraVetorDias(valor, dia, todos)
    {
        if(!todos)
        {
            let vetor = this.state.dias;

            if(valor == true) 
            {
                vetor.push(dia);
                this.setState({dias: vetor});
            } else { 
                let index = vetor.indexOf(dia); 
                vetor.splice(index, 1);
                this.setState({dias: vetor});
            }
        }
        else
        {
            if(valor == true) {

                this.setState({dias: ["seg ", "ter ", "qua ", "qui ", "sex ", "sab ", "dom "]});
            } else {  
                this.setState({dias: []});
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
        else if(dia == "seg")
        {
            this.setState({segunda: valor});
            this.alteraVetorDias(valor, "seg", false);
        }
        else if(dia == "ter")
        {
            this.setState({terca: valor});
            this.alteraVetorDias(valor, "ter", false);
        }
        else if(dia == "qua")
        {
            this.setState({quarta: valor});
            this.alteraVetorDias(valor, "qua", false);
        }
        else if(dia == "qui")
        {
            this.setState({quinta: valor});
            this.alteraVetorDias(valor, "qui", false);
        }
        else if(dia == "sex")
        {
            this.setState({sexta: valor});
            this.alteraVetorDias(valor, "sex", false);
        }
        else if(dia == "sab")
        {
            this.setState({sabado: valor});
            this.alteraVetorDias(valor, "sab", false);
        }
        else if(dia == "dom")
        {
            this.setState({domingo: valor});
            this.alteraVetorDias(valor, "dom", false);
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
                            <CheckBox checked={this.state.segunda} onPress = {() => this.alteraCheckBox(false, !this.state.todos_dias, "seg")}/>
                                <Body>
                                    <Text>Segunda</Text>
                                </Body> 
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.terca} onPress = {() => this.alteraCheckBox(false, !this.state.terca, "ter")}/>
                                <Body>
                                    <Text>Terça</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.quarta} onPress = {() => this.alteraCheckBox(false, !this.state.quarta, "qua")}/>
                                <Body>
                                    <Text>Quarta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.quinta} onPress = {() => this.alteraCheckBox(false, !this.state.quinta, "qui")}/>
                                <Body>
                                    <Text>Quinta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.sexta} onPress = {() => this.alteraCheckBox(false, !this.state.sexta, "sex")}/>
                                <Body>
                                    <Text>Sexta</Text>
                                </Body>  
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.sabado} onPress = {() => this.alteraCheckBox(false, !this.state.sabado, "sab")}/>
                                <Body>
                                    <Text>Sabado</Text>
                                </Body> 
                        </ListItem> 
                        <ListItem>
                            <CheckBox checked={this.state.domingo} onPress = {() => this.alteraCheckBox(false, !this.state.domingo, "dom")}/>
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