import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Label,
  Title,
  StatList,
  StatItem,
  Percentage
} from "./Statistics.styled";
import { getRandomColor } from "./randomColor";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Percentage>%{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
