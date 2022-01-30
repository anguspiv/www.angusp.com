import React from 'react';
import { render } from '@testing-library/react';

const Example = () => <div>Example</div>;

describe('<Example/>', () => {
  const setup = () => render(<Example />);

  it('should render', () => {
    expect.assertions(1);
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });
});
