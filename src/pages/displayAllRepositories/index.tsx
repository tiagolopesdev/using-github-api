import './App.css';
import { useContext, useState, useEffect } from 'react';
import { getProfileUser, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { Button } from '../../components/buttton';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';
import { IProfileUserProps } from '../../types/profileUser';
import { IRepositoryProps } from '../../types/repositories';


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

      const profileUserProp: IProfileUserProps = await {
        id: resProfile.id,
        name: resProfile.name,
        public_repos: resProfile.public_repos,
        avatar_url: resProfile.avatar_url,
        login: resProfile.login
      }

      await setProfileUserLocalStored(profileUserProp)

      await getProfileUserStored();

      setRepositories(await getRepositoriesByUser(nickName));

      return repositories;

    } else if (nickName === '' && !repositories) {
      setRepositories([]);
    }
  }

  return (
    <div className="App">
      <div>        
        <NavBar props={user} >
          <div>
            <input
              type='text'
              placeholder='Digite o nume do usuário'
              onChange={(e) => setNickName(e.target.value)}
              style={{
                'border': 'none',
                'padding': '0.8rem',
                'marginRight': '10px',
                'borderRadius': '30px',
                'outlineStyle': 'none'
              }}
            />
            <Button
              diplaytext={'Search'}
              onClick={() => getAllRepositories(nickname)}
            />
          </div>
        </NavBar>
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
