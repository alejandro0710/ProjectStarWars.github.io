/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { describe, it, expect } from "@jest/globals";
import ProfileFilter from './ProfileFilter';
import { ContextProject } from '../hooks/Context';

describe('ProfileFilter component', () => {
  const data = [
    { name: 'John', gender: 'male' },
    { name: 'Maria', gender: 'female' },
    { name: 'Mike', gender: 'male' },
  ];

  const contextValue = {
    setFilter: jest.fn(),
  };

  it('should render correctly', () => {
    const { getByText } = render(
      <ContextProject.Provider value={contextValue}>
        <ProfileFilter data={data} setFilteredData={() => {}} />
      </ContextProject.Provider>
    );

    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Male')).toBeInTheDocument();
    expect(getByText('Female')).toBeInTheDocument();
  });

  it('should filter by all when clicking on All button', () => {
    const setFilteredDataMock = jest.fn();
    const { getByText } = render(
      <ContextProject.Provider value={contextValue}>
        <ProfileFilter data={data} setFilteredData={setFilteredDataMock} />
      </ContextProject.Provider>
    );

    fireEvent.click(getByText('All'));

    expect(setFilteredDataMock).toHaveBeenCalledWith(data);
    expect(contextValue.setFilter).toHaveBeenCalledWith(true);
  });

  it('should filter by male when clicking on Male button', () => {
    const setFilteredDataMock = jest.fn();
    const { getByText } = render(
      <ContextProject.Provider value={contextValue}>
        <ProfileFilter data={data} setFilteredData={setFilteredDataMock} />
      </ContextProject.Provider>
    );

    fireEvent.click(getByText('Male'));

    expect(setFilteredDataMock).toHaveBeenCalledWith([
      { name: 'John', gender: 'male' },
      { name: 'Mike', gender: 'male' },
    ]);
    expect(contextValue.setFilter).toHaveBeenCalledWith(true);
  });

  it('should filter by female when clicking on Female button', () => {
    const setFilteredDataMock = jest.fn();
    const { getByText } = render(
      <ContextProject.Provider value={contextValue}>
        <ProfileFilter data={data} setFilteredData={setFilteredDataMock} />
      </ContextProject.Provider>
    );

    fireEvent.click(getByText('Female'));

    expect(setFilteredDataMock).toHaveBeenCalledWith([
      { name: 'Maria', gender: 'female' },
    ]);
    expect(contextValue.setFilter).toHaveBeenCalledWith(true);
  });
});
