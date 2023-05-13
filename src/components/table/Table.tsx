import React, { ReactNode } from "react";
import classNames from "utils/classNames";

interface TableProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

const Table = ({ children }: TableProps) => {
  return <table className="table__cart">{children}</table>;
};

Table.Head = ({ children }: TableProps) => {
  return <thead>{children}</thead>;
};

Table.HeadCell = ({ children }: TableProps) => {
  return <th>{children}</th>;
};

Table.Body = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};

Table.Row = ({ children }: TableProps) => {
  return <tr>{children}</tr>;
};

Table.Cell = ({ children, className, ...props }: TableProps) => {
  return (
    <td className={classNames(className)} {...props}>
      {children}
    </td>
  );
};

Table.Footer = ({ children }: TableProps) => {
  return <tfoot>{children}</tfoot>;
};

export default Table;
