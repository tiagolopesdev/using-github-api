import './App.css';
import { useContext, useState, useEffect } from 'react';
import { getProfileUser, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';
import { Button } from '../../components/buttton';
import { UserProfileContext } from '../../context/user';
import { Card } from '../../components/card';

// https://api.github.com/users/tiagolopesdev
// https://api.github.com/users/tiagolopesdev/repos

interface RepositoryProps {
  id: string,
  name: string,
  description: string,
  clone_url: string,
  svn_url: string,
  topics: []
}
interface ProfileUserProps {
  id: string,
  name: string,
  public_repos: number,
  avatar_url: string,
  login: string
}

export const DisplayAllRepositories = () => {

  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [profileUser, setProfileUser] = useState<ProfileUserProps | null>(null);
  const [nickname, setNickName] = useState('');
  const { assigUserProfile, user, isStorage, getStorageProfileUser, getProfileUserStored } = useContext(UserProfileContext);

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

      const profileUserProp: ProfileUserProps = await {
        id: resProfile.id,
        name: resProfile.name,
        public_repos: resProfile.public_repos,
        avatar_url: resProfile.avatar_url,
        login: resProfile.login
      }

      await assigUserProfile(profileUserProp)

      setProfileUser(profileUserProp);

      setRepositories(await getRepositoriesByUser(nickName));

      return repositories;

    } else if (nickName === '' && !repositories) {
      setRepositories([]);
    }
  }

  return (
    <div className="App">
      <div>
        <NavBar props={profileUser} >
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
            {/* <button
              //onClick={() => console.log('Click in button')}
              onClick={() => getAllRepositories(nickname)}
            // style={{
            //   'border': 'none',
            //   'padding': '0.8rem',
            //   'marginRight': '10px',
            //   'borderRadius': '30px',
            //   'outlineStyle': 'none'
            // }}
            >SEARCH</button> */}
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


      {/* <div
        style={{
          'marginTop': '10%',
          'display': 'grid',
          'justifyContent': 'center'
        }}
      >
        {repositories.map(repository => {
          return <>
            <div
              style={{
                height: 'auto',
                padding: '10px',
                'borderRadius': '20px',
                'backgroundColor': '#3f6dd5',
                margin: '20px',
                color: 'white',
                'boxShadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
              }}
              key={repository.id}
            >
              <h2
              // style={{
              // 'display': 'flex',
              // 'font-family': 'Montserrat, sans-serif',
              // 'font-size': '35px'
              // }}
              >{repository.name}</h2>
              <p
              // style={{display: 'flex'}}
              >{repository.description}</p>
              <div
              // style={{
              //   'display': 'flex',
              //   'justify-content': 'center',
              //   'align-items': 'center'
              // }}
              >
                <p
                // style={{
                //   'display': 'flex',
                //   'font-family': 'Montserrat, sans-serif',
                //   'font-style': 'italic'
                // }}
                >Clonar repositório</p>
                <p
                // style={{
                //   'display': 'flex',
                //   'background-color': 'rgb(32 70 157 / 39%)',
                //   'padding': '2px 5px',
                //   'border-radius': '5px'
                // }}
                >{repository.clone_url}</p>
              </div>
              <a href={repository.svn_url}
              // style={{
              //   'display': 'flex',
              //   'justify-content': 'flex-end',
              //   'margin-right': '20px'
              // }}
              > ir para repositorio</a>
              <div
              // style={{
              //   'display': 'flex',
              //   'gap': '10px'
              // }}
              >{repository.topics.map(topic => {
                return <p
                // style={{    
                //   'display': 'flex',
                //   'box-shadow': 'rgb(0 0 0 / 16%) 0px 1px 4px',
                //   'padding': '5px',
                //   'border-radius': '20px',
                //   'background-color': 'rgb(255 255 255)',
                //   'color': 'rgb(120 120 120)'
                // }}
                >{topic}</p>;
              })}</div>
            </div>
          </>
        })}
      </div> */}
    </div >
  );
}
