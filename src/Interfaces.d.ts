// Types and Interfaces

type State = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;

interface Currency {
  currency: string;
  code: string;
  mid: number;
  isFavourite: boolean;
}
