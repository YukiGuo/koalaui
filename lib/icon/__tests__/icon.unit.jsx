import React from 'react';
import * as renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('icon', () => {
  it('是个 svg', () => {
    console.log('hhhsvg1111');
    const json = renderer.create(<Icon name="add" />).toJSON();
    console.log('hhhsvg');
    expect(json).toMatchSnapshot();
    console.log('hhhsvg2');
  });
});
