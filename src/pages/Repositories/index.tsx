import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/Navbar';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/Card';
import { IRepositoryProps } from '../../@types/repositories';

import './App.css';
import { IProfileUserProps } from '../../@types/profileUser';

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

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div style={{
        marginTop: '10%',
        display: 'grid',
        justifyContent: 'center'
      }}>
        {repositories.map(repository => {
            return (
              <Card
                key={repository.id}
                repository={repository}
              />
            )
          })}
      </div>
    </div >
  );
}
