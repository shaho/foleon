export interface ActionWithPayload<T, P> {
  type: T;
  payload?: P;
}
