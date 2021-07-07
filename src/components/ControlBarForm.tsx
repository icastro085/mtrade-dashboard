import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import ControlBar from './ControlBar';
import { t } from '../locale';

interface Props {
  icon: any;
  title: string;
  backPath: string;
  disabledSaveButton?: boolean
}

export default function ControlBarForm({
  icon,
  title,
  backPath,
  disabledSaveButton = false,
}: Props) {
  const history = useHistory();
  const onClickBack = () => {
    history.push(backPath);
  };

  return (
    <ControlBar
      icon={icon}
      title={title}
      showSearchInput={false}>

      <button title={t('buttons.back')} type="button" className="mr-3 back" onClick={onClickBack}>
        <i className="fas fa-arrow-left" />
      </button>

      <button
        title={t('buttons.save')}
        type="submit"
        className={classNames(
          'primary',
          { disabled: disabledSaveButton },
        )}>
        <i className="fas fa-save mr-2" /> {t('buttons.save')}
      </button>
    </ControlBar>
  );
}
