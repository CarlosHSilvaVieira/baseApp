import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./sidebar";
import Home from './home/home';


//Doenças Routes
import DoencasIndex from './doencas';
import DoencasCreate from './doencas/doencaCreate';
import DoencaView from './doencas/doencaView';

//Vacinas Routes
import VacinasIndex from './vacinas';
import ViewVacinas from './vacinas/view';
import VacinasCreate from './vacinas/create';
import VacinasEdit from './vacinas/edit'

//Remedios Routes 
import RemediosIndex from './remedios';


// rotas gerais
const Drawer = DrawerNavigator(
{
    Home: {screen: Home},
    DoencasIndex: {screen: DoencasIndex},
    VacinasIndex: {screen:VacinasIndex},
    RemediosIndex: {screen: RemediosIndex}
},
{
    initialRouteName: "RemediosIndex",
    contentComponent: props => <SideBar {...props} />
});

//rotas especiificas
const AppNavigator = StackNavigator(
{
    Drawer: {screen: Drawer}, 
    DoencasCreate: {screen: DoencasCreate},
    DoencaView: {screen: DoencaView},

    VacinasView: {screen: ViewVacinas},
    VacinasCreate: {screen: VacinasCreate},
    VacinasEdit: {screen: VacinasEdit}

},
{
    initialRouteName: "Drawer",
    headerMode: "none"
});

export default () =>
  <Root>
    <AppNavigator />
  </Root>;