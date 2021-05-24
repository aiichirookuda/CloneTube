import React, { VFC, useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Style from './Header.module.scss';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store/index';

export const Header: VFC = () => {
  const [text, setText] = useState('');
  const history = useHistory();
  const { globalState, setGlobalState } = useContext(Store);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({ type: 'SET_TEXT', payload: { text } });
    history.push(`/search?query=${text}`);
  };
  useEffect(() => {
    setText(globalState.text);
  }, []);
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">
          <span>CloneTube</span>
        </Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};
