import React, { memo, useContext, useEffect, VFC } from 'react';
import { Button } from '../Button/Button';
import Style from './CategoryButtons.module.scss';
import { fetchCategories } from '../../apis/api';
import { Store } from '../../store';

export const CategoryButtons: VFC = memo(() => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(
    () => {
      fetchCategories().then((res) => {
        setGlobalState({
          type: 'SET_CATEGORIES',
          payload: { categories: res.data.items },
        });
      });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className={Style.container}>
      {globalState.categories
        .filter((category) => {
          return category.snippet.assignable === true;
        })
        .map((category) => {
          return (
            <Button
              key={category.id}
              id={category.id}
              text={category.snippet.title}
            />
          );
        })}
    </div>
  );
});
