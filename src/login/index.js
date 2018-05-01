import React, { Component } from 'react';

import {ImageBackground, View, StatusBar, TextInput} from 'react-native';

import styles from './styles';

import {
    Container,
    Button,
    Text, 
    Input,
    H1,
    Card,
    CardItem,
    Body,
    Content,
    Form,
    Item,
    Label
  } from "native-base";

import axios from 'axios';  
  
const imagem_fundo = require('../../assets/launchscreen-bg.png');

export default class Login extends Component {

    constructor(props)
    {
        super(props);
        this.state = {login: '', senha: ''};
    }

    login()
    {
        let uri = "http://192.168.0.10:3000/login/";
        let autenticador = {email: this.state.login, senha: this.state.senha};

        axios.post(uri, autenticador)
        .then((response) => this.redirecionar(response.data))
        .catch((error) => console.log(error));
    }

    redirecionar(data)
    {
        if(data.length > 0)
        {
            global.paciente = data[0];
            this.props.navigation.navigate("Home");
        }
        else
        {
            alert("login errado");
        }
    }

    render()
    {
        return(
            <Container style={styles.container}>
            <ImageBackground source={imagem_fundo} style={styles.imageContainer}></ImageBackground>
            <Content>
                    <Form>
                        <Item>
                            <Input placeholder="email"  onChangeText={(texto) => this.setState({login: texto})} />
                        </Item>    
                        <Item>
                            <Input placeholder="Senha" value={this.state.senha} secureTextEntry={true} onChangeText={(texto) => this.setState({senha: texto})} />
                        </Item>    
                    </Form>    
                    <View style={styles.view}>
                        <Button rounded warning
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            >
                            <Text>Cadastrar</Text>
                        </Button>
                        <Button rounded
                            style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                            onPress={() => this.login()}
                            >
                            <Text>Entrar</Text>
                        </Button>  
                    </View>    
                    
                </Content>       
        </Container>   
        );
    }
}  