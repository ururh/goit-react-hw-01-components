import PropTypes from 'prop-types';
import { StatisticsSection, Label, Title, StatList, StatItem, Percentage} from "./Statistics.styled"
import { getRandomColor } from "./randomColor"

const Statistics = (data) => {
    return(<StatisticsSection>
      <Title>Upload stats</Title>

      <StatList>
        {data.stats.map((el) => (
          <StatItem key={el.id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{el.label}</Label>
            <Percentage>%{el.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>)
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics