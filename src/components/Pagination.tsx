import React from 'react';
import usePagination from '../hooks/usePagination';
import { t } from '../locale';

const PAGINATION_RANGE = 8;
const PAGE_MIN = 1;

interface Props {
  totalItems: number;
}

export default function Pagination({ totalItems }: Props) {
  const {
    previousPage,
    currentPage,
    nextPage,
    totalPages,
    setCurrentPage,
  } = usePagination({ totalItems });

  if (totalPages <= PAGE_MIN) {
    return null;
  }

  const baseLimitRight = totalPages - 1;

  const limitLeft = (currentPage > PAGINATION_RANGE / 2)
    ? 1
    : 4;

  const limitRight = currentPage < baseLimitRight - PAGINATION_RANGE / 2
    ? baseLimitRight - 1
    : baseLimitRight - 4;

  return (
    <nav className="pagination">
      <ul>
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => setCurrentPage(previousPage)}
            role="button"
            tabIndex={0}>
            {t('pagination.previous')}
          </a>
        </li>

        {
          [...Array(totalPages).keys()].map((page) => {
            if (
              totalPages > PAGINATION_RANGE
              && page > limitLeft
              && page < limitRight
              && (
                [previousPage, currentPage, nextPage].indexOf(page) === -1
                || (
                  currentPage <= limitLeft
                  && [previousPage, currentPage].indexOf(page) === -1
                )
                || (
                  currentPage >= limitRight
                  && [currentPage, nextPage].indexOf(page) === -1
                )
              )
            ) {
              return null;
            }

            return (
              [
                (
                  totalPages > PAGINATION_RANGE
                  && page === (
                    currentPage < limitRight
                      ? currentPage - 1
                      : limitRight
                  )
                  && page > (limitLeft + 1)
                )
                  ? (
                    <li className="page-item" key={`${page}-dotleft`}>
                      <span className="page-link">...</span>
                    </li>
                  ) : null,
                (
                  page === currentPage
                    ? (
                      <li className="page-item active" key={page}>
                        <span className="page-link">{page + 1}</span>
                      </li>
                    )
                    : (
                      <li className="page-item" key={page}>
                        <a
                          className="page-link"
                          onClick={() => setCurrentPage(page)}
                          role="button"
                          tabIndex={page}>
                          {page + 1}
                        </a>
                      </li>
                    )
                ),
                (
                  totalPages > PAGINATION_RANGE
                  && page === (
                    currentPage > limitLeft
                      ? currentPage + 1
                      : limitLeft
                  )
                  && page < (limitRight - 1)
                )
                  ? (
                    <li className="page-item" key={`${page}-dotright`}>
                      <span className="page-link">...</span>
                    </li>
                  ) : null,
              ]
            );
          })
        }

        <li className="page-item">
          <a
            className="page-link"
            onClick={() => setCurrentPage(nextPage)}
            role="button"
            tabIndex={nextPage}>
            {t('pagination.next')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
