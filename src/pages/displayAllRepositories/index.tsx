import './App.css';
import { useContext, useState, useEffect } from 'react';
import { getCommitsByRepository, getProfileUser, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { Button } from '../../components/buttton';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';
import { IProfileUserProps } from '../../types/profileUser';
import { IRepositoryProps } from '../../types/repositories';
import { Input } from '../../components/input';


export const DisplayAllRepositories = () => {

  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const [nickname, setNickName] = useState('');
  const { setProfileUserLocalStored, user, isStorage, getStorageProfileUser, getProfileUserStored } = useContext(UserProfileContext);

  useEffect(() => {

    getStorageProfileUser()

    if (isStorage) {
      getProfileUserStored()
      getAllRepositories(user.login)
    }

  }, [isStorage, nickname])

  const getAllRepositories = async (nickName: string) => {
    if (nickName !== '') {

      var resProfile = await getProfileUser(nickName);

      const profileUserProp: IProfileUserProps = {
        id: resProfile.id,
        name: resProfile.name,
        public_repos: resProfile.public_repos,
        avatar_url: resProfile.avatar_url,
        login: resProfile.login
      }

      await setProfileUserLocalStored(profileUserProp)

      await getProfileUserStored();

      const responseAllRepositories = await getRepositoriesByUser(nickName);

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
