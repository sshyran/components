import React from 'react';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import StarRating from '../star-rating';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
import style from './style.css';
import {hoverFill} from '../../atom/button/hover-fill.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    title: checker.string.optional,
    image: checker.string.optional,
    author: checker.shape({
      name: checker.string.optional,
      href: checker.string.optional
    }).optional,
    href: checker.string.optional
  }),
  children: checker.none
});

const getOrBlank = getOr('');

const CatalogCard = (props, context) => {
  const {translate = identity} = context;
  const learnMore = (
    <span
      dangerouslySetInnerHTML={{
        __html: translate('Learn <span>more</span>')
      }}
    />
  );

  const {
    maxRating = 5,
    rating = 0,
    href = '',
    image,
    author
  } = props;

  return (
    <li className={style.catalogListItem}>
      <div className={style.imageWrapper}>
        <Picture src={image} />
        <div className={style.overlay}>
          <Link className={hoverFill} href={href}>
            {learnMore}
          </Link>
        </div>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.title}>
          <Link href={href}>
            {getOrBlank('title', props)}
          </Link>
        </div>
        <div className={style.subtitle}>
          <Link href={author.href}>
            {translate('by {{name}}', author)}
          </Link>
        </div>
        <StarRating
          rating={rating}
          total={maxRating}
        />
      </div>
    </li>
  );
};

CatalogCard.contextTypes = {
  translate: React.PropTypes.function
};

export default CatalogCard;
