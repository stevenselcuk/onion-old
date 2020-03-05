import { render, configure } from 'enzyme';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import BlogPagination from './BlogPagination';

configure({adapter: new Adapter()});

const LinkStub = (props) => <div {...props} />;

describe('BlogPagination component', () => {
  it('should render nothing if only 1 page', () => {
    const pathname = '/blog/page/1/';
    const pageCount = 1;

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 5 pages', () => {
    const pathname = '/blog/page/2/';
    const pageCount = 5;

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 10 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount = 10;

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly 20 pages', () => {
    const pathname = '/blog/page/5/';
    const pageCount = 20;

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have first link active if no match', () => {
    const pathname = '/plop';
    const pageCount = 10;

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
