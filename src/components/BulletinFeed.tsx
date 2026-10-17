import { useEffect, useRef, useState } from 'react';
import type { BulletinItem } from '../lib/bulletins';

type Props = {
  items: BulletinItem[];
  pageSize?: number;
};

const arrow = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

function Cover({ item }: { item: BulletinItem }) {
  if (item.cover) {
    return (
      <img
        className="block aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 ease-paper group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        src={item.cover.src}
        width={item.cover.width}
        height={item.cover.height}
        alt={item.cover.alt}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <div className="grid aspect-[4/3] w-full place-items-center bg-note" aria-hidden="true">
      <img className="size-16 opacity-80" src="/assets/flor.svg" alt="" width="64" height="64" />
    </div>
  );
}

export default function BulletinFeed({ items, pageSize = 3 }: Props) {
  const [visible, setVisible] = useState(pageSize);
  const firstNew = useRef<HTMLAnchorElement | null>(null);
  const shouldFocus = useRef(false);

  const shown = items.slice(0, visible);
  const remaining = items.length - shown.length;

  useEffect(() => {
    if (shouldFocus.current) {
      firstNew.current?.focus();
      shouldFocus.current = false;
    }
  }, [visible]);

  const loadMore = () => {
    shouldFocus.current = true;
    setVisible((count) => count + pageSize);
  };

  if (items.length === 0) {
    return <p className="text-sm">Pronto compartiremos los primeros boletines.</p>;
  }

  return (
    <div>
      <ul className="m-0 grid list-none grid-cols-3 gap-12 p-0 compact:grid-cols-2 compact:gap-8 narrow:grid-cols-1 narrow:gap-10">
        {shown.map((item, index) => (
          <li key={item.id} className="min-w-0">
            <article className="group flex h-full flex-col">
              <a
                className="block overflow-hidden bg-white p-2 no-underline shadow-[3px_8px_18px_#0002] transition-transform duration-400 ease-paper group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                href={item.href}
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="overflow-hidden">
                  <Cover item={item} />
                </div>
              </a>
              <div className="flex flex-1 flex-col pt-5">
                <div className="metadata">
                  <span>{item.label}</span>
                  {item.gradesText && <span>{item.gradesText}</span>}
                  <time dateTime={item.dateISO}>{item.dateText}</time>
                </div>
                <h3 className="mt-0 mb-3 text-3xl leading-[1.1]">
                  <a
                    className="no-underline hover:text-coral"
                    href={item.href}
                    ref={index === visible - pageSize ? firstNew : undefined}
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mb-5 max-w-120 text-sm">{item.intro}</p>
                <a className="text-link mt-auto self-start" href={item.href}>
                  Leer el boletín
                  {arrow}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        {remaining > 0 && (
          <button type="button" className="paper-link border-0" onClick={loadMore}>
            Cargar más boletines
          </button>
        )}
        <p className="m-0 text-xs" role="status" aria-live="polite">
          {remaining > 0
            ? `Mostrando ${shown.length} de ${items.length} boletines`
            : items.length > pageSize
              ? `Ya viste los ${items.length} boletines`
              : ''}
        </p>
      </div>
    </div>
  );
}
