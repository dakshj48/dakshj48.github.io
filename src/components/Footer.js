import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const NoBorderTableCell = withStyles({
  root: {
    borderBottom: 'none',
    height: 'auto !important'
  }
})(TableCell)

const Footer = () => {

  return (
    <div>
      <TableContainer component={Paper} >
        <Table padding='checkbox'>
          <TableBody>
            <TableRow>
              <NoBorderTableCell align='left' style={{ width: '50%' }}>
              <a 
                href='https://github.com/dakshj48/personal-website' 
                target='_blank' 
                rel='noopener noreferrer' 
                style={{ color: 'white' }}         
              >
                Source
              </a>
              </NoBorderTableCell>
              <NoBorderTableCell align='right' style={{ width: '50%' }}>
                Background by Max Rive
              </NoBorderTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Footer;
