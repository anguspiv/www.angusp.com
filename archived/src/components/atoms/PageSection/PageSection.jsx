import styled from 'styled-components';

const PageSection = styled.section`
  max-width: ${({ theme }) => theme.page.width};
  margin: 0 auto ${({ theme }) => theme.paragraphMarginBottom};
`;

export default PageSection;
