export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

// This is like schema of Node. Similar schemas would exists for Interface and BBSes.
export interface Node {
  schema: Array<unknown>;
}
