import { useMemo, useState } from 'react'
import { Table, Pagination, PaginationSummary, TextField, EmptyState } from 'oks-ui'
import { Search, Inbox } from 'lucide-react'
import { cx } from '../../lib/cx.js'

/**
 * Composed data table: oks-ui <Table> + <TextField> search + <Pagination>.
 * columns: [{ key, header, align?, sortable?, sortValue?(row), render?(row) }]
 */
export function DataTable({
  columns,
  rows,
  getRowKey = (r, i) => r.id ?? i,
  pageSize = 10,
  searchKeys,
  searchable = true,
  selectable = false,
  onSelectionChange,
  loading = false,
  ariaLabel = 'Data table',
  toolbar,
  emptyTitle = 'Nothing to show',
  emptyDescription = 'No records match the current view.',
  className,
}) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (!query || !searchKeys?.length) return rows
    const q = query.toLowerCase()
    return rows.filter((r) =>
      searchKeys.some((k) => String(r[k] ?? '').toLowerCase().includes(q)),
    )
  }, [rows, query, searchKeys])

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const current = Math.min(page, pageCount)
  const start = (current - 1) * pageSize
  const pageRows = filtered.slice(start, start + pageSize)

  return (
    <div className={cx('dyloc-table', className)}>
      {(searchable || toolbar) && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-4 pb-3">
          <div className="flex flex-1 flex-wrap items-center gap-2">{toolbar}</div>
          {searchable && searchKeys?.length > 0 && (
            <TextField
              type="search"
              size="sm"
              placeholder="Search…"
              value={query}
              startIcon={<Search size={14} />}
              onChange={(v) => {
                setQuery(v)
                setPage(1)
              }}
              className="w-full sm:w-56"
            />
          )}
        </div>
      )}
      <div className="dyloc-scroll-x">
        <Table
          aria-label={ariaLabel}
          columns={columns}
          rows={pageRows}
          getRowKey={getRowKey}
          isLoading={loading}
          removeWrapper
          selectionMode={selectable ? 'multiple' : 'none'}
          onSelectionChange={onSelectionChange}
          emptyContent={
            <EmptyState
              size="sm"
              icon={<Inbox size={22} />}
              title={emptyTitle}
              description={emptyDescription}
            />
          }
        />
      </div>
      {filtered.length > pageSize && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3" style={{ borderColor: 'var(--app-border)' }}>
          <PaginationSummary
            page={current}
            pageSize={pageSize}
            total={filtered.length}
            className="text-[12px]"
          />
          <Pagination
            page={current}
            total={filtered.length}
            pageSize={pageSize}
            size="sm"
            onChange={setPage}
          />
        </div>
      )}
    </div>
  )
}
