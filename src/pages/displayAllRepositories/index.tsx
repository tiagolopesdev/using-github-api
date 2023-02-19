import './App.css';
import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';
import { IRepositoryProps } from '../../types/repositories';


export const DisplayAllRepositories = () => {

  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const [nickname, setNickName] = useState('');
  const { user, isStorage, getStorageProfileUser, getProfileUserStored } = useContext(UserProfileContext);

  
  useEffect(() => {

    getStorageProfileUser()

    if (isStorage) {
      getProfileUserStored()
      getAllRepositories(user.login)
    }

  }, [isStorage, nickname])

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
