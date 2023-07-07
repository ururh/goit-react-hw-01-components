import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  `

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Змінити напрямок на колонку */
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: gray;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;`

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
