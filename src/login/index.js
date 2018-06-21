import React, { Component } from 'react';

import { Image, View } from 'react-native';

import {
    Container,
    Button,
    Text, 
    Input,
    Content,
    Form,
    Item,
    H3,
  } from 'native-base';

import * as request from '../components/request';

import styles from './styles';

const imagemFundo = require('../../assets/hospital_256.png');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { login: '', senha: '' };
    }

    login() {
        const valor = request.login(this.state.login, this.state.senha);
        valor.then((retorno) => { this.redirecionar(retorno); })
        .catch((erro) => { console.log(erro); });
    }

    redirecionar(data) {
        if (data.length > 0) {
            global.paciente = data[0];

            this.props.navigation.navigate('Home');
        } else {
            console.log('login errado');
        }
    }

    render() {
        return (
            <Container style={styles.container}>
            <Image source={imagemFundo} style={styles.imageContainer} />
            <Content style={styles.content}>
                <H3 style={styles.text} >Health Monitor</H3>
                    <Form>
                        <Item 
                            rounded
                            underline={false}
                            style={styles.item}
                        >
                            <Input 
                                placeholder="Email" 
                                onChangeText={(texto) => this.setState({ login: texto })} 
                            />
                        </Item>    
                        <Item 
                            rounded
                            underline={false}
                            style={styles.item}
                        >
                            <Input 
                                placeholder="Senha" 
                                value={this.state.senha} 
                                secureTextEntry 
                                onChangeText={(texto) => this.setState({ senha: texto })} 
                            />
                        </Item>  
                    </Form>    
                    <Button 
                        rounded 
                        block
                        style={styles.button}
                        onPress={() => this.login()}
                    >
                        <Text>Entrar</Text>
                    </Button>
                    <View>
                        <Text style={styles.text} >Cadastrar-se</Text>
                    </View>    
                </Content>       
        </Container>   
        );
    }
}  
