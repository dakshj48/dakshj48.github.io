import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>
        Projects
      </h1>
      <div>
        <ul>
          <li>
            <a href="https://github.com/dakshj48/Bloglist" target="_blank" rel="noopener noreferrer">
              Full-stack web app for listing blogs
            </a>
            <ul>
              <li>
                Users can add links to blogs to the list, like and comment on existing blogs in the list and remove
                the blogs that they have added.</li>
              <li>
                Utilized MongoDB, Express, React and Node.js (MERN) for the development and Heroku to
                deploy it to the web.
              </li>
            </ul>
          </li>
          <li>
            Movie Plot Generator
            <ul>
              <li>
                Used NLP algorithms (
                <a href="https://colab.research.google.com/drive/1pdU-T8UZY4V3Iqls_uMWWK42zMvDd_EP" 
                target="_blank" rel="noopener noreferrer"> 
                  n-grams, RNN
                </a> 
                and
                <a href="https://colab.research.google.com/drive/1FHsFYf7P5pOL-URpOl5l_1ZlbflMTyG2"
                target="_blank" rel="noopener noreferrer">
                  GPT-2
                </a>
                ) to generate movie plots given context and genre.
              </li>
              <li>
                Utilized Pytorch and Google Colab to meet the computational needs of learning data from
                thousands of movies.
              </li>
            </ul>
          </li>
          <li>
            N-puzzle Solver
            <ul>
              <li>
                Designed an AI for solving N-puzzles using the Manhattan distance heuristic in Java.
              </li>
              <li>
                Used data structures like hashmap to signicantly reduce the computation time.
              </li>
            </ul>
          </li>
          <li>
            Multi-threaded Chat Server and Client
            <ul>
              <li>
                Established a communication between server and multiple clients using threads.
              </li>
            </ul>
          </li>
          <li>
            Cache Simulator and Bank Simulator
            <ul>
              <li>
                Implemented a Least Recently Used (LRU) cache in C.
              </li>
              <li>
                Simulated communication in an ATM system (a bank and several ATMs).
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects;
