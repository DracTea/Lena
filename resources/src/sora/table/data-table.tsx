import './data-table.scss';
import { useState, useCallback } from 'react';
import { Renew } from '../icons';
import { Text, Button } from '../common';
import { useRouter } from '../routing';
import SearchField from '../fields/search-field';
import { debounce, getValue } from '../globals';
import Pagination from './pagination';
import DataTableAction from './data-table-action';


type Scheme = {
  url: string;
  plural: string;
  singular: string;
  table: {
    actions: any[];
    headers: { id: string; label: string; type: string; sortable?: boolean;  alignment?: string }[];
  }
}

type Items = {
  current_page: number;
  total_pages: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
  data: any[];
}

type Props = {
  scheme: Scheme;
  items: Items;
}

export default function TableData({ scheme, items }: Props) {
  const router = useRouter()
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(items.current_page);
  const [rows, setRows] = useState(items);

  const deb = useCallback(debounce((searchTerm: string) => getData(`${scheme.url}?page=${page}&search=${searchTerm}`), 500),
    [page, scheme.url]
  );

  function ch(name: string, value: string) {
    if (name === 'search') {
      setSearch(value);
      setPage(1);
      deb(value);
      return;
    }
  }

  function lbl(item: any, name: string) {
    return getValue(item, name, '');
  }

  function nv(e: any) {
    e.preventDefault();
    router.push(e.currentTarget.href);
  }

  function pg(p: number) {
    setPage(p);
    router.update(`?page=${p}&search=${search}`);
    getData(`${scheme.url}?page=${p}&search=${search}`);
  }

  function refresh() {
    setPage(1);
    setSearch('');
    getData(`${scheme.url}`);
  }

  async function getData(url: string) {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })

    const data = await res.json();
    setRows(data.props.items);
  }

  function tdItem(item: any, header: any) {
    if (header.type == 'link') {
      if (header.url == '.single') {
        return (<a href={`${scheme.url}/${item.id}`} onClick={nv} className="ath-table-data__link">{lbl(item, header.id)} </a>)
      } else {
        return (<a href={getValue(item, header.url, '')} target={header.out === '' ? undefined : "_blank"} className="ath-table-data__link">{lbl(item, header.id)} </a>)
      }
    }

    return (<span>{lbl(item, header.id)}</span>)
  }

  return (
    <div className="ath-table-data">
      <div className="ath-table-data__header pb-4">
        <Text as="h2" fontWeight="medium" variant="headingMd" className="ath-table-data__title" text={scheme.plural} />
      </div>
      <header className="ath-table__header">
        <SearchField name="search" placeholder="type to search" value={search} onChange={ch} />
        <Button onClick={refresh} size="sm" icon={Renew} hasIconOnly label="Refresh" />
      </header>
      <table aria-label="sample table">
        <thead>
          <tr>
            {scheme.table.headers.map((header) => (
              <th key={header.id} scope="col" className={`ath-table__header-${header.alignment}`}>
                <span>{header.label}</span>
              </th>
            ))}
            {scheme.table.actions.length > 0 && (
              <th scope='col' className="ath-table__header-actions">
                <span>Action</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody aria-live="polite">
          {rows.data.map((item: any) => (
            <tr key={item.id}>
              {scheme.table.headers.map((header) => (
                <td key={header.id} className={`ath-table__data-${header.alignment}`}>
                  {tdItem(item, header)}
                </td>
              ))}
              {scheme.table.actions.length > 0 && (
                <td className="ath-table__data-actions">
                  <DataTableAction />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
        {rows.total == 0 && (
          <div className="ath-table-data__no-results">
            <Text as="p" variant="bodySm" fontWeight="bold" text={`No items in table`} />
          </div>
        )}
      <footer>
        <Pagination items={rows} page={page} onChange={pg} />
      </footer>
    </div>
  )
}