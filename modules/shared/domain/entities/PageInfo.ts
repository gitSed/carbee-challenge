import Cursor from './Cursor';

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousCursor: Cursor;
  nextCursor: Cursor;
}

export default PageInfo;
