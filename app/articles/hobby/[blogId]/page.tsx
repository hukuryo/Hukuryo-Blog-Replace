import { SideBar } from '../../../components/SideBar';
import { PageTracking } from '@/app/components/PageTracking';
import { ArticleContent } from '../../../types/article';
import { ArticlePageLayout } from '@/app/components/ArticlePageLayout';
import { DetailBody } from '../../../components/articleDetail/DetailBody';
import { blogDetailData } from '@/app/lib/microcms';
import { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> => {
  const blogData: ArticleContent = await blogDetailData(params.blogId);

  return {
    title: blogData.title,
    description: blogData.title,
  };
};

export default async function Page({ params }: { params: { blogId: string } }) {
  const blogData: ArticleContent = await blogDetailData(params.blogId);
  console.log(blogData);

  return (
    <>
      <PageTracking
        pass={'hobby'}
        pageTitle={'趣味'}
        articleTitle={blogData.title}
        articlePass={blogData.id}
      />
      <ArticlePageLayout>
        <SideBar />
        <DetailBody blog={blogData} />
      </ArticlePageLayout>
    </>
  );
}
