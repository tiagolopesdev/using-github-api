import { IRepositoryProps } from "../../@types/repositories";
import { Button } from "../button";
import { Tag } from "../tag";
import { CardContainer, CommitsContainerRight, ContainerLeft, InfosContainer, TopicListStyle } from "./style";

interface ICardProps {
    repository: IRepositoryProps
}

export const Card = ({repository}: ICardProps) => {

    const redirectToGithub = () => {
        window.location.href = `${repository.svn_url}`;
    }

    return (
        <CardContainer>
            <InfosContainer >
                <ContainerLeft>
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
                </ContainerLeft>
                <CommitsContainerRight >
                    <div>
                        <p>Commits</p>
                        <h3 style={{
                            'fontWeight': 'bold',
                            'fontSize': 'xx-large'
                        }}>{repository.commits}</h3>
                    </div>
                    <Button onClick={() => redirectToGithub()}>Ver repositórios</Button>
                </CommitsContainerRight>
            </InfosContainer>
            <TopicListStyle>
                {repository.topics.map(topic => { return <Tag name={topic} /> })}
            </TopicListStyle>
        </CardContainer>
    );
}
