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
    ListItem,
    List,
    View,
    Text,
    Grid,
    Col,
    Row,
    Fab
  } from "native-base";



import styles from './styles';

const datas = [
    {
        route: "DoencaView",
        text: "Doença 01"
      },
      {
        route: "DoencaView",
        text: "Doença 02"
      },
      {
        route: "DoencaView",
        text: "Doença 03"
      },
      {
        route: "DoencaView",
        text: "Doença 04"
      }
];

export default class DoencasIndex extends Component {
    
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <Container style={styles.conteiner}>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Doenças</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data => 
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.route, {doenca: data})}
                            >
                                <Left>
                                    <Text>
                                        {data.text}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                                </Right>
                            </ListItem>}
                    >    
                    </List>
                </Content>

                <Fab
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.props.navigation.navigate("DoencasCreate")}>
                    <Icon name="ios-add"/>
                </Fab>   
            </Container>
        );
    }
}


  