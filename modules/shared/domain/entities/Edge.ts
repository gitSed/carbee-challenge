import Cursor from './Cursor';

interface Edge<Node> {
  node: Node;
  cursor: Cursor;
}

export default Edge;
