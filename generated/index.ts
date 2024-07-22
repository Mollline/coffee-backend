export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: PriceInput;
  size: Size;
};

export type CreatePromotionCodeInput = {
  code: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  expirationDate: Scalars['String']['input'];
};

export type CreatePromotionInput = {
  description: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  favorites?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  paymentInfo?: InputMaybe<PaymentInfoInput>;
};

export type EditCategoryInput = {
  name: Scalars['String']['input'];
};

export type EditProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceInput>;
  size?: InputMaybe<Size>;
};

export type EditPromotionCodeInput = {
  code: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  expirationDate: Scalars['String']['input'];
};

export type EditPromotionInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  favorites?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  paymentInfo?: InputMaybe<PaymentInfoInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createOrder: Order;
  createProduct?: Maybe<Product>;
  createPromotion?: Maybe<Promotion>;
  createPromotionCode?: Maybe<PromotionCode>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteOrder: Order;
  deleteProduct?: Maybe<Product>;
  deletePromotion?: Maybe<Promotion>;
  deletePromotionCode?: Maybe<PromotionCode>;
  deleteUser?: Maybe<User>;
  editCategory?: Maybe<Category>;
  editOrder: Order;
  editProduct?: Maybe<Product>;
  editPromotion?: Maybe<Promotion>;
  editPromotionCode?: Maybe<PromotionCode>;
  editUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreatePromotionCodeArgs = {
  input: CreatePromotionCodeInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionCodeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditCategoryArgs = {
  id: Scalars['ID']['input'];
  input: EditCategoryInput;
};


export type MutationEditOrderArgs = {
  id: Scalars['String']['input'];
  input?: InputMaybe<OrderInput>;
};


export type MutationEditProductArgs = {
  id: Scalars['ID']['input'];
  input: EditProductInput;
};


export type MutationEditPromotionArgs = {
  id: Scalars['ID']['input'];
  input: EditPromotionInput;
};


export type MutationEditPromotionCodeArgs = {
  id: Scalars['ID']['input'];
  input: EditPromotionCodeInput;
};


export type MutationEditUserArgs = {
  id: Scalars['ID']['input'];
  input: EditUserInput;
};

export type Order = {
  __typename?: 'Order';
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  milkAmount: Scalars['Int']['output'];
  products: Array<OrderProduct>;
  promotionCode?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  user: Scalars['String']['output'];
};

export type OrderInput = {
  milkAmount: Scalars['Int']['input'];
  products?: InputMaybe<Array<OrderProductInput>>;
  promotionCode?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  size: Scalars['String']['output'];
};

export type OrderProductInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type PaymentInfo = {
  __typename?: 'PaymentInfo';
  cardHolder: Scalars['String']['output'];
  cardNumber: Scalars['String']['output'];
  cvv: Scalars['String']['output'];
  expirationDate: Scalars['String']['output'];
};

export type PaymentInfoInput = {
  cardHolder: Scalars['String']['input'];
  cardNumber: Scalars['String']['input'];
  cvv: Scalars['String']['input'];
  expirationDate: Scalars['String']['input'];
};

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Float']['output']>;
  medium?: Maybe<Scalars['Float']['output']>;
  small?: Maybe<Scalars['Float']['output']>;
};

export type PriceInput = {
  large?: InputMaybe<Scalars['Float']['input']>;
  medium?: InputMaybe<Scalars['Float']['input']>;
  small?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Price;
  size: Size;
};

export type Promotion = {
  __typename?: 'Promotion';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PromotionCode = {
  __typename?: 'PromotionCode';
  code: Scalars['String']['output'];
  discount: Scalars['Float']['output'];
  expirationDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories?: Maybe<Array<Category>>;
  getAllOrders?: Maybe<Array<Order>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllPromotionCodes?: Maybe<Array<PromotionCode>>;
  getAllPromotions?: Maybe<Array<Promotion>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
};

export enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  paymentInfo?: Maybe<PaymentInfo>;
};


