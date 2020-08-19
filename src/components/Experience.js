import React from 'react';

const Experience = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width="750px">
              <h2>
                College of Information and Computer Science, UMass
              </h2>
            </td>
            <td>
              Amherst, MA
            </td>
          </tr>
          <tr>
            <td>
              <h3>Teaching Assistant</h3>
            </td>
            <td>
              Jan. 2019 - May 2019
            </td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>
          <b>
            Role:
          </b>
          {" "} Help other computer science undergraduates at UMass with a systems course.
        </li>
        <li>
          <b>
            Responsibilities:
          </b>
          {" "} Answering students' questions online and in-lab gatherings and helping professors in
          grading assignments and exams.
        </li>
      </ul>
    </div>
  )
}

export default Experience;
