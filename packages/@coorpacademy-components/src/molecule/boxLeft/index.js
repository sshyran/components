import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaLineContentEditionPencil2 as ViewIcon,
  NovaSolidContentContentBook1 as DeleteIcon,
  NovaSolidDataTransferDataUpload1 as EditIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';

import style from './style.css';

const BoxLeft = ({title, edit}, context) => {
  return (
    <div className={style.parent}>
      <div className={style.title}>{title}</div>
      <div className={style.actions}>
        <Link {...edit}>
          <ViewIcon className={style.action} />
        </Link>
        <Link>
          <EditIcon className={style.action} />
        </Link>
        <Link>
          <DeleteIcon className={style.action} />
        </Link>
      </div>
    </div>
  );
};

BoxLeft.contextTypes = {};

BoxLeft.propTypes = {
  title: PropTypes.string,
  edit: PropTypes.shape(Link.propTypes),
  view: PropTypes.shape(Link.propTypes),
  delete: PropTypes.shape(Link.propTypes)
};

export default BoxLeft;
