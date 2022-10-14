import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';
import { rem } from 'polished';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from '@components/atoms/Divider';

const Nav = styled.nav`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas: 'prev current next';
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: ${rem(14)};
`;

const Prev = styled.div`
  grid-area: prev;
  justify-self: start;
`;

const Current = styled.div`
  grid-area: current;
  justify-self: center;
`;

const Next = styled.div`
  grid-area: next;
  justify-self: end;
`;

const LinkBorder = styled(Divider)`
  width: 0;
  color: ${({ theme }) => theme.colors.teal};
  transition: all 0.2s ease-in-out;
`;

const Icon = styled(FontAwesomeIcon)``;

const PageLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 1.2;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;

    ${LinkBorder} {
      width: 100%;
    }
  }
`;

const PageLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  ${Icon} + & {
    margin-left: ${({ theme }) => theme.spacing(0.5)};
  }

  & + ${Icon} {
    margin-left: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const CurrentPage = styled.span``;

function Pagination({ previousPagePath, nextPagePath, humanPageNumber, numberOfPages }) {
  const theme = useTheme();

  return (
    <Nav>
      <Prev>
        {previousPagePath && (
          <PageLink to={previousPagePath}>
            <Icon icon={faChevronLeft} />
            <PageLabel>
              Previous
              <LinkBorder color={theme.colors.teal} />
            </PageLabel>
          </PageLink>
        )}
      </Prev>
      <Current>
        <CurrentPage>
          {humanPageNumber} of {numberOfPages}
        </CurrentPage>
      </Current>
      <Next>
        {nextPagePath && (
          <PageLink to={nextPagePath}>
            <PageLabel>
              Next
              <LinkBorder color={theme.colors.teal} />
            </PageLabel>
            <Icon icon={faChevronRight} />
          </PageLink>
        )}
      </Next>
    </Nav>
  );
}

Pagination.propTypes = {
  previousPagePath: PropTypes.string,
  nextPagePath: PropTypes.string,
  humanPageNumber: PropTypes.number,
  numberOfPages: PropTypes.number,
};

Pagination.defaultProps = {
  previousPagePath: null,
  nextPagePath: null,
  humanPageNumber: 1,
  numberOfPages: 1,
};

export default Pagination;
