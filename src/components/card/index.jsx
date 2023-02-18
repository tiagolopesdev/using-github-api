import { Button } from "../buttton";
import { Tag } from "../tag";
import { Body } from "./style";

export const Card = ({props}) => {

    const redirectToGithub = () => {
        window.location.href = `${props.svn_url}`;
    }

    //console.log('Repository in card component ', props);
 
    return (
        <Body>
            <div style={{ 'display': 'flex' }}>
                 <div style={{width: '80%'}}>
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
                    }}>{props.language}</p>
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
                        <p>Commits</p>
                        <h3 style={{
                            'fontWeight': 'bold',
                            'fontSize': 'xx-large'
                        }}>{props.commits}</h3>
                    </div>
                    <Button 
                        diplaytext={'Ver repositórios'}
                        onClick={() => redirectToGithub()}
                    />
                </div>                
            </div>
            <div style={{'marginTop': '3%'}}>
                {props.topics.map(topic => { return <Tag name={topic}/>})}
            </div>
        </Body>        
    );
}
