import './App.css';
import { useState, useEffect } from 'react';

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


export const App = () => {

  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/tiagolopesdev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [repositories])

  return (
    <div className="App">
      <header >
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
            >
              <h2 key={repository.id} 
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
      </header>
    </div>
  );
}
