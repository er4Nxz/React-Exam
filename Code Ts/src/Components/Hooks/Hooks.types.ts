export type task = {
  id: string;
  object: string;
  description: string;
  isDone: boolean;
};

export type response<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};
