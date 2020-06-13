import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Historia",
        tab2 = "¿Que Buscamos?",
        tab3 = "¿Que Ofrecemos?",
        tab4 = "¿Y el Trial?";

        const { tabStyle } = this.props

        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <p>Historia</p>
                                            <p>Sundering es una hermandad de gilipollas y a veces de raideo.</p>
                                            <p>Llevamos follandonos a las madres de los otros desde hace mas de cuatro años de manera casi ininterrumpida.</p>
                                            <p>Nos gusta hacer el retrasado en raid y tirar el mayor contenido posible a cabezazos y con broncas. Si llevamos tanto tiempo juntos es por que nos divertimos con la madre de evera e intentamos no atarla a la cama de la hermandad</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                    
                                        <div className="single-tab-content">
                                            <p>Ahora mismo lo que buscamos son personas comprometidas y con conocimiento de su clase.</p>
                                            <p>Gilipollas que no venga buscando épicos.</p>
                                            <p>NO pedimos ilvl. Pedimos conocimiento de la clase, ganas de raidear y sentido de equipo</p>
                                        </div>
                                       
                                    </TabPanel>



                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <p>Ofrecemos un buen avance</p>
                                            <p>Una raid con sentimiento de hermandad y originalidad con los insultos, lo que nos importa es que los bosses caigan, no nos importa como.</p>
                                            <p>Quejarse al rotar y traer el personaje lo más gitano posible es lo que ayuda a la raid.</p>
                                            <p>Una hermandad donde nunca organizamos flex de alters, jamas raids antiguas, y en la que nunca hay gente para hacer m+ exceptuando los nolifers de siempre.</p>
                                            <p>Comidas, frascos, reparaciones, gemas y encantamientos pagados, aunque nunca tenemos mats encima.</p>
                                            <p>Intentamos quitar todo el trabajo que el raider tiene que hacer fuera de raid, para que pueda concentrarse en raid.</p>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>Llora por epicos todo lo que puedas</li>
                                                <li>Mátanos... mátanos 50 veces en cada boss porque no te lo sabes</li>
                                                <li>Critica y acepta ser criticado.</li>
                                                <li>Si vas a faltar algún dia a raid, avisanos. Pero tampoco te flipes.</li>
                                                <li>Sé vanidoso y prepotente, contra mejor te creas mejor te irá</li>
                                                <li>Insulta duramente a las madres de los raiders, contra más, mejor, y si es la de evera mejor aun</li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;