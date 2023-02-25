import './App.css';
import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';
import { IRepositoryProps } from '../../types/repositories';


export const DisplayAllRepositories = () => {

  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const { isStorage, setIsStorage, getProfileUserStored } = useContext(UserProfileContext);
  const [user] = useState(getProfileUserStored());


  console.log('Tes ', user)

  useEffect(() => {
    getAllRepositories(user);
    if (isStorage) setIsStorage(false);   
  }, [])

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
