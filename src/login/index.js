import React, { Component } from 'react';

import { ImageBackground, View } from 'react-native';

import {
    Container,
    Button,
    Text, 
    Input,
    Content,
    Form,
    Item,
  } from 'native-base';

import * as request from '../components/request';

import styles from './styles';

const imagemFundo = require('../../assets/launchscreen-bg.png');

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
            <ImageBackground source={imagemFundo} style={styles.imageContainer} />
            <Content>
                    <Form>
                        <Item>
                            <Input 
                                placeholder="Email" 
                                onChangeText={(texto) => this.setState({ login: texto })} 
                            />
                        </Item>    
                        <Item>
                            <Input 
                                placeholder="Senha" 
                                value={this.state.senha} 
                                secureTextEntry 
                                onChangeText={(texto) => this.setState({ senha: texto })} 
                            />
                        </Item>    
                    </Form>    
                    <View style={styles.view}>
                        <Button 
                            rounded block
                            style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }}
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
