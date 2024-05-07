export type ItemCardProps = {
  item: ItemCardType;
};

export type ItemCardType = {
  id: string;
  image: string;
  company: string;
  item_name: string;
  original_price: number;
  current_price: number;
  discount_percentage: number;
  return_period?: number;
  delivery_date?: string;
  rating: Rating;
};

export type Rating = {
  stars: number;
  count: number;
};
