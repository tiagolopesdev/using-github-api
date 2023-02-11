import { Button } from "../buttton";
import { Tag } from "../tag";
import { Body } from "./style";

export const Card = ({props}) => {

    console.log('User in component, ',props.topics);    
 
    return (
        <Body>
            <div style={{ 'display': 'flex' }}>
                 <div>
                     <div style={{
                        'textAlign': 'start',
                        'width': '75%'
                    }}>
                        <h1 style={{
                            'fontSize': '25px',
                            'fontWeight': 'bold'
                        }}>{props.name}</h1>
                        <p
                            style={{
                                'display': 'flex',
                                'textAlign': 'justify'
                            }}>{props.description}</p>
                    </div>
                    <p style={{
                        'textAlign': 'start',
                        'marginTop': '15px'
                    }}>Linguagem</p>
                    <div style={{
                        'display': 'flex',
                        'marginTop': '5%'
                    }}>
                        <p style={{
                            'marginRight': '2%'
                        }}>Clone Https</p>
                        <p style={{
                            'backgroundColor': 'rgb(18 57 92 / 16%)',
                            'padding': '0% 2%',
                            'borderRadius': '5px'
                        }}>{props.clone_url}</p>
                    </div>
                </div>
                <div style={{
                    'alignItems': 'center',
                    'display': 'grid'
                }}>
                    <div>
                        <p>COMMITS</p>
                        <h3 style={{
                            'fontWeight': 'bold',
                            'fontSize': 'xx-large'
                        }}>000</h3>
                    </div>
                    <Button 
                        diplaytext={'Ver repositórios'}
                    />
                </div>                
            </div>
            <div style={{'marginTop': '3%'}}>
                {props.topics.map(topic => { return <Tag name={topic}/>})}
            </div>
        </Body>        
    );
}

// <div className="card" style={{
        //     'height': 'auto',
        //     'padding': '1.5rem',
        //     'borderRadius': '20px',
        //     'backgroundColor': '#3f6dd5',
        //     'margin': '20% 5%',
        //     'color': 'white',
        //     'boxShadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        // }}>
        //     <div style={{ 'display': 'flex' }}>
        //         <div>
        //             <div style={{
        //                 'textAlign': 'start',
        //                 'width': '75%'
        //             }}>
        //                 <h1 style={{
        //                     'fontSize': '25px',
        //                     'fontWeight': 'bold'
        //                 }}>Repositórios</h1>
        //                 <p
        //                     style={{
        //                         'display': 'flex',
        //                         'textAlign': 'justify'
        //                     }}>Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        //             </div>
        //             <p style={{
        //                 'textAlign': 'start',
        //                 'marginTop': '15px'
        //             }}>Linguagem</p>
        //             <div style={{
        //                 'display': 'flex',
        //                 'marginTop': '5%'
        //             }}>
        //                 <p style={{
        //                     'marginRight': '2%'
        //                 }}>Clone Https</p>
        //                 <p style={{
        //                     'backgroundColor': 'rgb(18 57 92 / 16%)',
        //                     'padding': '0% 2%',
        //                     'borderRadius': '5px'
        //                 }}>https://github.com/tiagolopesdev/desafios.git</p>
        //             </div>
        //         </div>
        //         <div style={{
        //             'alignItems': 'center',
        //             'display': 'grid'
        //         }}>
        //             <div>
        //                 <p>COMMITS</p>
        //                 <h3 style={{
        //                     'fontWeight': 'bold',
        //                     'fontSize': 'xx-large'
        //                 }}>000</h3>
        //             </div>
        //             <Button 
        //                 diplaytext={'Ver repositórios'}
        //             />
        //             {/* <button style={{
        //                 'width': '10rem',
        //                 'padding': '0.4rem',
        //                 'border': 'none',
        //                 'borderRadius': '30px',
        //                 'backgroundColor': '#FFFFFF',
        //                 'color': '#4C86BB',
        //                 'fontSize': '12pt',
        //                 'fontWeight': 'bold'
        //             }}>Ver repositorios</button> */}
        //         </div>                
        //     </div>
        //     <div style={{
        //         'marginTop': '3%'
        //     }}>
        //         <Tag name={'Tag by component'} />
        //         <Tag name={'Tag by component'} />
        //         <Tag name={'Tag by component'} />
        //         <Tag name={'Tag by component'} />
                
        //     </div>
        // </div >
