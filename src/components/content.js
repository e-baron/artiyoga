import React from 'react';
import NestedMdxBlock from '../components/mdx/nested-mdx-block';

const Content = ({ children, className }) => {
  const classValue = `section__content ${className ? className : ''}`;

  return (
    <div className={classValue}>
      <NestedMdxBlock children={children} />
    </div>
  );
};
export default Content;
