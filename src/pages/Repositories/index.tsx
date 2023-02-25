import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/NavBar';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/Card';
import { IRepositoryProps } from '../../@types/repositories';

import './App.css';

export const Repositories = () => {

  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const { isStorage, setIsStorage, getProfileUserStored } = useContext(UserProfileContext);
  const [user] = useState(getProfileUserStored());

  const getAllRepositories = async (nickName: string) => {
    if (nickName !== '') {

      const responseAllRepositories = await getRepositoriesByUser(user.login);

      responseAllRepositories.map(async (item: any) => {
        const allCommits = await getCommitsByRepository(nickName, item.name)
        item.commits = allCommits.length
      });

      setRepositories(responseAllRepositories);

      return repositories;

    } else if (nickName === '' && !repositories) {
      setRepositories([]);
    }
  }
  
  useEffect(() => {
    getAllRepositories(user);
    if (isStorage) setIsStorage(false);   
  }, [])


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
                props={repository}
              />
            )
          })}
      </div>
    </div >
  );
}
