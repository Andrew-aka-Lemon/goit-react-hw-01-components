import styled from 'styled-components';

const ProfileItem = styled.div`
  width: 200px;
  margin: 0 auto;
  padding: 10px 5px;
  text-align: center;
  background-color: #fff9f5;
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
`;

const StatsItem = styled.li`
  span {
    display: block;
  }
`;

const Avatarka = styled.img`
  width: 50px;
  border-radius: 50%;
  border: 1px #000 solid;
`;

const Description = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Username = styled.p`
  font-weight: 700;
`;

const Tag = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;

  color: #adadad;
`;

const Label = styled.span`
  font-size: 14px;
  color: #adadad;
`;

const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export {
  ProfileItem,
  Description,
  Avatarka,
  Username,
  Tag,
  Stats,
  StatsItem,
  Label,
  Quantity,
};
