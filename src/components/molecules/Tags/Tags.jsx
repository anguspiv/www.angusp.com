import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../../atoms/Tag';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

function Tags({ className, tags }) {
  return (
    <Wrapper className={className}>
      {tags.map(({ color, name, slug }) => (
        <Tag key={slug} color={color} name={name} slug={slug} />
      ))}
    </Wrapper>
  );
}

Tags.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(Tag.propTypes),
};

Tags.defaultProps = {
  className: '',
  tags: [],
};

export default Tags;
