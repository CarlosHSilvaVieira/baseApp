import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge,
  View,
  Button,
  Body
} from 'native-base';
import styles from './style';

const drawerCover = require('../../../assets/background.png');
const drawerImage = require('../../../assets/user.png');

const homeIcom = require('../../../assets/map.png');
const doencaIcon = require('../../../assets/virus.png');
const vacinaIcon = require('../../../assets/syringe.png');
const remedioIcon = require('../../../assets/medicine.png');
const consultaIcon = require('../../../assets/check-list.png');
const monitoramentoIcon = require('../../../assets/smartwatch.png');


const datas = [
  {
    name: 'Home',
    route: 'Home',
    icon: homeIcom
  },
  {
    name: 'Doenças',
    route: 'DoencasIndex',
    icon: doencaIcon
  },
  {
    name: 'Vacinas',
    route: 'VacinasIndex',
    icon: vacinaIcon
  },
  {
    name: 'Remedios',
    route: 'RemediosIndex',
    icon: remedioIcon
  },
  {
    name: 'Consultas',
    route: 'ConsultasIndex',
    icon: consultaIcon
  },
  {
    name: 'Monitoramento',
    route: 'Monitoramento',
    icon: monitoramentoIcon
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  logout() {
    global.paciente = null;
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container>
        <Content
          bounces
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <View>

            <ImageBackground source={drawerCover} style={styles.drawerCover} >
              <Left>  
                <Image style={styles.drawerImage} source={drawerImage} />
              </Left>
              <Body>
                
                <Text style={styles.userName}>paciente</Text>
              </Body>
              <Right>
                <Button 
                  rounded 
                  small
                  onPress={() => { this.logout(); }}
                >
                  <Text>Logout</Text>
                </Button>
              </Right>
            </ImageBackground>
            
          </View>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Image
                   style={styles.iconsImage} 
                   source={data.icon} 
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >
                        {`${data.types} Types`}
                      </Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
