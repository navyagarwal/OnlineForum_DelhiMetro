import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { headerItem } from '../shared/helpers';

const Polls = styled(Link)`
  ${headerItem};
  
  margin-right: 50vw;
  font-size: 20px;
  font-weight: 300;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  
  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 15px;
  }
`;

// const HeaderPolls = () => <Polls to='../'>DMRC Polls</Polls>;
const HeaderPolls = () => <a style={{color: "white", padding: 12, marginRight: 680, fontSize: 18, textDecoration: 'None'}} href="https://codefrontend.com" target="_blank">
  DMRC Polls
</a>
export default HeaderPolls;
