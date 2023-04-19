import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';
import { IRepositoryProps } from '../../@types/repositories';

import './App.css';
import { IProfileUserProps } from '../../@types/profileUser';
import { Alert, Stack } from '@mui/material';


export const Repositories = () => {

  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const { user } = useContext(UserProfileContext);

  const getAllRepositories = async (actualUser: IProfileUserProps) => {
    if (actualUser.login !== '') {

      const responseAllRepositories = await getRepositoriesByUser(actualUser.login);

      responseAllRepositories.map(async (item: any) => {
        const allCommits = await getCommitsByRepository(actualUser.login, item.name)
        item.commits = allCommits.length
      });

      setRepositories(responseAllRepositories);

      return repositories;

    } else if (actualUser.login === '' && repositories) {
      setRepositories([]);
    }
  }

  useEffect(() => {
    getAllRepositories(user);
  }, [user])

  const renderRepositories = (repositoriesProps: IRepositoryProps[]) => {
    return repositoriesProps.map(repository => {
      return (
        <Card
          key={repository.id}
          repository={repository}
        />
      )
    })
  }

  return (
    <div className="App">      
      <div>
        <NavBar />
      </div>
      {repositories.length > 0 ?
        <div style={{
          marginTop: '10%',
          display: 'grid',
          justifyContent: 'center'
        }}>
          {renderRepositories(repositories)}
        </div> :
        <Stack style={{
          width: '100%',
          marginTop: '20%',
          display: 'flex',
          alignItems: 'center',
        }} spacing={2}>
          <Alert
            severity="warning"
            style={{
              fontWeight: 'bold',
              boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)',
              borderRadius: '15px'
            }}
          >Insira seu nickname para obter repositórios do perfil</Alert>
        </Stack>
      }
    </div >
  );
}
