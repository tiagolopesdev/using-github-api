import './App.css';
import { useState } from 'react';
import { getProfileUser, getRepositoriesByUser } from '../../service';
import { NavBar } from '../../components/navbar';

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
  avatar_url: string
}

export const App = () => {

  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [profileUser, setProfileUser] = useState<ProfileUserProps | null>(null);
  const [nickname, setNickName] = useState('');

  const getAllRepositories = async (nickName: string) => {
    if (nickName !== '') {

      let resProfile = await getProfileUser(nickName);

      const profileUser: ProfileUserProps = {
        id: resProfile.id,
        name: resProfile.name,
        public_repos: resProfile.public_repos,
        avatar_url: resProfile.avatar_url
      }

      setProfileUser(profileUser);

      setRepositories(await getRepositoriesByUser(nickName));

      return repositories;

    } else if (nickName === '' && repositories !== undefined) {
      setRepositories([]);
    }
  }

  return (
    <div className="App">
      <div>        
        <NavBar props={profileUser} >
          <div style={{
              'position': 'fixed',
              'marginTop': '3%',
              'marginLeft': '40%'
          }}>
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
            <button 
              onClick={() => getAllRepositories(nickname)}
              style={{
                'border': 'none',
                'padding': '0.8rem',
                'marginRight': '10px',
                'borderRadius': '30px',
                'outlineStyle': 'none'
              }}
            >SEARCH</button>
          </div>
        </NavBar>      
      </div>
      
      <div 
        style={{
          'marginTop': '10%'
        }}
      >
        {repositories.map(repository => {
          return <>
            <div
              // style={{
              //   height: 'auto',
              //   padding: '10px',
              //   'border-radius': '20px',
              //   'background-color': '#3f6dd5',
              //   margin: '20px',
              //   color: 'white',
              //   'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
              // }}
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
      </div>
    </div>
  );
}

