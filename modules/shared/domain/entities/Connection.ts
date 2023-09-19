import Edge from './Edge';
import PageInfo from './PageInfo';

interface Connection<Node> {
  edges: Edge<Node>[];
  pageInfo: PageInfo;
}

export default Connection;
