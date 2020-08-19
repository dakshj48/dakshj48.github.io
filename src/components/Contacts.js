import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const Contacts = () => {
  return (
    <div>
      <table >
        <tbody>
          <tr>
            <td width="150px">
            <LinkedInIcon fontSize="medium"/>
              <a href="https://www.linkedin.com/in/jain-daksh/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </td>
            <td width="150px">
              <GitHubIcon fontSize="medium" />
              <a href="https://github.com/dakshj48" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </td>
            <td width="150px">
              <EmailIcon fontSize="email" />
              <a href="mailto:dakshjain48@gmail.com">
                Email
              </a>
            </td>
            <td width="150px">
              <PhoneIcon fontSize="medium"/>
              (312) 369-9090
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contacts;
