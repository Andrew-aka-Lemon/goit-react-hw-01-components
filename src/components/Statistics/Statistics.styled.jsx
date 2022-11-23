import styled from 'styled-components';

const StatisticBox = styled.section`
  //задамо ширину щоб виглядало трошки краще
  width: 200px;
  margin: 0 auto;
`;

const Header = styled.h2`
  text-align: center;
  background-color: #fffdfc;
  text-transform: uppercase;
`;

const StatsList = styled.ul`
  width: 100%;

  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatsItem = styled.li`
  padding: 5px 0;
  width: 100%;

  background-color: #aa3e96;
  background-color: ${p => p.color};
  text-align: center;
  span {
    display: block;
  }
`;

export { StatsList, StatsItem, Header, StatisticBox };
