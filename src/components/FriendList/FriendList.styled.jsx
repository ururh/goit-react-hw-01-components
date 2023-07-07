import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #9ad2d5;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Status = styled(({ isOnline, ...rest }) => <span {...rest} />)`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  color: #333;
`;
