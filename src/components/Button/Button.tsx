import React, { memo, useContext, VFC } from 'react';
import Style from './Button.module.scss';
import { Link } from 'react-router-dom';
import { Store } from '../../store';

type Props = {
  id: string;
  text: string;
};

export const Button: VFC<Props> = memo(({ id, text }) => {
  const { setGlobalState } = useContext(Store);

  const getCategoryId = (id) => {
    setGlobalState({
      type: 'SET_SELECTED_CATEGORY_ID',
      payload: { selectedCategoryId: id },
    });
  };

  return (
    <Link to="/category">
      <button className={Style.button} onClick={() => getCategoryId(id)}>
        {text}
      </button>
    </Link>
  );
});
