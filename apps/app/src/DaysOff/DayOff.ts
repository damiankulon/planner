import type { Event } from '@event-driven-io/emmett';


export type ProductItemAddedToShoppingCart = Event<
  'ProductItemAddedToShoppingCart',
  {
    shoppingCartId: string;
    addedAt: Date;
  }
>;
