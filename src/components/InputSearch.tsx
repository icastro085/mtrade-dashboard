import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { useDebouncedCallback } from 'use-debounce';
import useQueryURL from '../hooks/useQueryURL';
import { t } from '../locale';

interface Props {
  className: string;
}

const WAIT_TIME = 1000;

export default function InputSearch({ className = '' }: Props) {
  const input = useRef(null);
  const { addQuery } = useQueryURL();
  const [text, setText] = useState('');

  const debounced = useDebouncedCallback(
    (textFormatted: string): void => {
      addQuery({ text: textFormatted, page: 0 });
    },
    WAIT_TIME,
  );

  const onChangeText = (e?: any): void => {
    const textFormatted = input?.current?.value?.trim()?.replace(/\s+/g, ' ') || '';
    debounced.callback(textFormatted);

    e?.preventDefault();
  };

  return (
    <form className={classNames(className)} onSubmit={onChangeText}>
      <div className="row">
        <div className="col-12 d-flex group-fields">
          <input
            ref={input}
            type="text"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              onChangeText();
            }}
            placeholder={t('input-search.input.placeholder')} />
          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
}
