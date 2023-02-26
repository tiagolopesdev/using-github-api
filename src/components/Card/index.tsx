import { IRepositoryProps } from "../../@types/repositories";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { CardContainer } from "./style";

interface ICardProps {
    repository: IRepositoryProps
}

export const Card = ({repository}: ICardProps) => {

    const redirectToGithub = () => {
        window.location.href = `${repository.svn_url}`;
    }

    //TODO: tornar as divs mais semanticas usando o styled components
    return (
        <CardContainer>
            <div style={{ 'display': 'flex' }}>
                <div style={{ width: '80%' }}>
                    <div style={{
                        'textAlign': 'start',
                        'width': '75%'
                    }}>
                        <h1 style={{
                            'fontSize': '25px',
                            'fontWeight': 'bold'
                        }}>{repository.name}</h1>
                        <p
                            style={{
                                'display': 'flex',
                                'textAlign': 'justify'
                            }}>{repository.description}</p>
                    </div>
                    <p style={{
                        'textAlign': 'start',
                        'marginTop': '15px'
                    }}>{repository.language}</p>
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
                        }}>{repository.clone_url}</p>
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
                        }}>{repository.commits}</h3>
                    </div>
                    <Button onClick={() => redirectToGithub()}>Ver repositórios</Button>
                </div>
            </div>
            <div style={{ 'marginTop': '3%' }}>
                {repository.topics.map(topic => { return <Tag name={topic} /> })}
            </div>
        </CardContainer>
    );
}
