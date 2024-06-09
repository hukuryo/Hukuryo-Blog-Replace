type ImageUrl = {
  url: string;
};

export type ArticleContent = {
  id: number;
  title: string;
  publishedAt: string;
  imageUrl: ImageUrl;
  body: string;
  category: string;
  pass: string;
  kinds: string;
};

export type ArticleProps = {
  articles: ArticleContent[];
  pass: string;
};

export type BlogContent = {
  id: number;
  imageUrl: ImageUrl;
  title: string;
  publishedAt: string;
  body: string;
  category: string;
  kinds: string;
};

export type BlogIdProps = {
  blog: BlogContent;
};
