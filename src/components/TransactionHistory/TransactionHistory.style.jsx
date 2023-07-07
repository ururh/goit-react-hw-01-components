import styled from 'styled-components';

export const TransactionTable = styled.table`
 margin: 0 auto;
  max-width: 600px;
  border-collapse: collapse;


 & th {
    background-color: #f2f2f2;
    color: #333333;
    font-weight: bold;
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }

  & td {
    padding: 8px;
    border-bottom: 1px solid #dddddd;
  }

  & th{
    background-color: #8d8ed7;
  }
`;