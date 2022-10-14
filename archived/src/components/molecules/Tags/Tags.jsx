import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '@components/atoms/Tag';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

function Tags({ className, tags }) {
  return (
    <Wrapper className={className}>
      {tags.map(
        ({
          // eslint-disable-next-line camelcase
          accent_color,
          name,
          slug,
        }) => (
          // eslint-disable-next-line camelcase
          <Tag key={slug} color={accent_color} name={name} slug={slug} />
        ),
      )}
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
