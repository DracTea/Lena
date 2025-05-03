import './pagination.scss';
import { Text } from '../common';
import { CaretLeft, CaretRight } from '@carbon/icons-react';
import { SelectField } from '../fields';

type Props = {
  items: any;
  page: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, items, onChange }: Props) {
  function prev() {
    if (page > 1) {
      onChange(page - 1);
    }
  }

  function next() {
    if (page < items.last_page) {
      onChange(page + 1);
    }
  }

  function on(value: string) {
    onChange(parseInt(value));
  }

  function val() {
    const values: { id: number; name: string }[] = [];

    for (let i = 1; i <= items.last_page; i++) {
      values.push({ id: i, name: `${i}` });
    }

    return values.length == 0 ? [{id: 1, name: "1"}] : values;
  }

  return (
    <div className="ath-pagination">
      <div className="ath-pagination__wrapper">
        <div className="ath-pagination__left">
          <Text type="secondary" variant="bodySm" className="ath-pagination__text">Items per page: {items.per_page}</Text>
        </div>
        <div className="ath-pagination__middle">
          <Text type="secondary" variant="bodySm" className="ath-pagination__text">{items.from}–{items.to} of {items.total} items</Text>
        </div>
        <div className="ath-pagination__right">
          <div className='ath-pagination__switch'>
            <SelectField name="page" value={`${page}`} values={val()} onChange={on} variant='inline' />
            <Text type="secondary" variant="bodySm" className="ath-pagination__text">Page {page} of {items.last_page} pages</Text>
          </div>
          <div className='ath-pagination__buttons'>
            <button className="ath-pagination__button" disabled={page == 1} onClick={prev} aria-label='Previous'>
              <CaretLeft />
            </button>
            <span></span>
            <button className="ath-pagination__button" disabled={page == items.last_page} onClick={next} aria-label='Next'>
              <CaretRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}